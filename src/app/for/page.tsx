import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { VERTICALS } from "@/data/verticals";

export const metadata: Metadata = {
  title: "AI Consulting by Vertical",
  description:
    "AI consulting and coaching for coaches, consultants, marketing pros, agencies, and the solo experts whose business runs on trust.",
  alternates: { canonical: "/for" },
  openGraph: {
    title: "AI Consulting by Vertical, VERA",
    description:
      "Pick your practice. See what we ship for coaches, consultants, marketing pros, and agencies.",
    url: "https://veraconsulting.co/for",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://veraconsulting.co/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Verticals",
          item: "https://veraconsulting.co/for",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "VERA verticals",
      itemListElement: VERTICALS.map((v, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: v.marqueeLabel,
        item: `https://veraconsulting.co/for/${v.slug}`,
      })),
    },
  ],
};

export default function ForIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative pt-14 pb-12 md:pt-20 md:pb-16 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[920px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-5">
              Built for
            </p>
            <h1
              className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Pick your practice.
            </h1>
            <p className="font-sans font-semibold text-[var(--color-body)] text-xl md:text-2xl leading-snug max-w-[760px]">
              We work with solo experts whose business runs on trust.
              Find the workflows that fit yours.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20 bg-[var(--color-surface)]">
        <Container size="wide">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none m-0 p-0">
            {VERTICALS.map((v) => (
              <li key={v.slug}>
                <Link
                  href={`/for/${v.slug}`}
                  className="block p-7 md:p-8 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-bg)] h-full no-underline hover:border-[var(--color-accent)] transition-colors"
                >
                  <p className="font-sans font-black text-[var(--color-heading)] text-lg md:text-xl tracking-[-0.01em] mb-2">
                    {v.marqueeLabel}
                  </p>
                  <p className="font-sans text-sm md:text-[15px] text-[var(--color-muted)] leading-snug">
                    {v.metaDescription}
                  </p>
                  <p className="font-sans text-sm font-semibold text-[var(--color-accent)] mt-4">
                    See workflows →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
