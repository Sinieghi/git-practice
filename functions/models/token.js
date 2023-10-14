import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema(
  {
    refreshToken: { type: String, required: true },
    ip: {
      type: String,
      required: true,
    },
    userAgent: {
      type: String,
      required: true,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Não conseguimos sua id"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Token", tokenSchema);
