import express from "express";
import {
  supportCreate,
  suggestionCreate,
  getSuggestion,
  getSupportTickets,
  getSingleSuppofrTicket,
  editSupportTicket,
  deleteSupportTicket,
  deleteManySupportTicket,
} from "../controllers/support.js";
import { auth, authorizePermissions } from "../middleware/authentication.js";
import {
  validateAdminCredentials,
  validateGetSupportTicketForUser,
  validateSupportInputs,
} from "../middleware/validationMiddleware.js";
const router = express.Router();

router
  .route("/start-support/:id")
  .post(auth, validateSupportInputs, supportCreate);
router
  .route("/support-tickets/:id")
  .get(auth, validateAdminCredentials, getSupportTickets);
router.delete(
  "/support-tickets/:id/delete-many",
  auth,
  validateAdminCredentials,
  deleteManySupportTicket
);
router
  .route("/suggestion")
  .post(auth, suggestionCreate)
  .get(auth, authorizePermissions("admin"), getSuggestion);
router
  .route("/:id")
  .get(auth, validateGetSupportTicketForUser, getSingleSuppofrTicket)
  .patch(auth, validateAdminCredentials, editSupportTicket)
  .delete(auth, validateAdminCredentials, deleteSupportTicket);
export default router;
