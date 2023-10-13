import { messageConstruction } from "./emailHtml.js";
import { sendEmail } from "./sendEmail.js";
export const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
  directions,
}) => {
  const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}&sessão=${directions}`;
  const message = messageConstruction(verifyEmail, name);
  // const message = `<p>Confirme seu email clicando no link: <a href=${verifyEmail}>Verificação de email</a></p>`;
  return sendEmail({
    to: email,
    subject: "Confirmação de email",
    html: message[0],
  });
};
