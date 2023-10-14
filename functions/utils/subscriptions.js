import dotenv from "dotenv";
dotenv.config();
import User from "../models/User.js";
import Signature from "../models/Signature.js";
import { BadRequestError } from "../errors/index.js";
import { cardUpdateHandler } from "./clienteCardUpdate.js";
const domain = `${process.env.ORIGIN}`;
export const handlerCheckoutSection = async (subscription) => {
  if (subscription.setup_intent) {
    console.log("SETUP INTENT", subscription.setup_intent);
    cardUpdateHandler(subscription.setup_intent);
    return;
  }
  try {
    const signature = await Signature.create({
      invoice: subscription.invoice,
      subscription: subscription.subscription,
    });
    const user = await User.findOne({ checkoutId: subscription.id }).populate(
      "subscriptionID"
    );
    if (user.subscriptionID) {
      await Signature.findOneAndDelete({
        _id: user.subscriptionID,
      });
    }
    user.subscriptionID = signature._id;
    await user.save();
  } catch (error) {
    console.log(error);
  }
};

//charge succeeded
export const handlerInvoice = async (invoice) => {
  let amount_paid;
  try {
    if (invoice.status === "paid") {
      amount_paid = invoice.amount_paid;
    }

    const queryUpdate = {
      payment_intent: invoice.payment_intent,
      status: invoice.status,
      billing_reason: invoice.billing_reason,
      amount_paid,
      billing_details: [
        {
          email: invoice.customer_email,
          name: invoice.customer_name,
          phone: invoice?.customer_phone,
        },
      ],
    };
    await Signature.findOneAndUpdate({ invoice: invoice.id }, queryUpdate, {
      runValidators: true,
      new: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//invoice paid
export const handleInvoicePaid = async (invoice, response) => {
  //enviar email para o user com o recibo
  try {
    if (invoice.status === "open") {
      const signature = await Signature.findOne({ invoice: invoice.id });
      signature.plan[0].planStatus = invoice.status;
      return;
    }
    if (invoice.status !== "paid" || !invoice.paid) {
      const signature = await Signature.findOne({ invoice: invoice.id });
      const user = await User.findOne({ subscriptionID: signature._id });
      user.role = "caminhoneiro";
      user.signaturePlan = "freeAccount";
      await user.save();
      await signature.delete();
      throw new BadRequestError("status diferente de pago na criação de sub");
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleSubscriptionCreated = async (subscription) => {
  const queryUpdate = {
    customer: subscription.customer,
    plan: [
      {
        subscriptionId: subscription.items.data[0].id,
        status: subscription.status,
        active: subscription.plan.active,
        priceId: subscription.plan.id,
        typeOfPlan: subscription.items.data[0].price.lookup_key,
      },
    ],
  };
  try {
    const signature = await Signature.findOneAndUpdate(
      { subscription: subscription.id },
      queryUpdate,
      {
        runValidators: true,
        new: true,
      }
    );
    const user = await User.findOne({ subscriptionID: signature._id });
    if (signature.plan[0].typeOfPlan === "Plano basico") {
      user.signaturePlan = "basic";
    } else if (signature.plan[0].typeOfPlan === "Plano avançado") {
      user.signaturePlan = "advanced";
    } else if (signature.plan[0].typeOfPlan === "Plano premium") {
      user.signaturePlan = "premium";
    }
    user.role = "empresario";
    user.checkoutId = null;
    await user.save();
  } catch (error) {
    console.log(error);
  }
};

export const handleSubscriptionUpdated = async ({
  subscription,
  request,
  response,
}) => {
  const queryUpdate = {
    at_canceling_process: subscription.cancel_at_period_end,
    plan: [
      {
        subscriptionId: subscription.items.data[0].id,
        active: subscription.plan.active,
        priceId: subscription.plan.id,
        typeOfPlan: subscription.items.data[0].price.lookup_key,
      },
    ],
  };
  try {
    const signature = await Signature.findOneAndUpdate(
      { subscription: subscription.id },
      queryUpdate,
      {
        runValidators: true,
      }
    );
    const user = await User.findOne({ subscriptionID: signature._id });
    if (queryUpdate.plan[0].typeOfPlan === "Plano basico") {
      user.signaturePlan = "basic";
    } else if (queryUpdate.plan[0].typeOfPlan === "Plano avançado") {
      user.signaturePlan = "advanced";
    } else if (queryUpdate.plan[0].typeOfPlan === "Plano premium") {
      user.signaturePlan = "premium";
    }
    user.role = "empresario";
    user.checkoutId = null;
    await user.save();
  } catch (error) {
    console.log(error);
  }
};

export const handleSubscriptionDeleted = async ({
  subscription,
  request,
  response,
}) => {
  try {
    const signature = await Signature.findOne({
      subscription: subscription.id,
    });
    const user = await User.findOne({
      subscriptionID: signature._id,
    });
    user.role = "caminhoneiro";
    user.signaturePlan = "freeAccount";
    signature.deleteOne();
    user.subscriptionID = null;
    await user.save();
  } catch (error) {
    console.log(error);
  }
};
// try {
//   const res = await fetch("http://localhost:10000/api/v1/fretes/todos");
//   const frete = await res.json();
//   console.log(frete);
// } catch (error) {
//   console.log(error);
// }
export const handleDisputStart = async ({ charge_disput, status }) => {};
export const handleSubscriptionTrialEnding = ({
  subscription,
  request,
  response,
}) => {};
