import { isTokenValid, attachCookiesToResponse } from "../utils/index.js";
import Token from "../models/token.js";
import { UnauthenticatedError } from "../errors/unauthenticated.js";

const auth = async (req, res, next) => {
  let { refreshToken, accessToken } = req.signedCookies;
  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken);
      req.user = payload.user;
      // console.log(req.user);
      return next();
    }
    const payload = isTokenValid(refreshToken);
    const existingToken = await Token.findOne({
      user: payload.user.userId,
      refreshToken: payload.refreshToken,
    });
    if (!existingToken || !existingToken?.isValid) {
      throw new UnauthenticatedError(`Token inexistente ou invalido`);
    }
    attachCookiesToResponse({
      res,
      refreshToken: existingToken.refreshToken,
      user: payload.user,
    });
    req.user = payload.user;
    // console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
    throw new UnauthenticatedError(
      "Ocorreu algum problema ao enviar as credenciais para o auth"
    );
  }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        "Unauthorized to access this route"
      );
    }
    next();
  };
};

export { auth, authorizePermissions };
