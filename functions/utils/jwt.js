import jwt from "jsonwebtoken";

const creatJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);

const attachCookiesToResponse = ({ res, user, refreshToken }) => {
  const accessTokenJWT = creatJWT({ payload: { user } });
  const refreshTokenJWT = creatJWT({ payload: { refreshToken, user } });
  const accessTokenLifetime = 1000 * 60 * 60 * 24;
  const refreshTokenLifeTime = 1000 * 60 * 60 * 24 * 30;
  try {
    res.cookie("accessToken", accessTokenJWT, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      signed: true,
      expires: new Date(Date.now() + accessTokenLifetime),
    });
    res.cookie("refreshToken", refreshTokenJWT, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      signed: true,
      expires: new Date(Date.now() + refreshTokenLifeTime),
    });
  } catch (error) {
    console.log(error);
  }
};

export { attachCookiesToResponse, creatJWT, isTokenValid };
