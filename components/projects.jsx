"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.9);

  return (
    <motion.section
      ref={ref}
      className="w-full py-20"
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.200 }}
    >
      <div className="container grid gap-8">
        <div>
          <SectionHeading>Projects</SectionHeading>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
