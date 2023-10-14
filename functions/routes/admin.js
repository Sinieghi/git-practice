import express from "express";
import { auth } from "../middleware/authentication.js";
import {
  adminLogin,
  adminPassCheck,
  adminSession,
} from "../controllers/admin.js";
import {
  validadeAdminLogin,
  validateAdminCredentials,
} from "../middleware/validationMiddleware.js";
const router = express.Router();

router.post("/admin-user/:id", auth, validateAdminCredentials, adminPassCheck);
router.post(
  "/admin-user/:id/login",
  auth,
  validateAdminCredentials,
  validadeAdminLogin,
  adminLogin
);
router.post("/:id", auth, validateAdminCredentials, adminSession);

export default router;
