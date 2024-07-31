import { Header } from "@/components/header";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Darkmode } from "@/components/dark-mode";
import ActiveSectionContextProvider from "@/context/active-section-context";

const roboto = Roboto_Mono({ subsets: ["latin"], display: "swap", });

export const metadata = {
  title: "Nick Giuliani",
  description: "Nick Giuliani's portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.className} !scroll-smooth`}>
      <body
        className={`bg-background dark:bg-background text-foreground dark:text-foreground h-[5000px]`}
      >
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
        <Darkmode />
      </body>
    </html>
  );
}
