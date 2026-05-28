import type { Metadata } from "next";
import OurStrategyClient from "./OurStrategyClient";

export const metadata: Metadata = {
  title: "Our Strategy",
  description:
    "What we believe about AI adoption: where it fits, where it breaks, and how to get value without taking on risk you can't undo.",
  alternates: { canonical: "/our-strategy" },
  openGraph: {
    title: "Our Strategy, VERA on AI Adoption",
    description:
      "Where AI fits, where it breaks, and how to adopt it without taking on risk you can't undo.",
    url: "https://veraconsulting.co/our-strategy",
    type: "article",
    images: ["/opengraph-image"],
  },
};

export default function OurStrategyPage() {
  return <OurStrategyClient />;
}
