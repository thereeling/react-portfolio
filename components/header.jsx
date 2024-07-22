"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/data";
import { Terminal } from "lucide-react";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export function Header() {
const { activeSection, setActiveSection } = useActiveSectionContext(); 
  return (
    <motion.header
      className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="container flex h-16 items-center justify-between md:px-6 border-opacity-40">
        <Link
          href="#home"
          onClick={() => setActiveSection('Home')}
          className="flex items-center gap-1 text-lg font-bold text-primary"
          prefetch={false}
        >
          <Terminal /> Nick Giuliani
        </Link>
        <nav>
          <ul className="text-muted-foreground hidden items-center gap-7 sm:flex">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  onClick={() => setActiveSection(link.name)}
                  className={clsx(
                    "text-sm font-medium transition-colors hover:text-foreground",
                    {
                      "text-foreground underline": activeSection === link.name,
                    }
                  )}
                  prefetch={false}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="sm:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <ul className="grid gap-4 p-4">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    className="text-sm font-medium transition-colors hover:text-primary focus:text-foreground focus:underline"
                    prefetch={false}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
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
