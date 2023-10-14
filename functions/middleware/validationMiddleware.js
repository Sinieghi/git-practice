import dotenv from "dotenv";
dotenv.config();
import { body, param, query, validationResult } from "express-validator";
import Frete from "../models/Frete.js";
import User from "../models/User.js";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/index.js";
import mongoose from "mongoose";
import { DESTINY, SORT_STATUS } from "../utils/constUtils.js";
import Historic from "../models/Historic.js";
import Support from "../models/Support.js";
const withValidationErrors = (validationValues) => {
  return [
    validationValues,
    (req, res, next) => {
      const errors = validationResult(req);
      console.log(errors);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        const firstMessage = errorMessages[0];
        console.log(Object.getPrototypeOf(firstMessage));
        if (errorMessages[0].startsWith("You are not authorized")) {
          throw new Error(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("the id does not match");
    const frete = await Frete.findById(value);
    if (!frete) throw new NotFoundError("Could not find that frete");
    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === frete.createdBy.toString();
    if (!isAdmin && !isOwner) {
      throw new UnauthorizedError(
        "You are not authorized to update this document"
      );
    }
  }),
]);

export const validateSubscriptionIdParams = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("the id does not match");
    const user = await User.findOne({ subscriptionID: value });
    const isOwner = req.user.userId === user._id.toString();
    if (!isOwner)
      throw new UnauthorizedError(
        "You are not authorized to update this document"
      );
  }),
]);

export const validateHistoricCreateIdParams = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("the id does not match");
    const frete = await Frete.findById(value);
    const isOwner = req.user.userId === frete.createdBy.toString();
    if (!isOwner)
      throw new UnauthorizedError(
        "You are not authorized to create this document"
      );
  }),
]);

export const validateHistoricIdParams = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("the id does not match");
    const historic = await Historic.findById(value);
    const isOwner = req.user.userId === historic.user.toString();
    if (!isOwner)
      throw new UnauthorizedError(
        "You are not authorized to modify this document"
      );
  }),
]);

export const validateFreteUpdateLimit = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const frete = await Frete.findById(value);
    frete.numberOfUpdatesCount++;
    if (frete.numberOfUpdatesCount >= 6) {
      throw new BadRequestError(
        "Limite de atualizações neste documento atingida"
      );
    }
    await frete.save();
  }),
]);

export const validateUserSubscriptionIdParams = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    console.log(value);
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("the id does not match");
    const user = await User.findOne({ subscriptionID: value });
    console.log(req.user.userId);
    const isValidUser = user._id.toString() === req.user.userId;
    if (!isValidUser) {
      throw new UnauthorizedError(
        "You are not authorized to see this document"
      );
    }
  }),
]);

export const validateIsConcluded = withValidationErrors([
  body("isConcluded").custom(async (value, { req }) => {
    if (value) return;
    const user = await User.findById(req.user.userId);
    const freteLimiter = await Frete.findOne({
      createdBy: user._id,
      isConcluded: false,
    }).countDocuments();
    //17
    console.log(user.signaturePlan === "premium");
    if (freteLimiter <= 16 && user.signaturePlan === "basic") return;
    //25
    if (freteLimiter <= 24 && user.signaturePlan === "advanced") return;
    //37
    if (freteLimiter <= 36 && user.signaturePlan === "premium") return;

    throw new BadRequestError("O armazenamento de fretes ativos esta cheio");
  }),
]);

export const validateUserSoftDelete = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email é necessário")
    .custom(async (value, { req }) => {
      if (!value) return;
      const user = await User.findOne({ email: value });
      if (!user) throw new UnauthorizedError("Email invalido");
      const isValid = req.user.userId === user._id.toString();
      if (!isValid) {
        throw new UnauthorizedError("Sua informações não corresponde");
      }
      return user;
    }),
  body("password")
    .notEmpty()
    .withMessage("Senha é necessária")
    .isLength({ min: 6 })
    .custom(async (value, { req }) => {
      if (!value) return;
      const user = await User.findById(req.user.userId);
      const checkedPassword = await user.checkPassword(value);
      if (!checkedPassword) throw new UnauthorizedError("Senha inválida");
    }),
]);
export const validateFreteInput = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("Informe o nome")
    .isLength({ min: 3 })
    .withMessage("Mínimo 3 caracteres nome"),
  body("email")
    .notEmpty()
    .withMessage("Informe o email")
    .isLength({ min: 4 })
    .withMessage("Mínimo 4 carácteres email"),
  body("phone")
    .notEmpty()
    .withMessage("Informe o telefone")
    .isLength({ min: 6 })
    .withMessage("Mínimo 6 caracteres telefone"),
  body("sortStatus")
    .isIn(Object.values(SORT_STATUS))
    .withMessage("Informe o estado partida"),
  body("city")
    .notEmpty()
    .withMessage("Informe a partida")
    .isLength({ min: 2 })
    .withMessage("Mínimo 2 caracteres partida"),
  body("destiny")
    .isIn(Object.values(DESTINY))
    .withMessage("Informe o estado destino"),
  body("toCity")
    .notEmpty()
    .withMessage("Informe o destino")
    .isLength({ min: 2 })
    .withMessage("Mínimo 2 caracteres destino"),
  body("loadType")
    .notEmpty()
    .withMessage("Informe o tipo de carga")
    .isLength({ min: 2 })
    .withMessage("Mínimo 2 caracteres carga"),
  body("canvas")
    .notEmpty()
    .withMessage("Informe a cobertura da carroceria")
    .isLength({ max: 20 })
    .withMessage("Máximo 20 caracteres cobertura"),
  body("colectDate")
    .notEmpty()
    .withMessage("Informe a data de coleta")
    .custom(async (value) => {
      if (!value) return;
      if (
        new Date(`${value}`).valueOf() - 1000 * 60 * 60 * 3 <
        new Date().valueOf() - 1000 * 60 * 60 * 3
      ) {
        throw new BadRequestError(
          "Verifique a data, o valor corresponde a uma data passada"
        );
      }
    }),
  body("price").notEmpty().withMessage("Informe o valor"),
  body("text")
    .notEmpty()
    .withMessage("Informe a descrição")
    .isLength({ min: 10, max: 500 })
    .withMessage("Mínimo 10 e máximo 500 caracteres descrição"),
]);

