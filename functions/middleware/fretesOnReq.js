import { NotFoundError } from "../errors.js";

export const freteReq = async (req, res, next) => {
  req.frete = {
    frete: req.body,
  };
  next();
};
