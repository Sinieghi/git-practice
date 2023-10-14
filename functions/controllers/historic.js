import { StatusCodes } from "http-status-codes";
import Historic from "../models/Historic.js";
import Frete from "../models/Frete.js";
import { BadRequestError } from "../errors/bad-request.js";
import { Timer } from "../middleware/timers.js";
const getAllHistoric = async (req, res) => {
  const historic = await Historic.find({ _id: req.params.id });
  res.status(StatusCodes.OK).json({ historic });
};

const setToconcluded = async (req, res) => {
  const timer = Timer();
  console.log(req.body);
  const frete = await Frete.findById(req.params.id);
  frete.isConcluded = req.body.isConcluded;
  frete.update_at = Date.now();
  if (req.body.isConcluded) {
    frete.isDeleteStatus = false;
  }
  // await frete.save({ timestamps: { updatedAt: false } });
  // if (frete.isConcluded) {
  //   timer.startDelete({
  //     id: req.params.id,
  //     ms: 1000 * 60 * 60,
  //     eventType: "concluded status",
  //   });
  // }
  await frete.save();
  res.status(StatusCodes.OK).json({ msg: "ok!" });
};

const createHistoric = async (req, res) => {
  req.body.user = req.user.userId;
  req.body.frete = req.params.id;
  console.log(req.params.id);
  const isThereHist = await Historic.findOne({ frete: req.params.id });
  if (isThereHist) {
    throw new BadRequestError(
      "O senhor ja criou uma nota sobre esse frete, deseja atualizá-la?"
    );
  }
  console.log(req.body);
  let result = Historic.create(req.body);
  const historic = await result;
  await Frete.findByIdAndUpdate(
    req.params.id,
    { historicBy: historic._id },
    { runValidators: true, new: true }
  );
  res.status(StatusCodes.CREATED).json({ historic, msg: "success!" });
};

const getHistoric = async (req, res) => {
  const historic = await Historic.findOne({ frete: req.params.id });
  if (!historic) {
    res
      .status(StatusCodes.OK)
      .json({ msg: "Nenhuma anotação relacionada a esse frete" });
    return;
  }
  res.status(StatusCodes.OK).json({ historic });
};

const updateHistoric = async (req, res) => {
  const historic = await Historic.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!historic) {
    return res.status(StatusCodes.CONFLICT).json({ msg: "fail!" });
  }

  res.status(StatusCodes.OK).json({ msg: "success!" });
};
const deletHistoric = async (req, res) => {
  const { id } = req.params;
  await Historic.findByIdAndDelete(id);
  res.status(StatusCodes.OK).json({ msg: "Histórico deletado com sucesso" });
};
export {
  getAllHistoric,
  getHistoric,
  createHistoric,
  updateHistoric,
  deletHistoric,
  setToconcluded,
};
