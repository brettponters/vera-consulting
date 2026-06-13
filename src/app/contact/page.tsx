import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact VERA, AI for Real Estate Investors in Boca Raton",
  description:
    "Book a call or send a message. VERA sources off-market deals and motivated seller leads for real estate investors and agents. Boca Raton, South Florida, and remote.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact VERA, AI for Real Estate Investors",
    description:
      "Book a call or send a message. VERA sources off-market deals and motivated seller leads for real estate investors, agents, teams, and brokers.",
    type: "website",
    url: "https://veraconsulting.co/contact",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact VERA, AI for Real Estate Investors",
    description:
      "Book a call or send a message. VERA finds off-market deals and motivated seller leads for real estate investors and agents.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
