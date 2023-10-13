import "express-async-errors";
import dotenv from "dotenv";
dotenv.config();
process.env.TZ = "America/Sao_Paulo";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
const app = express();

app.use(mongoSanitize());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const __dirname = dirname(fileURLToPath(import.meta.url));
//connectDB
import connectDB from "./db/connect.js";
//router
import authRouter from "./routes/auth.js";
import fretsRouter from "./routes/fretes.js";
import userRouter from "./routes/userRouter.js";
import historicRouter from "./routes/historicController.js";
import supportRouter from "./routes/support.js";
import messageRouter from "./routes/message.js";
import adminRouter from "./routes/admin.js";
import stripeController from "./routes/stripe.js";
import { stripeWebhook } from "./controllers/stripe.js";
// error handler
import { errorHandlerMiddleware } from "./middleware/error-handler.js";
import { notFound } from "./middleware/not-found.js";
import { corsConfig } from "./utils/corsConfig.js";
import { onRequest } from "firebase-functions/v2/https";

// o webhook tem de ficar antes do express.json
app.post("/webhook", express.raw({ type: "application/json" }), stripeWebhook);
app.use(express.json());
app.use(helmet());
app.use(corsConfig);
app.use(cookieParser(process.env.JWT_SECRET));

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/fretes", fretsRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/historic", historicRouter);
app.use("/api/v1/support", supportRouter);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1", stripeController);
//rollback with checkout
app.use(express.static(path.resolve(__dirname, "./app/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});
//praticando git reset e tals

app.use(notFound);
app.use(errorHandlerMiddleware);
export const frApp = onRequest(app);
const port = process.env.PORT || 8000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // https
    //   .createServer(options, app)
    //   .listen(port, () => console.log(`on ${port}`));
    // app.listen(port, () => console.log(`on ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
