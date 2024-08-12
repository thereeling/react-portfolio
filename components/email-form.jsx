"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { sendEmail } from "@/actions/sendEmail";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Must use a valid Email Address" })
    .min(2)
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

export function EmailForm() {


  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 space-y-8"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <FormField
          control={form.control}
          name="email"
          id="email"
          required
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  maxLength="50"
                  placeholder="youremail@domain.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="subject"
          id="subject"
          required
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input maxLength="50" placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="message"
          id="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  maxLength="250"
                  placeholder="Your message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
