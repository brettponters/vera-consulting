import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: {
    absolute: "Book an Outbound Strategy Call | VERA Solutions",
  },
  description:
    "Book a call with VERA Solutions to discuss an outbound client-acquisition plan for your paid media or digital advertising agency.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book an Outbound Strategy Call | VERA Solutions",
    description:
      "Book a call with VERA Solutions to discuss an outbound client-acquisition plan for your paid media or digital advertising agency.",
    type: "website",
    url: "https://www.verasolutions.ai/contact",
    siteName: "VERA Solutions",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book an Outbound Strategy Call | VERA Solutions",
    description:
      "Book a call with VERA Solutions to discuss an outbound client-acquisition plan for your paid media or digital advertising agency.",
  },
};

export default function ContactPage() {
  return <ContactClient outbound />;
}
