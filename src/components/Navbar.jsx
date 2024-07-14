/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ehFdqDW0hLY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
/* import <</Link:import>
/* import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
/* import { Button } from "@/components/ui/button" */

export default function Navbar() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b border-b-muted">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <CodeIcon className="h-6 w-6" />
          <span>John Doe</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#" className="text-sm font-medium transition-colors hover:underline" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:underline" prefetch={false}>
            Contact
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:underline" prefetch={false}>
            Experience
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <div className="grid gap-4 p-4">
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                Projects
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                Contact
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                Experience
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
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
  )
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
  )
}