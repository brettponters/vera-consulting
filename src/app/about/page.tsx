import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "VERA is a small, senior AI consulting practice. Research-first strategy, hands-on integration, and 1:1 coaching. Public Benefit Corporation.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About VERA, AI Strategy & Integration Consulting",
    description:
      "A small, senior practice for AI strategy, integration, and coaching. Public Benefit Corporation.",
    url: "https://veraconsulting.co/about",
    type: "website",
    images: ["/opengraph-image"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
