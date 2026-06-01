import type { Metadata } from "next";
import HowWeWorkClient from "./HowWeWorkClient";
import { FAQ } from "./faq";
import { PHASES } from "./phases";

export const metadata: Metadata = {
  title: "How VERA Works, AI for Real Estate Agents",
  description:
    "The VERA engagement process for real estate agents: discover, strategize, integrate, operate. How an agentic AI engagement actually unfolds, end to end.",
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    title: "How VERA Works, AI for Real Estate Agents",
    description:
      "Discover, strategize, integrate, operate. The four phases of a VERA engagement for real estate agents and brokers.",
    url: "https://veraconsulting.co/how-we-work",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

// HowTo schema for the engagement process. Answer engines extract numbered
// procedures as authoritative "how does an AI consulting engagement work"
// references (AEO).
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How a VERA AI consulting engagement works",
  description:
    "The four phases of a VERA agentic AI engagement: discover, strategy, integrate, operate.",
  step: PHASES.map((phase, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: phase.title,
    text: phase.description,
  })),
};

export default function HowWeWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <HowWeWorkClient />
    </>
  );
}
