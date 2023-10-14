import dotenv from "dotenv";
dotenv.config();
export let mailConfig;
if (process.env.NODE_ENV === "production") {
  mailConfig = {
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_EMAIL,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  };
} else {
  mailConfig = {
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "janessa.von34@ethereal.email",
      pass: "Xxa3g9xTdPzUVFkPjR",
    },
  };
}
