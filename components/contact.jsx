"use client";

import React from "react";
import { EmailForm } from "./email-form";
import SectionHeading from "./section-heading";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 1.0);
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="container grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
    >
      <div className="space-y-8">
        <SectionHeading>Contact</SectionHeading>
        <p className="max-w-[600px] text-muted-foreground md:text-m/relaxed lg:text-base/relaxed xl:text-m/relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          fermentum metus eu suscipit volutpat. Curabitur bibendum nunc in augue
          rutrum posuere. Nulla vestibulum sit amet libero in posuere.
        </p>
      </div>
      <EmailForm />
    </motion.section>
  );
}
