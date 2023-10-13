import { StatusCodes } from "http-status-codes";
import Frete from "../models/Frete.js";
import User from "../models/User.js";

import { handleLimiter } from "../utils/handleLimiter.js";
import { UnauthenticatedError, UnauthorizedError } from "../errors/index.js";
import { Timer } from "../middleware/timers.js";
import { filtersHandler } from "../utils/filtersHandler.js";

const getAllFretes = async (req, res) => {
  let {
    sortStatus,
    name,
    city,
    colectDate,
    canvas,
    heavy,
    medium,
    light,
    loadType,
    bodyworkOpen,
    bodyworkClosed,
    bodyworkSpecial,
  } = req.query;
  let dateWithouFilter;
  let date = new Date();
  dateWithouFilter = date.toISOString().split("T")[0];
  let queryObject = {
    isUserDeletede: false,
    isConcluded: false,
    isDeleteStatus: false,
    colectDate: { $gte: new Date() },
  };

  let queryNotifier = [];

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
    queryNotifier.push({ msg: "name" });
  }
  if (city) {
    queryObject.city = { $regex: city, $options: "i" };
    queryNotifier.push({ msg: "city" });
  }

  // console.log(new Date(date.toISOString().split("T")[0]));
  // console.log(new Date(new Date().setHours(0)));
  console.log(new Date(`${colectDate}`) > new Date());
  if (new Date(`${colectDate}`) > new Date()) {
    queryObject.colectDate = { $gte: new Date(`${colectDate}`) };
    queryNotifier.push({ msg: "date" });
  }
  if (canvas) {
    //vou mudar esse cara, vou passar ele para um boolean
  }
  if (sortStatus && sortStatus !== "") {
    queryObject.sortStatus = sortStatus;
    queryNotifier.push({ msg: "states" });
  }
  if (loadType && loadType !== "") {
    queryObject.loadType = { $regex: loadType, $options: "i" };
    queryNotifier.push({ msg: "loadType" });
  }
  if (bodyworkSpecial && bodyworkSpecial !== "") {
    queryObject.bodyworkSpecial = bodyworkSpecial;
    queryNotifier.push({ msg: "body special" });
  }

  if (bodyworkOpen && bodyworkOpen !== "") {
    queryObject.bodyworkOpen = bodyworkOpen;
    queryNotifier.push({ msg: "body open" });
  }
  if (bodyworkClosed && bodyworkClosed !== "") {
    queryObject.bodyworkClosed = bodyworkClosed;
    queryNotifier.push({ msg: "body closed" });
  }
  if (light && light !== "") {
    queryObject.light = light;
    queryNotifier.push({ msg: "ligth" });
  }
  if (medium && medium !== "") {
    queryObject.medium = medium;
    queryNotifier.push({ msg: "medium" });
  }
  if (heavy && heavy !== "") {
    queryObject.heavy = heavy;
    queryNotifier.push({ msg: "heavy" });
  }
  let result = Frete.find(queryObject);
  // console.log(result);
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  if (colectDate) {
    result = result.skip(skip).limit(limit).sort("colectDate");
  } else {
    result = result.skip(skip).limit(limit).sort("colectDate");
  }
  const fretes = await result;

  let msg = await filtersHandler(queryNotifier, fretes, result);
  if (page >= 2 || fretes.length < 10) console.log("alow");
  const totalFretes = await Frete.countDocuments(queryObject).where({
    isUserDeletede: false,
    isConcluded: false,
    isDeleteStatus: false,
  });
  const numOfPage = Math.ceil(totalFretes / limit);
  if (fretes) {
  }
  res.status(StatusCodes.OK).json({ fretes, numOfPage, totalFretes, msg });
};

//create
const creatFretes = async (req, res) => {
  const user = await User.findById(req.user.userId);
  req.body.createdBy = req.user.userId;
  if (!user) {
    throw new UnauthenticatedError("Not user").json({
      msg: `Para ter acesso aos nosso serviços o senhor(a) tem de estar cadastrado, escolha uma das alternativas para se tornar nosso cliente`,
    });
  } else if (user.signaturePlan === "freeAccount") {
    throw new UnauthenticatedError("Não autorizado a postar, account status");
  } else if (user.role === "user") {
    throw new UnauthorizedError(
      `Ola usuário, pedimos desculpas, mas para conseguir postar fretes o senhor(a) tem de ser parceiro`
    );
  } else if (user.role === "caminhoneiro") {
    res.status(StatusCodes.OK).send({
      msg: "O senhor(a) só pode postar fretes caso seja cadastrado como empresario, caso queira mudar seu cadastro entrar em contato!",
    });
    return;
  }
  if (user.role === "empresario" || user.role === "admin") {
    handleLimiter({ user, body: req.body, res });
    return;
  }
};

