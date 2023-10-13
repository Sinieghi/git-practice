import express from "express";
import { auth } from "../middleware/authentication.js";
import {
  createMessage,
  deleteMessages,
  getAllMessage,
  getSingleMessage,
} from "../controllers/message.js";
import {
  validateAdminCredentials,
  validateMessagesInputs,
} from "../middleware/validationMiddleware.js";
const router = express.Router();
router.route("/send-message").post(validateMessagesInputs, createMessage);
router.get("/all-messages/:id", auth, validateAdminCredentials, getAllMessage);
router
  .route("/:id")
  .delete(auth, validateAdminCredentials, deleteMessages)
  .get(auth, validateAdminCredentials, getSingleMessage);

export default router;
