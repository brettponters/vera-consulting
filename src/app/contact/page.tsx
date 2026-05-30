import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact, AI Coaching in Boca Raton",
  description:
    "Book a call or send a message. 1:1 agentic AI coaching, strategy, and integration for coaches, consultants, and solo experts in Boca Raton and Palm Beach County, FL.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact VERA, AI Coaching in Boca Raton",
    description:
      "Book a call or send a message. Agentic AI coaching, strategy, and integration for solo experts whose business runs on trust.",
    type: "website",
    url: "https://veraconsulting.co/contact",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact VERA, AI Coaching in Boca Raton",
    description:
      "Book a call or send a message. Agentic AI coaching for coaches, consultants, and solo experts.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
