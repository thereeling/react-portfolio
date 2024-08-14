import { z } from "zod";

export const formSchema = z.object({ 
  email: z
    .string()
    .email({ message: "Must use a valid Email Address" })   
    .max(50),
  subject: z
    .string()
    .min(5, { message: "Subject must have a minumum of 5 characters." })
    .max(50),
  message: z
    .string()
    .min(10, { message: "Email content must have a minumum of 10 characters." })
    .max(250),
});