"use client";

import { React, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { AppWindow, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Project({ title, description, githubURL, projectURL }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <Card className="group relative overflow-hidden rounded-lg border border-input transition-all duration-200 hover:shadow-lg hover:scale-[1.01]">
        {projectURL !== "" ? (
          <Link
            href={projectURL}
            target="_blank"
            className="block overflow-hidden rounded-none"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              alt="Project Thumbnail"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
        ) : (
          <Link
            href={githubURL}
            target="_blank"
            className="block overflow-hidden rounded-none"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              alt="Project Thumbnail"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
        )}

        <CardContent className="p-6 space-y-4">
          <div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <CardDescription className="text-muted-foreground">
              {description}
            </CardDescription>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="default" size="icon">
              <Link href={githubURL} target="_blank" prefetch={false}>
                <Github />
              </Link>
            </Button>
            {projectURL !== "" ? (
              <Button variant="outline">
                <Link
                  href="#"
                  prefetch={false}
                  className="flex items-center gap-2"
                >
                  Live Demo <AppWindow className="opacity-60" />
                </Link>
              </Button>
            ) : (
              <></>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
