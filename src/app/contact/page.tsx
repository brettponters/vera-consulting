import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Become a Partner | VERA",
  description:
    "Book a call or send a message. VERA is an AI intelligence partner for real estate wholesalers. We source deals, underwrite contracts, and find the buyer. We JV on every deal.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Become a Partner | VERA",
    description:
      "Book a call or send a message. VERA sources deals, underwrites contracts, and connects wholesalers with the right buyer. We JV on every deal.",
    type: "website",
    url: "https://veraconsulting.co/contact",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Partner | VERA",
    description:
      "Book a call or send a message. AI deal sourcing, underwriting, and buyer matching for real estate wholesalers. We JV on every deal.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
