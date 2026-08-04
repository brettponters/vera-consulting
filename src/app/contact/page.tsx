import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Become a Partner",
  description:
    "Book a call or send a message. VERA is an AI intelligence partner for wholesalers, investors, and agents. We source deals, underwrite fast, and find the buyer.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Become a Partner",
    description:
      "Book a call or send a message. VERA sources deals, underwrites fast, and connects you with the right buyer. We earn only when you close.",
    type: "website",
    url: "https://veraconsulting.co/contact",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Partner",
    description:
      "Book a call or send a message. AI deal sourcing, underwriting, and buyer matching for real estate wholesalers. We JV on every deal.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
