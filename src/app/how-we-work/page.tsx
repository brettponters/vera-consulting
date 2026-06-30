import type { Metadata } from "next";
import HowWeWorkClient from "./HowWeWorkClient";
import { FAQ } from "./faq";
import { PHASES } from "./phases";

export const metadata: Metadata = {
  title: "How VERA Works | AI for Real Estate Wholesalers",
  description:
    "How the VERA partnership works for real estate wholesalers: we source deals by your criteria, underwrite every contract, and find the buyer. We JV on every deal.",
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    title: "How VERA Works | AI for Real Estate Wholesalers",
    description:
      "How the VERA JV partnership works for real estate wholesalers. Deal sourcing, underwriting, and buyer matching. We only win when you close.",
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

// HowTo schema for the partnership process. Answer engines extract numbered
// procedures as authoritative "how does an AI real estate partnership work"
// references (AEO).
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How a VERA real estate partnership works",
  description:
    "How a VERA partnership works for real estate investors and agents: discover, strategy, integrate, operate.",
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