export const validateRegisterInputs = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("Precisamos do nome")
    .isLength({ min: 3, max: 20 })
    .withMessage("Numero de carácteres inválido, Mínimo é 3 e máximo 20"),
  body("email")
    .notEmpty()
    .withMessage("Precisamos do email")
    .isLength({ min: 5, max: 40 })
    .withMessage("Numero de carácteres inválido, Mínimo é 5 e máximo 40"),
  body("password")
    .notEmpty()
    .withMessage("Precisamos do password")
    .isLength({ min: 8 })
    .withMessage("carácteres Mínimo é 8"),
]);
export const validateUserUpdateInputs = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("Precisamos do nome")
    .isLength({ min: 3, max: 20 })
    .withMessage("Numero de carácteres inválido, Mínimo é 3 e máximo 20"),
  body("email")
    .notEmpty()
    .withMessage("Precisamos do email")
    .isLength({ min: 5, max: 40 })
    .withMessage("Numero de carácteres inválido, Mínimo é 5 e máximo 40"),
  query("id").custom(async (value, { req }) => {
    if (!value) return;
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("the id does not match");
    const user = await User.findById(value);
    const isOwner = req.user.userId === user._id.toString();
    if (!isOwner)
      throw new UnauthorizedError("Sua informações não corresponde");
  }),
]);
export const validatePasswordUpdateInputs = withValidationErrors([
  body("newPassword")
    .notEmpty()
    .withMessage("Precisamos do password")
    .isLength({ min: 8 })
    .withMessage("Carácteres Mínimo é 8"),
]);

export const validateSupportInputs = withValidationErrors([
  body("email").notEmpty().withMessage("Informe o email"),
  body("phone").isLength({ min: 6 }).withMessage("Mínimo 6 caracteres"),
  body("message").notEmpty().withMessage("Coloque uma mensagem"),
  param("id").custom(async (value, { req }) => {
    if (!value) return;
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new UnauthorizedError("Not a valid id");
    const user = await User.findById(value);
    const isValid = req.user.userId === user._id.toString();
    if (!isValid) throw new UnauthorizedError("Unmatched credentials");
    const supportTicket = await Support.findOne({
      createdBy: req.user.userId,
    }).sort("-createdAt");
    if (!supportTicket) return;
    if (Date.now() - supportTicket.createdAt < 1000 * 60 * 60 * 2) {
      throw new BadRequestError(
        "Tickets só pode ser enviados duas horas depois do envio anterior"
      );
    }
  }),
]);

export const validateGetSupportTicketForUser = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    if (!value) return;
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new UnauthorizedError("Not a valid id");
    const user = await User.findById(value);
    const isValid = req.user.userId === user._id.toString();
    if (!isValid) throw new UnauthorizedError("Unmatched credentials");
  }),
]);

export const validateMessagesInputs = withValidationErrors([
  body("name").notEmpty().withMessage("Informe o nome").isLength({ min: 3 }),
  body("email").notEmpty().withMessage("Informe o email"),
  body("phone")
    .notEmpty()
    .withMessage("Informe um telefone")
    .isLength({ min: 6 })
    .withMessage("Mínimo 6 caracteres"),
  body("sendMessage").notEmpty().withMessage("Envie-nos uma mensagem"),
]);

export const validateAdminCredentials = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    if (!value) return;
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("the id does not match");
    const user = await User.findById(value);
    if (user.role !== "admin") {
      throw new UnauthorizedError(
        "You are not authorized to see this document"
      );
    }
    const isAdmin = req.user.role === user.role;
    if (!isAdmin) {
      throw new UnauthorizedError(
        "You are not authorized to see this document"
      );
    }
  }),
]);

export const validadeAdminLogin = withValidationErrors([
  body("userKey")
    .notEmpty()
    .custom(async (value, { req }) => {
      if (!value) return;
      const isValidKey = process.env.ADMIN_KEY === value;
      if (!isValidKey) {
        throw new UnauthorizedError(
          "You are not authorized to see this document"
        );
      }
    }),
]);
