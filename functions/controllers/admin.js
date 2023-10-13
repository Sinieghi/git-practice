import dotenv from "dotenv";
dotenv.config();
import { UnauthenticatedError } from "../errors/unauthenticated.js";
import crypto from "crypto";
import User from "../models/User.js";
import { setTimeout } from "timers/promises";
import { StatusCodes } from "http-status-codes";
import { Timer } from "../middleware/timers.js";

const url = process.env.ORIGIN;
const unVerifyUser = async (req, res) => {};

const adminSession = async (req, res) => {
  let sessionToken = crypto.randomBytes(20).toString("hex");
  const queryObj = {
    adminCredentials: [
      {
        session: sessionToken,
      },
    ],
  };

  await User.findByIdAndUpdate(req.params.id, queryObj);
  res.status(StatusCodes.OK).end();
};

const adminPassCheck = async (req, res) => {
  const timer = Timer();
  const queryObj = {
    adminCredentials: [{ isValidSsesion: true }],
  };
  try {
    const user = await User.findByIdAndUpdate(req.params.id, queryObj, {
      new: true,
    });
    console.log(req.body.password);
    const checkedPassword = await user.checkPassword(req.body.password);
    if (checkedPassword) {
      timer.cooldownSupportTicket({ id: req.params.id, ms: 1000 * 60 * 30 });
      res.status(201).json({
        url:
          url +
          `/admin-checkout/admin-page?ref=${user._id}&session=${user.adminCredentials[0].isValidSsesion}`,
        urlMessage:
          url +
          `/admin-checkout/messages-page?ref=${user._id}&session=${user.adminCredentials[0].isValidSsesion}`,
        msg: "ok!",
      });
      return;
    }
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ msg: "Pronto!" });
};

const adminLogin = async (req, res) => {
  try {
    const queryObj = {
      adminCredentials: [{ isValidSsesion: true }],
    };
    await User.findByIdAndUpdate(req.params.id, queryObj);
    res.status(201).json({
      // url: `ref=${user._id}&session=${user.adminCredentials[0].session}`,
      msg: "ok!",
    });
  } catch (error) {
    console.log(error);
  }
};

export { adminPassCheck, adminLogin, adminSession };
