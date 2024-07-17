"use client";

import React from "react";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowDownToLine, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section className="w-full py-20 md:py-24 lg:py-32"
          initial={{ opacity: 0, y:100 }}
          animate={{ opacity: 1, y:0 }}
    >
      <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Nick Giuliani
            </h1>
            <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
              Software Developer
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              fermentum metus eu suscipit volutpat. Curabitur bibendum nunc in
              augue rutrum posuere. Nulla vestibulum sit amet libero in posuere.
            </p>
          </div>
          <div className="flex justify-start gap-6 min-[400px]:flex-row">
            <Button variant="default">
              <Link href="#contact" prefetch={false}>
                Contact Me
              </Link>
            </Button>
            <Button variant="outline">
              <Link
                href="#"
                prefetch={false}
                className="flex items-center gap-2"
              >
                Download CV <ArrowDownToLine className="opacity-60" />
              </Link>
            </Button>
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
        <img
          src="/placeholder.svg"
          alt="Hero"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
        />
      </div>
    </motion.section>
  );
}
