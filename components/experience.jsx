import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import SectionHeading from "./section-heading";

export default function Experience() {
  return (
    <div className="container md:py-24 lg:py-32">
      <div className="after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 relative pl-6 after:left-0 grid gap-10">
        <SectionHeading>Experience</SectionHeading>
        <div className="grid gap-1 text-sm relative">
          <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
          <div className="font-medium">Senior Software Engineer</div>
          <div className="text-muted-foreground">
            Developed and maintained complex web applications using React,
            Node.js, and MongoDB. Collaborated with cross-functional teams to
            deliver high-quality software.
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>June 2020 - Present</span>
            <span>San Francisco, CA</span>
          </div>
        </div>
        <div className="grid gap-1 text-sm relative">
          <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
          <div className="font-medium">Full-Stack Developer</div>
          <div className="text-muted-foreground">
            Designed and implemented scalable web applications using React,
            Express, and PostgreSQL. Participated in all phases of the software
            development lifecycle.
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>January 2018 - May 2020</span>
            <span>Seattle, WA</span>
          </div>
        </div>
        <div className="grid gap-1 text-sm relative">
          <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
          <div className="font-medium">Software Engineering Intern</div>
          <div className="text-muted-foreground">
            Contributed to the development of a mobile app using React Native
            and Firebase. Gained experience in agile software development
            practices.
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>June 2017 - August 2017</span>
            <span>New York, NY</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
