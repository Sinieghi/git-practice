import {
  getAllFretes,
  creatFretes,
  updateFretes,
  getSingleFrete,
  getFretesForHistoric,
  setIsDeleteStatus,
  getFreteClientShowCase,
  getFretes,
  getNumberOfActiveFrete,
  getNumberOfDoneFrete,
} from "../controllers/fretes.js";
import { setToconcluded } from "../controllers/historic.js";
import { auth } from "../middleware/authentication.js";
import express from "express";
import {
  validateFreteInput,
  validateFreteUpdateLimit,
  validateIdParam,
  validateIsConcluded,
} from "../middleware/validationMiddleware.js";
const router = express.Router();

router.route("/todos").get(getAllFretes);
router.route("/criar").post(auth, validateFreteInput, creatFretes);
router.route("/frete-user").get(auth, getFretes);
router.route("/frete-user-historic").get(auth, getFretesForHistoric);
// router.route("/document-count", auth).get(getNumberOfActiveFrete);
router.route("/single/:freteId").get(getSingleFrete);
router.get("/client_showcase/:createdBy/frete-user", getFreteClientShowCase);
router
  .route("/:id/status")
  .patch(auth, validateIdParam, validateIsConcluded, setToconcluded);
router
  .route("/:id/define_status")
  .patch(auth, validateIdParam, setIsDeleteStatus);
router
  .route("/:id")
  .patch(
    auth,
    [validateIdParam, validateFreteInput, validateFreteUpdateLimit],
    updateFretes
  );

export default router;
