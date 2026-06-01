import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact, AI Coaching for Real Estate Agents in Boca Raton",
  description:
    "Book a call or send a message. 1:1 agentic AI coaching, strategy, and integration for real estate agents and brokers in Boca Raton, South Florida, and remote.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact VERA, AI Coaching for Real Estate Agents",
    description:
      "Book a call or send a message. Agentic AI coaching, strategy, and integration for real estate agents, teams, and brokers.",
    type: "website",
    url: "https://veraconsulting.co/contact",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact VERA, AI Coaching for Real Estate Agents",
    description:
      "Book a call or send a message. Agentic AI coaching for real estate agents and brokers.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
