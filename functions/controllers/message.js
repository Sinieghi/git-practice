import { Timer } from "../middleware/timers.js";
import Messages from "../models/Messages.js";

const createMessage = async (req, res) => {
  const timer = Timer();
  const message = await Messages.findOne({ userIp: req.ip });
  if (message) {
    return res.status(200).json({
      msg: "O senhor já nos enviou uma mensagem espere até entramos em contato",
    });
  }
  req.body.userIp = req.ip;
  const newMessage = await Messages.create(req.body);
  timer.cooldownMessages({ id: newMessage._id, ms: 1000 * 60 * 30 });
  res
    .status(201)
    .json({ msg: "mensagem enviada aguarde até entramos em contato" });
};

const getAllMessage = async (req, res) => {
  let result = Messages.find();
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit).sort("-createdAt");
  const message = await result;
  const totalMessage = await Messages.countDocuments();
  const numOfPage = Math.ceil(totalMessage / limit);
  res.status(200).json({ message, totalMessage, numOfPage });
};

const getSingleMessage = async (req, res) => {
  const message = await Messages.findById(req.query.item);
  res.status(200).json({ message });
};

const deleteManyMessages = async (req, res) => {
  await Messages.findByIdAndDelete(req.query.item);
  res.status(200).json({ msg: "ok!" });
};

const deleteMessages = async (req, res) => {
  await Messages.findByIdAndRemove(req.query.item);
  res.status(200).json({ msg: "ok!" });
};

export {
  deleteMessages,
  getAllMessage,
  createMessage,
  getSingleMessage,
  deleteManyMessages,
};
