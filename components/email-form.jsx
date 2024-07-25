"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
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
  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  maxlength="50"
                  placeholder="youremail@domain.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>Your Email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input maxlength="50" placeholder="Subject" {...field} />
              </FormControl>
              <FormDescription>Subject</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input maxlength="250" placeholder="Your message" {...field} />
              </FormControl>
              <FormDescription>Subject</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
