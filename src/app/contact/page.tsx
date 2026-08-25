import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: {
    absolute: "Plan Your B2B Growth | VERA Solutions",
  },
  description:
    "Define a measurable B2B growth target with VERA Solutions and explore the acquisition system required to reach it.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Plan Your B2B Growth | VERA Solutions",
    description:
      "Define a measurable B2B growth target with VERA Solutions and explore the acquisition system required to reach it.",
    type: "website",
    url: "https://www.verasolutions.ai/contact",
    siteName: "VERA Solutions",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan Your B2B Growth | VERA Solutions",
    description:
      "Define a measurable B2B growth target with VERA Solutions and explore the acquisition system required to reach it.",
  },
};

export default function ContactPage() {
  return <ContactClient outbound />;
}
