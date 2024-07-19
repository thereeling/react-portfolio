"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function AboutMe() {
  return (
    <motion.section className="container py-20 rounded-lg"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    >
      <div className="grid gap-4">
        <div>
          <SectionHeading>About Me</SectionHeading>
        </div>
        <div className="grid gap-2">
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Key Skills</h3>
          <div className="grid text-center grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            <div className="bg-muted/50 px-3 py-1 rounded-md text-sm">TBA</div>
            <div className="bg-muted/50 px-3 py-1 rounded-md text-sm">TBA</div>
            <div className="bg-muted/50 px-3 py-1 rounded-md text-sm">TBA</div>
            <div className="bg-muted/50 px-3 py-1 rounded-md text-sm">TBA</div>
            <div className="bg-muted/50 px-3 py-1 rounded-md text-sm">TBA</div>
            <div className="bg-muted/50 px-3 py-1 rounded-md text-sm">TBA</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
