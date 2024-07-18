import { Header } from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";
import { Darkmode } from "@/components/dark-mode";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nick Giuliani",
  description: "Nick Giuliani's portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background dark:bg-background text-foreground dark:text-foreground h-[5000px]`}>
        <Header />  
        {children}
        <Darkmode />
      </body>
    </html>
  );
}
