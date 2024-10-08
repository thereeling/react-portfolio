"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experienceData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.80);
  return (
    <motion.div
      ref={ref}
      id="experience"
      className="mb-28 sm:mb-40 container py-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.225 }}
    >
      <div className="after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 relative pl-6 after:left-0 grid gap-10">
        <SectionHeading>Experience</SectionHeading>
        {experienceData.map((experience) => (
          <div key={experience} className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
            <div className="font-medium">{experience.title}</div>
            <div className="text-muted-foreground">
              {experience.description}
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{experience.date}</span>
              <span>{experience.location}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
