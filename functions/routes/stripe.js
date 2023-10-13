import express from "express";
import { auth } from "../middleware/authentication.js";
import {
  stripePayment,
  stripePortalSession,
  cancelSignature,
  updateSignature,
  stripeGetUserSubscriptions,
} from "../controllers/stripe.js";
import {
  validateSubscriptionIdParams,
  validateUserSubscriptionIdParams,
} from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post("/create-portal-session", stripePortalSession);
router.post("/create-portal-session/:id");
router.get(
  "/subscription/:id",
  auth,
  validateUserSubscriptionIdParams,
  stripeGetUserSubscriptions
);
router.post("/cancel/:id", auth, validateSubscriptionIdParams, cancelSignature);
router.patch(
  "/update-subscription/:id",
  auth,
  validateSubscriptionIdParams,
  updateSignature
);
router.post("/:priceId/create-checkout-sessions", auth, stripePayment);

export default router;
