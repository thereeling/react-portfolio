"use server";

import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import { formSchema } from "@/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export const sendEmail = async (_prevState, formData) => {
  const validation = formSchema.safeParse({
    email: formData.get("email"),
    message: formData.get("message"),
    subject: formData.get("subject"),
  });
  let data;
  if (validation.success) {
    try {
      data = await resend.emails.send({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
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
  } else {
    return {
      errors: validation.error.issues,
    }
  }
};
