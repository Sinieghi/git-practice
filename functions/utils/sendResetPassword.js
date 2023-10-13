import { sendEmail } from "./sendEmail.js";

export const sendResetPasswordEmail = async ({
  name,
  email,
  token,
  origin,
}) => {
  const resetURL = `${origin}/user/reset-password?token=${token}&email=${email}`;
  const message = `<p>Troque o password ao clicar no link:<a href="${resetURL}">Trocar a senha!</a></p>`;
  return sendEmail({
    to: email,
    subject: "Trocar a Senha",
    html: `<h4>Ola, ${name}</h4>${message}`,
  });
};
