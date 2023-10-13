import mongoose from "mongoose";
import { softDeletePlugin } from "soft-delete-plugin-mongoose";

const softDeleteSchema = new mongoose.Schema(
  {
    userDel: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reasons: String,
    deletedAt: Date,
  },
  { timestamps: true }
);

softDeleteSchema.plugin(softDeletePlugin);
export default mongoose.model("SoftDel", softDeleteSchema);
