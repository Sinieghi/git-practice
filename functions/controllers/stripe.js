import dotenv from "dotenv";
dotenv.config();
import { StatusCodes } from "http-status-codes";
import Signature from "../models/Signature.js";
import User from "../models/User.js";
import {
  handleSubscriptionCreated,
  handlerCheckoutSection,
  handleInvoicePaid,
  handlerInvoice,
  handleSubscriptionDeleted,
  handleDisputStart,
  handleSubscriptionUpdated,
} from "../utils/subscriptions.js";
import Stripe from "stripe";
import { NotFoundError, UnauthenticatedError } from "../errors/index.js";
import { customerCardUpdate } from "../utils/clienteCardUpdate.js";
const stripe = new Stripe(process.env.CHAVE_SECRETA);
const domain = `${process.env.ORIGIN}/pagamentos/status`;

//colocar uma  page referente ao upgrade plan
let upgradeFailUrl = "/upgrade/falhou?changeStatus=false";
let upgradeUrl = `${process.env.ORIGIN}/planos?sucesso=true`;
const stripePayment = async (req, res) => {
  let { userId } = req.user;
  let user = await User.findById(userId);
  if (user.subscriptionID) {
    let redirectUrl = `${process.env.ORIGIN}/produto_assinatura/y/?assinante=sim`;
    // //ao trocar os stats da url ?assinante=true proca um popup perguntando se ele quer ser redirect para a upgrade page
    res.redirect(302, redirectUrl);
    return;
  }
  // if (user.subscriptionID) {
  //   let redirectUrl = `${process.env.ORIGIN}/produto_assinatura/y/?assinante=sim`;
  //   //ao trocar os stats da url ?assinante=true proca um popup perguntando se ele quer ser redirect para a upgrade pages
  //   res.redirect(302, redirectUrl);
  //   return;
  // }
  const { priceId } = req.params;

  const session = await stripe.checkout.sessions.create({
    billing_address_collection: "auto",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${domain}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domain}?canceled=true`,
  });
  user.checkoutId = session.id;
  await user.save();
  res.redirect(302, session.url);
};

const stripPaymenteMethodUpdate = async (req, res) => {
  let { userId } = req.user;
  let user = await User.findById(userId);
  if (user.subscriptionID) {
    const signature = await Signature.findById(user.subscriptionID);
    const sessionForUpdate = await stripe.checkout.sessions.create({
      mode: "setup",
      customer: signature.customer,
      setup_intent_data: {
        metadata: {
          customer_id: signature.customer,
          subscription_id: signature.subscription,
        },
      },
      success_url: `${domain}/success=true?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domain}/canceled=true`,
    });
    // let redirectUrl = `${process.env.ORIGIN}/produto_assinatura/y/?assinante=sim`;
    // //ao trocar os stats da url ?assinante=true proca um popup perguntando se ele quer ser redirect para a upgrade pages
    res.redirect(302, sessionForUpdate.url);
    return;
  }
};

const stripeWebhook = async (request, response) => {
  let event = request.body;
  // Replace this endpoint secret with your endpoint's unique secret
  // If you are testing with the CLI, find the secret by running 'stripe listen'
  // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
  // at https://dashboard.stripe.com/webhooks
  const endpointSecret = process.env.ENDPOINT;

  // Only verify the event if you have an endpoint secret defined.
  // Otherwise use the basic event deserialized with JSON.parse
  if (endpointSecret) {
    // Get the signature sent by Stripe
    const signature = request.headers["stripe-signature"];
    try {
      event = stripe.webhooks.constructEvent(
        request.body,
        signature,
        endpointSecret
      );
      // console.log("event", event);
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return response.sendStatus(400);
    }
  }
  let subscription;
  let status;
  let invoice;
  let customer;
  let billing;
  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      subscription = event.data.object;
      handlerCheckoutSection(subscription);
      break;
    case "setup_intent.succeeded":
      setup_intent = event.data.object;
      console.log("setup intente succeeded", setup_intent);

      break;
    case "setup_intent.created":
      setup_intent = event.data.object;
      console.log("setup intente created", setup_intent);

      break;
    case "charge.succeeded":
      charge_succeded = event.data.object;
      status = charge_succeded.status;
      // console.log(charge_succeded);
      break;

    case "invoice.created":
      invoice = event.data.object;
      handlerInvoice(invoice);
      break;

    case "invoice.finalized":
      invoice = event.data.object;
      handlerInvoice(invoice);
      break;

    case "invoice.updated":
      invoice = event.data.object;
      handlerInvoice(invoice);
      break;

    case "invoice.paid":
      invoice = event.data.object;
      handlerInvoice(invoice, response);
      break;

    case "invoice.payment_succeeded":
      invoice = event.data.object;
      handleInvoicePaid(invoice);
      break;
    case "invoice.payment_failed":
      invoice = event.data.object;
      console.log(invoice);
      // handleInvoicePaid(invoice);
      break;
    case "invoiceitem.created":
      invoice = event.data.object;
      // console.log(invoice);

      break;
    case "invoice.payment_failed":
      // The payment failed or the customer does not have a valid payment method.
      // The subscription becomes past_due. Notify your customer and send them to the
      // customer portal to update their payment information.
      break;
    //fraud segment
    case "charge.dispute.created":
      //pelo que entendi aqui se procar é que a strip detectou cartão fraudolente, porém a cobrança foi efetuada com sucesso
      //esse cara aqui representa uma disputa, eu tenho que coletar dados para lutar contra a contestação, u só deixar pra la
      charge_disput = event.data.object;
      status = charge_succeded.status;
      // console.log("charge.dispute.created");
      handleDisputStart({ charge_disput, status });
      break;
    case "charge.dispute.funds_withdrawn":
      charge_disput = event.data.object;
      status = charge_succeded.status;
      // console.log(status);
      // console.log("charge.dispute.funds_withdrawn", charge_disput);
      // handleDisputStart({ charge_disput, status });
      break;
    case "customer.subscription.deleted":
      subscription = event.data.object;
      status = subscription.status;
      handleSubscriptionDeleted({ subscription, request, response });
      break;
    case "customer.subscription.created":
      subscription = event.data.object;
      status = subscription.status;
      // console.log(subscription);
      handleSubscriptionCreated(subscription);
      break;
    case "customer.subscription.trial_will_end":
      subscription = event.data.object;
      status = subscription.status;
      console.log("trial_will_end", subscription);
      break;
    case "customer.subscription.updated":
      subscription = event.data.object;
      status = subscription.status;
      console.log("delete process start", subscription);
      handleSubscriptionUpdated({
        subscription,
        request,
        response,
      });
      break;
    case "billing_portal.session.created":
      billing = event.data.object;
      status = billing.status;
      console.log("billing portal sec created", billing);

      break;
    case "customer.updated":
      customer = event.data.object;
      status = customer.status;
      customerCardUpdate(customer);
      break;
    case "payment_method.attached":
      subscription = event.data.object;
      status = subscription.status;
      console.log("ATACH", subscription);
      break;
    case "payment_method.detached":
      subscription = event.data.object;
      status = subscription.status;
      console.log("DETACH", subscription);
      break;
    case "payment_intent.succeeded":
      subscription = event.data.object;
      status = subscription.status;
      console.log("payment_intent.succeeded", subscription);
      break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }
  // Return a 200 response to acknowledge receipt of the event
  response.status(200).end();
};

const updateSignature = async (req, res) => {
  let password = req.body.password;

  const user = await User.findOne({ _id: req.user.userId });
  const checkedPassword = await user.checkPassword(password);
  if (!checkedPassword) {
    throw new UnauthenticatedError(`Senha inválida`);
  }
  const signature = await Signature.findOne({ _id: req.params.id });
  if (signature.at_canceling_process) {
    const billingSession = await stripe.billingPortal.sessions.create({
      customer: signature.customer,
      return_url: `${process.env.ORIGIN}/client_page/pagamentos?sessionId=${user.subscriptionID}`,
    });
    await signature.save();
    res.status(StatusCodes.CREATED).json({
      url: billingSession.url,
      msg: "Processo de cancelamento abortado",
    });
    return;
  }

  const update = await stripe.subscriptions.update(signature.subscription, {
    items: [
      {
        id: signature.plan[0].subscriptionId,
        price: req.body.priceId,
      },
    ],
  });
  if (update)
    return res
      .status(StatusCodes.OK)
      .json({ msg: `onFrete agradece sua prioridade`, upgradeUrl });

  res.status(StatusCodes.OK).json({
    msg: `Houve algum problema, tente mais tarde`,
    upgradeFailUrl,
  });
};
const cancelSignature = async (req, res) => {
  let password = req.body.password;
  const user = await User.findOne({ _id: req.user.userId });
  const checkedPassword = await user.checkPassword(password);
  if (!checkedPassword) {
    throw new UnauthenticatedError(`Senha inválida`);
  }
  const signature = await Signature.findOne({ _id: user.subscriptionID });
  if (signature.at_canceling_process) {
    throw new NotFoundError(`O senhor(a) já deletou a assinatura!`);
  }
  const billingSession = await stripe.billingPortal.sessions.create({
    customer: signature.customer,
    return_url: `${process.env.ORIGIN}/client_page/pagamentos?sessionId=${user.subscriptionID}`,
  });
  await signature.save({ timestamps: { updatedAt: true } });
  await user.save({ timestamps: { updatedAt: true } });
  res.status(StatusCodes.CREATED).json({ url: billingSession.url });
};

const stripePortalSession = async (req, res) => {
  const { sessionId } = req.body;
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);
  const returnUrl = `${process.env.ORIGIN}/frete_page`;
  const portalSession = await stripe.billingPortal.sessions.create({
    customer: checkoutSession.customer,
    return_url: returnUrl,
  });
  res.status(201).json({ url: portalSession.url });
  // res.redirect(302, portalSession.url);
};

const stripeGetUserSubscriptions = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const signature = await Signature.findOne({ _id: user.subscriptionID });
  const invoice = await stripe.invoices.list({
    customer: signature.customer,
  });
  console.log(invoice);
  let status;

  const subscriptionObj = {
    at_canceling_process: signature.at_canceling_process,
    cancellation_details: invoice?.cancellation_details || "",
    typeOfPlan: signature.plan[0].typeOfPlan,
    status: invoice.data[0].status,
    hosted_invoice_url: invoice.data[0].hosted_invoice_url,
  };
  //receipt: invoice.data[0].hosted_invoice_url, onde eu posso passar isso? email por suporte

  console.log(subscriptionObj);
  res.status(StatusCodes.OK).json({ subscriptionObj });
};

export {
  stripePayment,
  stripePortalSession,
  stripeWebhook,
  cancelSignature,
  updateSignature,
  stripeGetUserSubscriptions,
  stripPaymenteMethodUpdate,
};
