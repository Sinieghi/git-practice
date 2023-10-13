import { StatusCodes } from "http-status-codes";
import Frete from "../models/Frete.js";

export async function handleLimiter({ user, body, res }) {
  const freteLimit = await Frete.findOne({
    createdBy: user._id,
    isConcluded: false,
  }).countDocuments();
  switch (user.signaturePlan) {
    case "basic":
      //17
      if (freteLimit <= 16) {
        await Frete.create(body);
        res.status(StatusCodes.CREATED).json({ msg: "success!" });
        break;
      }
    //25
    case "advanced":
      if (freteLimit <= 24) {
        await Frete.create(body);
        res.status(StatusCodes.CREATED).json({ msg: "success!" });
        break;
      }
    //37
    case "premium":
      if (freteLimit <= 36) {
        await Frete.create(body);
        res.status(StatusCodes.CREATED).json({ msg: "success!" });
        break;
      }
    default:
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Limite de fretes foi atingido!" });
  }
}
