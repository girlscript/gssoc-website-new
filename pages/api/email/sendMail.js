"use server";
import React from "react";
import { Resend } from "resend";

import ContactFormEmail from "../../../components/contact-from-mail";

const apiKey = process.env.NEXT_PUBLIC_RESEND_API_KEY;
const resend = new Resend(apiKey);

export const sendEmail = async (formData) => {
  const { firstName, lastName, email, phoneNumber, message } = formData;

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "pgupta28349@gmail.com", 
      subject: "New message from contact form",
      reply_to: email,
      react: React.createElement(ContactFormEmail, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
      }),
    });
    return {
      success: true,
    };
  } catch (error) {
    let errorMessage;
    if (typeof error === "string") {
      errorMessage = error;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = "An unknown error occurred";
    }
    return {
      error: errorMessage,
    };
  }
};
