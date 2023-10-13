export function corsConfig(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  if (process.env.NODE_ENV === "production") {
    res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN);
  } else {
    res.setHeader("Access-Control-Allow-Origin", process.env.ORIGIN);
  }
  next();
}
