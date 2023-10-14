import mongoose from "mongoose";

const signatureSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
    },

    billing_details: [
      {
        email: {
          type: String,
          default: "",
        },
        name: {
          type: String,
          default: "",
        },
        phone: {
          type: Number,
          default: 0,
        },
      },
    ],
    at_canceling_process: {
      type: Boolean,
      default: false,
    },
    plan: [
      {
        //subscription item
        subscriptionId: {
          type: String,
          default: "",
        },
        planStatus: {
          type: String,
          default: "",
        },
        active: {
          type: Boolean,
          default: false,
        },
        priceId: {
          type: String,
          default: "",
        },
        //basic,advanced or premium
        typeOfPlan: { type: String, default: "" },
      },
    ],
    billing_reason: {
      type: String,
    },
    checkoutId: {
      type: String,
      default: "",
    },
    //id
    invoice: {
      type: String,
      default: "",
    },
    //id
    subscription: {
      type: String,
      default: "",
    },
    //id
    payment_intent: {
      type: String,
      default: "",
    },
    //id
    charge_succeded: {
      type: String,
      default: "",
    },
    amount_paid: {
      type: Number,
    },
    status: {
      type: String,
      default: "",
    },
    reason: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Signature", signatureSchema);
