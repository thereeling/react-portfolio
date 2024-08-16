"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { sendEmail } from "@/actions/sendEmail";
import { formSchema } from "@/lib/schemas";
import { SuccessAlert, ErrorAlert } from "./alerts";
import { Button } from "./ui/button";

export function EmailForm() {
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const processForm = async (formData) => {
    setButtonDisabled(true);
    const { data, error, errors } = await sendEmail(formData);

    if (error || errors) {
      ErrorAlert(error, errors);
      setButtonDisabled(false);
      return;
    }
    setButtonDisabled(false);
    SuccessAlert();
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 space-y-8"
        onSubmit={form.handleSubmit(processForm)}
      >
        <FormField
          control={form.control}
          name="email"
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="h-52"
                  maxLength="250"
                  placeholder="Your message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="disabled:scale-100 disabled:bg-opacity-55"
          disabled={buttonDisabled}
        >
          {buttonDisabled ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-border"></div>
          ) : (
            <>Submit</>
          )}
        </Button>
      </form>
    </Form>
  );
}
