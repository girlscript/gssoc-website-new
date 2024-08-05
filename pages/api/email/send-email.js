import ReactDOMServer from "react-dom/server";
import { Resend } from "resend";

import ContactFormEmail from "../../../components/contact-from-mail";

const apiKey = "re_cX3wkkam_PwexuwaiCTmbPSnZguqUn4ec";
const resend = new Resend(apiKey);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phoneNumber, message, isWob } =
      req.body;

    // Render the ContactFormEmail component into HTML markup
    const htmlContent = ReactDOMServer.renderToString(
      <ContactFormEmail
        firstName={firstName}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        message={message}
      />
    );
    try {
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: isWob ? "wob@girlscript.tech" : "gssoc@girlscript.tech",
        subject: "New message from contact form",
        reply_to: email,
        html: htmlContent,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ error: "An error occurred while sending the email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
