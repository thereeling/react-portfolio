import React from "react";
import { EmailForm } from "./email-form";
import SectionHeading from "./section-heading";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export default function EmailSection() {
  return (
    <section className="container grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div className="space-y-8">
        <SectionHeading>Contact</SectionHeading>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          fermentum metus eu suscipit volutpat. Curabitur bibendum nunc in augue
          rutrum posuere. Nulla vestibulum sit amet libero in posuere.
        </p>
        <div className="flex flex-wrap gap-6 min-[400px]:flex-row">
          <Button variant="outline" size="icon">
            <Link
              href="https://www.linkedin.com/in/ngiuliani94/"
              target="_blank"
              prefetch={false}
            >
              <Linkedin />
            </Link>
          </Button>
          <Button variant="outline" size="icon">
            <Link
              href="https://github.com/thereeling"
              target="_blank"
              prefetch={false}
            >
              <Github />
            </Link>
          </Button>
        </div>
      </div>
      <EmailForm />
    </section>
  );
}
