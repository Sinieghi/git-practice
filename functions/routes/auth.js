import {
  login,
  register,
  logout,
  verifyEmail,
  resetPassword,
  forgotPassword,
} from "../controllers/auth.js";
import express from "express";
import { auth } from "../middleware/authentication.js";
import {
  validatePasswordUpdateInputs,
  validateRegisterInputs,
} from "../middleware/validationMiddleware.js";
const router = express.Router();

//implementar a rota delete amanha, soft delete no caso
router.post("/register", validateRegisterInputs, register);
router.post("/login", login);
router.delete("/logout", auth, logout);
router.post("/verify-email", verifyEmail);
router.post("/reset-password", validatePasswordUpdateInputs, resetPassword);
router.post("/forgot-password", forgotPassword);
export default router;
