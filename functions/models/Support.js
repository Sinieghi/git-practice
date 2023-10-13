import mongoose from "mongoose";
import { SUPPORT_ENUM } from "../utils/constUtils.js";

const supportSchema = new mongoose.Schema(
  {
    supportEnum: {
      type: String,
      enum: Object.values(SUPPORT_ENUM),
      default: SUPPORT_ENUM.default,
    },
    supportOpt: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    message: {
      type: String,
    },
    suggestData: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    sessionChanges: [
      {
        conclusion: {
          type: String,
          default: null,
        },
        status: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("Support", supportSchema);
