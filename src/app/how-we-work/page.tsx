import type { Metadata } from "next";
import HowWeWorkClient from "./HowWeWorkClient";
import { FAQ } from "./faq";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "The VERA engagement process: discover, strategize, integrate, operate. How an AI consulting engagement actually unfolds, end to end.",
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    title: "How VERA Works, AI Consulting Process",
    description:
      "Discover, strategize, integrate, operate. The four phases of a VERA engagement.",
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

export default function HowWeWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HowWeWorkClient />
    </>
  );
}
