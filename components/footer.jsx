import { Github, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-muted py-6 text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0">
        <div className="text-sm font-medium">© 2024 Nick Giuliani</div>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/ngiuliani94/"
            target="_blank"
            prefetch={false}
          >
            <LinkedinIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://github.com/thereeling"
            target="_blank"
            prefetch={false}
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
