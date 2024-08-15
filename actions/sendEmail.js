"use server";

import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import { formSchema } from "@/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export const sendEmail = async (formData) => {
  const result = formSchema.safeParse(formData);
  const email = result.data.email;
  const subject = result.data.subject;
  const message = result.data.message;
  let data;
  if (result.success) {
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
      errors: result.error.issues,
    };
  }
};
