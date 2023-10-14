import User from "../models/User.js";
import Token from "../models/token.js";
import { StatusCodes } from "http-status-codes";
import {
  attachCookiesToResponse,
  setupTokenForUser,
  sendVerificationEmail,
  sendResetPasswordEmail,
  createHash,
} from "../utils/index.js";
import crypto from "crypto";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";

//
import EventEmitter from "events";
const emiter = new EventEmitter();
emiter.on("verifyIfUserLostTheEmail", async function (user, request, response) {
  const origin = process.env.ORIGIN;
  try {
    user.send_email_attempt += 1;
    user.save({ timestamps: { updatedAt: true } });
    if (user.send_email_attempt >= 2) {
      response.status(200).json({
        msg: "Verifique seu email, o email ja foi enviado! Caso não tenha recebido entre em contato",
      });
    } else {
      await sendVerificationEmail({
        name: user.name,
        email: user.email,
        verificationToken: user.verificationToken,
        origin,
        directions: request.query.sendNewEmail,
      });
      return response.status(201).json({ msg: "Email enviado" });
    }
  } catch (error) {
    console.log(error);
  }
});

//register
const register = async (req, res) => {
  console.log(req.body);
  let { email, name, password, role } = req.body;
  const emailAlreadyExiste = await User.findOne({ email });
  if (emailAlreadyExiste) {
    throw new BadRequestError("esse email ja existe");
  }
  role = "caminhoneiro";
  const verificationToken = crypto.randomBytes(40).toString("hex");
  const user = await User.create({
    name,
    email,
    password,
    role,
    verificationToken,
  });
  //tem que colocar esse cara no .env, todas as origins, tem 3 no back-end
  let origin = process.env.ORIGIN;
  await sendVerificationEmail({
    name: user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
    directions: req.query.session,
  });
  res.status(StatusCodes.CREATED).json({
    msg: "Cadastrado! Cheque seu email para verificar sua conta",
  });
};

//verify-email
const verifyEmail = async (req, res) => {
  const { verificationToken, email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Processo de verificação falhou");
  }
  if (user.verificationToken !== verificationToken) {
    throw new UnauthenticatedError("Processo de verificação falhou");
  }

  user.isVerified = true;
  user.verified = Date.now();
  user.verificationToken = "";
  user.send_email_attempt = null;
  await user.save();

  res.status(StatusCodes.OK).json({ msg: "Email verificado com sucesso" });
};
//login
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError(`Preencha todos os campos "email" ou "name"`);
  }
  const user = await User.findOne({ email });
  if (req.query.sendNewEmail) {
    return emiter.emit("verifyIfUserLostTheEmail", user, req, res);
  }
  //colocar esse evento no front
  if (!user) {
    throw new UnauthenticatedError(`credenciais invalidas`);
  }
  const checkedPassword = await user.checkPassword(password);

  if (!checkedPassword) {
    throw new UnauthenticatedError(`Senha invalida`);
  }
  if (!user.isVerified) {
    throw new UnauthenticatedError(
      `Por favor verifique seu email, caso a autenticação não esteja em seu email entre em contato`
    );
  }

  const token = setupTokenForUser(user);
  //criando refreshToken
  let refreshToken = "";

  const existingToken = await Token.findOne({ user: user._id });

  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new UnauthenticatedError(
        `Credenciais invalidas, praticas indevidas`
      );
    }
    refreshToken = existingToken.refreshToken;

    attachCookiesToResponse({ res, user: token, refreshToken });
    res.status(StatusCodes.OK).json({ msg: "ok!" });
    return;
  }

  refreshToken = crypto.randomBytes(40).toString("hex");
  const userAgent = req.headers["user-agent"];
  const ip = req.ip;
  const userToken = { refreshToken, ip, userAgent, user: user._id };

  await Token.create(userToken);

  attachCookiesToResponse({ res, user: token, refreshToken });
  res.status(StatusCodes.OK).json({ user: token.role, msg: "success!" });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new BadRequestError("Por favor forneça um email valido");
  }

  const user = await User.findOne({ email });
  if (user) {
    const passwordToken = crypto.randomBytes(70).toString("hex");
    //email de verificação
    let origin = process.env.ORIGIN;
    await sendResetPasswordEmail({
      name: user.name,
      email: user.email,
      token: passwordToken,
      origin,
    });

    const time = 1000 * 60 * 10;
    const passwordTokenExpirationDate = new Date(Date.now() + time);

    user.passwordToken = createHash(passwordToken);
    user.passwordTokenExpirationDate = passwordTokenExpirationDate;
    await user.save();
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: "Por favor cheque seu email para validar a troca de senha" });
};

const resetPassword = async (req, res) => {
  const { token, email, password } = req.body;
  if (!email || !token || !password) {
    throw new BadRequestError("Por favor forneça todos os valores");
  }
  const user = await User.findOne({ email });

  if (user) {
    const currentDate = new Date();
    if (
      user.passwordToken === createHash(token) &&
      user.passwordTokenExpirationDate > currentDate
    ) {
      user.password = password;
      user.passwordToken = null;
      user.passwordTokenExpirationDate = null;
      await user.save();
    }
  }
  res.status(StatusCodes.OK).json({ msg: "Reset" });
};

const logout = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user.userId });
  res.cookie("accessToken", "logout", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    signed: true,
    expires: new Date(Date.now()),
  });
  res.cookie("refreshToken", "logout", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    signed: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "" });
};

export { login, register, logout, verifyEmail, forgotPassword, resetPassword };
