import nodemailer from "nodemailer";
import brevoTransport from "nodemailer-brevo-transport";

type EmailOptions = {
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail({
  to,
  subject,
  html,
}: EmailOptions): Promise<void> {
  const apikey = process.env.BREVO_SMTP_KEY;
  console.log(apikey);
  const transporter = nodemailer.createTransport(
    new brevoTransport({
      apiKey: process.env.BREVO_SMTP_KEY!,
    })
  );

  await transporter.sendMail({
    from: process.env.BREVO_EMAIL!,
    to,
    subject,
    html,
  });
}
