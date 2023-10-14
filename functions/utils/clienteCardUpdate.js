import dotenv from "dotenv";
dotenv.config();
import Stripe from "stripe";
import Signature from "../models/Signature.js";
const stripe = new Stripe(process.env.CHAVE_SECRETA);
export const cardUpdateHandler = async (setup_intent) => {
  try {
    const setupIntent = await stripe.setupIntents.retrieve(setup_intent);
    await stripe.customers.update(setupIntent.metadata.customer_id, {
      invoice_settings: {
        default_payment_method: setupIntent.payment_method,
      },
    });
    await stripe.subscriptions.update(setupIntent.metadata.subscription_id, {
      default_payment_method: setupIntent.payment_method,
    });
  } catch (error) {
    console.log(error);
  }
};
export const customerCardUpdate = async (customer) => {
  try {
    const signature = await Signature.findOne({
      customer: customer.id,
    });
    if (!signature.subscription) return;
    const sub = await stripe.subscriptions.update(signature.subscription, {
      default_payment_method: customer.invoice_settings.default_payment_method,
    });
  } catch (error) {
    console.log(error);
  }
};

try {
  // ("in_1NmCqiJurT2bp9vzc9TcNQ17");
  // const session = await stripe.billingPortal.sessions.create({
  //   customer: "cus_OZLXiKEshJtmlm",
  //   return_url: `${process.env.ORIGIN}/client_page/pagamentos`,
  // });
  // console.log(session);
  // const creditNote = await stripe.creditNotes.preview({
  //   invoice: "in_1NmCqiJurT2bp9vzc9TcNQ17",
  //   lines: [
  //     {
  //       type: "invoice_line_item",
  //       invoice_line_item: "il_1NmDtIJurT2bp9vz05gKr6Kq",
  //       quantity: 1,
  //     },
  //   ],
  // });
} catch (error) {
  console.log(error);
}
