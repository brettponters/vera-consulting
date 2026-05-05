import type { Metadata } from "next";
import { dmSans, instrumentSans } from "./fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EditMode } from "@/components/ui/EditMode";
import "./globals.css";

export const metadata: Metadata = {
  title: "VERA",
  description:
    "VERA is a mission-locked AI consulting practice. We help companies integrate put AI to work. Capably, honestly, and with the depth to know how it behaves.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <EditMode />
      </body>
    </html>
  );
}
