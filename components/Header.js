"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none sm:shadow-md sm:border sm:border-input sm:top-6 sm:h-[3.25] sm:w-[36rem] sm:rounded-md"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
    >
      <div className="container flex h-16 items-center sm:justify-center justify-end px-4 md:px-6 border-opacity-40">
        <nav className="text-muted-foreground hidden items-center gap-7 sm:flex">
          <Link
            href="#home"
            className="text-md font-medium transition-colors hover:text-foreground focus:text-foreground focus:underline"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#about"
            className=" text-md font-medium transition-colors hover:text-foreground focus:text-foreground focus:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-md font-medium transition-colors hover:text-foreground focus:text-foreground focus:underline"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="text-md font-medium transition-colors hover:text-foreground focus:text-foreground focus:underline"
            prefetch={false}
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="text-md font-medium transition-colors hover:text-foreground focus:text-foreground focus:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="sm:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <div className="grid gap-4 p-4">
              <Link
                href="#home"
                className="text-sm font-medium transition-colors hover:text-primary focus:text-foreground focus:underline"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium transition-colors hover:text-primary focus:text-foreground focus:underline"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium transition-colors hover:text-primary focus:text-foreground focus:underline"
                prefetch={false}
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-sm font-medium transition-colors hover:text-primary focus:text-foreground focus:underline"
                prefetch={false}
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium transition-colors hover:text-primary focus:text-foreground focus:underline"
                prefetch={false}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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
