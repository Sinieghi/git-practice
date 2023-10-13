import dotenv from "dotenv";
dotenv.config();
import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import Token from "../models/token.js";
import { setupTokenForUser, attachCookiesToResponse } from "../utils/index.js";
import { Timer } from "../middleware/timers.js";
import { UnauthenticatedError } from "../errors/unauthenticated.js";
import { BadRequestError } from "../errors/bad-request.js";
import Signature from "../models/Signature.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.CHAVE_SECRETA);
const updateUser = async (req, res) => {
  const { email, name } = req.body;
  if (req.body.role) return;
  const user = await User.findById(req.query.id)
    .select(
      "-password -createdAt -updatedAt -verified -isVerified -__v  -checkoutId -passwordToken -passwordTokenExpirationDate"
    )
    .populate({
      path: "subscriptionID adminCredentials",
      select: "at_canceling_process",
    });
  if (!user) {
    throw new UnauthenticatedError(`Credenciais inválida`);
  }
  const token = setupTokenForUser(user);
  let refreshToken = "";
  let existingToken = Token.findOne({ user: user._id });
  if (existingToken) {
    user.email = email;
    user.name = name;
    await user.save();
    refreshToken = existingToken.refreshToken;
    attachCookiesToResponse({ res, user: token, refreshToken });
    res.status(201).json({ msg: "Mudanças de credenciais concluídas!", user });
    return;
  }

  res
    .status(StatusCodes.OK)
    .json({ msg: "Não conseguimos realizar as mudanças" });
};

const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    throw new BadRequestError("forneça a nova senha, por favor");
  }
  const user = await User.findOne({ _id: req.user.userId });
  const passwordCheck = await user.checkPassword(oldPassword);
  if (!passwordCheck) {
    throw new BadRequestError(
      "Não conseguimos encontrar a senha, verifique se a senha anterior esta correta"
    );
  }
  user.password = newPassword;
  await user.save();
  res
    .status(StatusCodes.OK)
    .json({ name: user.name, email: user.email, msg: "senha alterada!" });
};

const getUser = async (req, res) => {
  const user = await User.findById(req.user.userId)
    .select(
      "-password -createdAt -updatedAt -verified -isVerified -__v  -checkoutId -passwordToken -passwordTokenExpirationDate"
    )
    .populate({
      path: "subscriptionID adminCredentials",
      select: "at_canceling_process",
    });

  if (!user) {
    return;
  }
  res.status(StatusCodes.OK).json({ user, userIn: true });
};

// para reverter isso aqui a ideia é que o user entre em contato, quando em contato moda o status direto no server, porém o frete tem de ser feito automatico, todos fretes vinculados aquela id volta para false assim que o user logar
const softDelete = async (req, res) => {
  const timer = Timer();
  const { reasons } = req.body;
  const user = await User.findById(req.user.userId);
  if (user.isDeletede) {
    return res
      .status(StatusCodes.OK)
      .json({ msg: "Conta já em processo de cancelamento" });
  }
  user.isDeletede = true;
  user.reasons = reasons;
  const signature = await Signature.findByIdAndUpdate(
    user.subscriptionID,
    { at_canceling_process: true },
    { new: true, runValidators: true }
  );
  if (signature) {
    await stripe.subscriptions.update(signature.subscription, {
      cancel_at_period_end: true,
    });
  }
  await user.save({ timestamps: { updatedAt: true } });

  //mudar a timer também
  timer.startDelete({
    id: user._id,
    ms: 1000 * 60 * 60 * 24 * 30,
    eventType: "soft delete user",
  });

  return res
    .status(StatusCodes.OK)
    .json({ msg: "User removido e suas infos removidas" });
};

const softDeleteReverseStatus = async (req, res) => {
  const user = await User.findById(req.user.userId);
  if (!user.isDeletede) {
    return res
      .status(StatusCodes.OK)
      .json({ msg: "Sua conta já foi recuperada" });
  }
  user.isDeletede = false;
  user.reasons = "";
  const signature = await Signature.findByIdAndUpdate(
    user.subscriptionID,
    { at_canceling_process: false },
    { new: true, runValidators: true }
  );
  if (signature) {
    await stripe.subscriptions.update(signature.subscription, {
      cancel_at_period_end: false,
    });
  }
  await user.save({ timestamps: { updatedAt: true } });
  return res
    .status(StatusCodes.OK)
    .json({ msg: "Processo de cancelamento abortado" });
};

//update req.user on subscription
const UserRoleAndSubscription = async (req, res) => {
  const user = await User.findById(req.user.userId);
  console.log(user);
  const token = setupTokenForUser(user);
  const existingToken = await Token.findOne({ user: user._id });
  let refreshToken = "";
  refreshToken = existingToken.refreshToken;
  attachCookiesToResponse({ res, user: token, refreshToken });
  res.status(StatusCodes.OK).json({ role: user.role });
};

//possível implementação para o futuro

const getAllUserForAdminPage = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users });
};
export {
  updateUser,
  getUser,
  updateUserPassword,
  softDelete,
  softDeleteReverseStatus,
  UserRoleAndSubscription,
  getAllUserForAdminPage,
};
