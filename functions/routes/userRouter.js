import {
  updateUser,
  getUser,
  softDelete,
  updateUserPassword,
  UserRoleAndSubscription,
  softDeleteReverseStatus,
  getAllUserForAdminPage,
} from "../controllers/userController.js";
import express from "express";
const router = express.Router();
import { auth } from "../middleware/authentication.js";
import {
  validateAdminCredentials,
  validateUserSoftDelete,
  validateUserUpdateInputs,
} from "../middleware/validationMiddleware.js";

//eesa daqui é uma rota complicada, como vou querer isso? vou limitar para uma role especifica para ver todos os users?
router.get("/single-user", auth, getUser);
router.route("/updatePassword").patch(auth, updateUserPassword);
router.route("/updateUser").patch(auth, validateUserUpdateInputs, updateUser);
router.get("/role-plan", auth, UserRoleAndSubscription);
// router
//   .route("/admin-user-route/:id")
//   .get(auth, validateAdminCredentials, getAllUserForAdminPage);
router
  .route("/:id/abort-delete")
  .post(auth, validateUserSoftDelete, softDeleteReverseStatus);
router.route("/:id").post(auth, validateUserSoftDelete, softDelete);

export default router;
