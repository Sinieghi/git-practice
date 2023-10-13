import nodemailer from "nodemailer";
import { mailConfig } from "./mailerConfig.js";
// isso só é um test account, quando tiver com endereço da onFrete vem aqui e colocar o sendGrid no lugar desse test, isso é só um test
export const sendEmail = async ({ to, subject, html }) => {
  let testAcc = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport(mailConfig);
  return transporter
    .sendMail({
      from: '"onFrete" <onFrete7@gmail.com>', // sender address
      to,
      subject,
      html,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
