import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema(
  {
    sendMessage: String,
    email: String,
    phone: String,
    name: String,
    userIp: String,
    pathName: String,
  },
  { timestamps: true }
);
export default mongoose.model("Message", messagesSchema);