//get with auth
const getFretes = async (req, res) => {
  const {
    user: { userId },
  } = req;
  let queryObject = {
    createdBy: userId,
    isConcluded: false,
  };

  let result = Frete.find(queryObject);
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit).sort("-createdAt");
  const frete = await result;
  const totalFretes = await Frete.countDocuments(queryObject);
  const numOfPage = Math.ceil(totalFretes / limit);
  res.status(StatusCodes.OK).json({ frete, totalFretes, numOfPage });
};

//get for historic
const getFretesForHistoric = async (req, res) => {
  const {
    user: { userId },
  } = req;
  let queryObject = {
    createdBy: userId,
    isConcluded: true,
  };
  let result = Frete.find(queryObject)
    .populate("historicBy")
    .sort("-createdAt");
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  const frete = await result;
  const totalFretesHist = await Frete.countDocuments(queryObject);
  const numOfPageHist = Math.ceil(totalFretesHist / limit);
  res.status(StatusCodes.OK).json({ frete, totalFretesHist, numOfPageHist });
};

//delete
const setIsDeleteStatus = async (req, res) => {
  const { id } = req.params;
  const { isDeleteStatus } = req.body;
  const frete = await Frete.findById(id);

  if (!frete) return;
  const timer = Timer();
  try {
    if (isDeleteStatus) {
      frete.isDeleteStatus = isDeleteStatus;
      timer.startDelete({ id, ms: 1000 * 60 * 15, eventType: "delte frete" });
      await frete.save({ timestamps: { updatedAt: true } });
      console.log(frete.updatedAt);
      res.status(200).json({ msg: "Set to delete!" });
      return;
    }
    if (!isDeleteStatus) {
      frete.isDeleteStatus = isDeleteStatus;
      await frete.save({ timestamps: { updatedAt: true } });
      res.status(200).json({ msg: "Removed delete status!" });
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteFretes = async (req, res) => {
  // resp = setTimeout(5000, "stp", { signal })
  //   .then(async () => {
  //     if (!frete.isDeleteStatus) return "Stop";
  //     console.log(frete);
  //   })
  //   .catch((err) => console.log(err));
  // timoutId = setTimeout(async () => {
  //   const frete = await Frete.findById(req.params.id);
  //   try {
  //     console.log(req.params);
  //     Frete.findById(req.params.id);
  //     return;
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   clearInterval(timoutId);
  // }, 1000 * 5);
  // console.log("Start the timer", timoutId);
};
const updateFretes = async (req, res) => {
  const {
    params: { id: freteId },
  } = req;
  let frete = await Frete.findOneAndUpdate({ _id: freteId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ msg: "success!", frete });
};

const getSingleFrete = async (req, res) => {
  const frete = await Frete.findById(req.params.freteId);
  res.status(StatusCodes.OK).json({ frete });
};
const getFreteClientShowCase = async (req, res) => {
  const queryObject = {
    createdBy: req.params.createdBy,
    isUserDeletede: false,
    isConcluded: false,
    isDeleteStatus: false,
  };
  let result = Frete.find(queryObject);
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit).sort("colectDate");
  const fretes = await result;
  const totalFretes = await Frete.countDocuments(queryObject);
  const numOfPage = Math.ceil(totalFretes / limit);
  res.status(StatusCodes.OK).json({ fretes, totalFretes, numOfPage });
};

const getNumberOfActiveFrete = async (req, res) => {
  const frete = await Frete.find({ createdBy: req.user.userId })
    .where({ isConcluded: false })
    .countDocuments();
  const freteConcluded = await Frete.find({ createdBy: req.user.userId })
    .where({ isConcluded: true })
    .countDocuments();
  res.status(StatusCodes.OK).json({ frete, freteConcluded });
};

const getNumberOfDoneFrete = async (req, res) => {
  const freteConcluded = await Frete.find({ createdBy: req.user.userId })
    .where({ isConcluded: true })
    .countDocuments();
  res.status(StatusCodes.OK).json({ freteConcluded });
};

const getNumberOfFreteWhereSeteTodelete = async (req, res) => {
  const freteOnDeleteStatus = await Frete.find({ createdBy: req.user.userId })
    .where({ isDeleteStatus: true })
    .countDocuments();
  res.status(StatusCodes.OK).json({ freteOnDeleteStatus });
};

const getNumberOfFreteWhereUserIsDeleted = async (req, res) => {
  const freteWhereUserIsGone = await Frete.find({ createdBy: req.user.userId })
    .where({ isUserDeletede: true })
    .countDocuments();
  res.status(StatusCodes.OK).json({ freteWhereUserIsGone });
};

const createStatusConcluded = (req, res) => {};

export {
  getAllFretes,
  getFretes,
  creatFretes,
  deleteFretes,
  updateFretes,
  getSingleFrete,
  createStatusConcluded,
  getFretesForHistoric,
  setIsDeleteStatus,
  getFreteClientShowCase,
  getNumberOfActiveFrete,
  getNumberOfDoneFrete,
  getNumberOfFreteWhereSeteTodelete,
  getNumberOfFreteWhereUserIsDeleted,
};
