import { StatusCodes } from "http-status-codes";
import Support from "../models/Support.js";
import { Timer } from "../middleware/timers.js";

const supportCreate = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const timer = Timer();
  await Support.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "Pedido de suporte enviado" });
};
const getSupportTickets = async (req, res) => {
  const queryObject = {
    isOpen: true,
  };
  let result = Support.find();
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit).sort("-createdAt");
  const support = await result;
  const totalSupport = await Support.countDocuments(queryObject);
  const numOfPage = Math.ceil(totalSupport / limit);
  res.status(200).json({ support, totalSupport, numOfPage });
};

const getSingleSuppofrTicket = async (req, res) => {
  const support = await Support.findOne({
    createdBy: req.params.id,
  }).sort("-createdAt");
  res.status(200).json({ support });
};

const editSupportTicket = async (req, res) => {
  const queryEditor = {
    isOpen: req.body.isOpen,
    sessionChanges: [
      {
        conclusion: req.body.conclusion,
        status: req.body.status,
      },
    ],
  };
  const message = await Support.findByIdAndUpdate(req.query.item, queryEditor, {
    runValidators: true,
    new: true,
  });
  // console.log(support.sessionChanges);
  // support.sessionChanges[0].conclusion = req.body.conclusion;
  // support.sessionChanges[0].status = req.body.status;
  // support.isOpen = req.body.isOpen;
  // support.save({ timestamps: { updatedAt: true } });
  res.status(201).json({ msg: "ok!", message });
};
const deleteSupportTicket = async (req, res) => {
  await Support.findByIdAndDelete(req.query.item);
  res.status(StatusCodes.OK).json({ msg: "ok!" });
};
const deleteManySupportTicket = async (req, res) => {
  console.log(req.query);
  await Support.findByIdAndDelete(req.query.item);
  res.status(StatusCodes.OK).json({ msg: "ok!" });
};
const suggestionCreate = async (req, res) => {};
const getSuggestion = async (req, res) => {};
export {
  supportCreate,
  suggestionCreate,
  getSupportTickets,
  getSuggestion,
  getSingleSuppofrTicket,
  editSupportTicket,
  deleteSupportTicket,
  deleteManySupportTicket,
};
