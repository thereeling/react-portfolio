"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export const sendEmail = async (formData) => {
  const email = formData.get("email");
  const message = formData.get("message");
  const subject = formData.get("subject");

  if (!validateString(email, 500)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  if (!validateString(subject, 500)) {
    return {
      error: "Invalid subject",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.com>",
      to: fromEmail,
      subject: `Message from contact form: ${subject}`,
      reply_to: email,
      react: <ContactFormEmail message={message} email={email} />,
    });
  } catch (error) {
    return {
      error: error.message,
    };
  }
  return {
    data,
  };
};
