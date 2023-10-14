import express from "express";
import {
  getAllHistoric,
  getHistoric,
  createHistoric,
  updateHistoric,
  deletHistoric,
} from "../controllers/historic.js";
import { auth } from "../middleware/authentication.js";
import {
  validateHistoricCreateIdParams,
  validateHistoricIdParams,
} from "../middleware/validationMiddleware.js";
const router = express.Router();

//A ideia disso aqui é o empresario e caminhoneiro ir atualizando para certificar quais os estatus atual da trajetória

router
  .route("/all-historic/:id")
  .get(auth, validateHistoricIdParams, getAllHistoric);
router
  .route("/criar/:id")
  .post(auth, validateHistoricCreateIdParams, createHistoric);
router.get("/single/:id", auth, getHistoric);
router
  .route("/:id")
  //id validators setados agora falta testar
  .patch(auth, validateHistoricIdParams, updateHistoric)
  .delete(auth, validateHistoricIdParams, deletHistoric);

export default router;
