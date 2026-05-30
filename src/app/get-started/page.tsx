import type { Metadata } from "next";
import GetStartedClient from "./GetStartedClient";

export const metadata: Metadata = {
  title: "Get Started, Agentic AI for Your Practice",
  description:
    "Tell us about your practice and we'll reach out within 24 hours. Agentic AI coaching, strategy, and integration for coaches, consultants, and solo experts in Boca Raton, FL.",
  alternates: { canonical: "/get-started" },
  openGraph: {
    title: "Get Started with VERA, Agentic AI for Your Practice",
    description:
      "Tell us about your practice and we'll reach out within 24 hours. Agentic AI for solo experts whose business runs on trust.",
    type: "website",
    url: "https://veraconsulting.co/get-started",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Started with VERA, Agentic AI for Your Practice",
    description:
      "Agentic AI coaching, strategy, and integration for coaches, consultants, and solo experts.",
  },
};

export default function GetStartedPage() {
  return <GetStartedClient />;
}
