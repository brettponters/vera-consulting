import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  VERTICALS,
  getVerticalBySlug,
  getAllSlugs,
} from "@/data/verticals";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = getVerticalBySlug(slug);
  if (!v) return {};
  const url = `https://veraconsulting.co/for/${slug}`;
  return {
    title: v.metaTitle,
    description: v.metaDescription,
    alternates: { canonical: `/for/${slug}` },
    openGraph: {
      title: v.metaTitle,
      description: v.metaDescription,
      type: "article",
      url,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: v.metaTitle,
      description: v.metaDescription,
    },
  };
}

export default async function ForVerticalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVerticalBySlug(slug);
  if (!v) notFound();

  const canonicalUrl = `https://veraconsulting.co/for/${slug}`;

  // Adjacent verticals for cross-linking (previous and next two in the list).
  const idx = VERTICALS.findIndex((x) => x.slug === slug);
  const adjacent = [
    VERTICALS[(idx - 1 + VERTICALS.length) % VERTICALS.length],
    VERTICALS[(idx + 1) % VERTICALS.length],
    VERTICALS[(idx + 2) % VERTICALS.length],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: v.h1.replace(/\.$/, ""),
        description: v.metaDescription,
        url: canonicalUrl,
        provider: { "@id": "https://veraconsulting.co/#org" },
        serviceType: "AI Consulting",
        audience: {
          "@type": "BusinessAudience",
          name: v.marqueeLabel,
        },
      },
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
          {
            "@type": "ListItem",
            position: 3,
            name: v.marqueeLabel,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: v.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-14 pb-12 md:pt-20 md:pb-16 overflow-hidden bg-[var(--color-bg)]">
        <Container size="wide" className="relative z-10">
          <div className="max-w-[920px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-5">
              Built for {v.marqueeLabel.toLowerCase()}
            </p>
            <h1
              className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              {v.h1}
            </h1>
            <p className="font-sans font-semibold text-[var(--color-body)] text-xl md:text-2xl leading-snug max-w-[760px]">
              {v.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/contact" variant="filled" size="lg" arrow>
                Book a call
              </Button>
              <Button href="/" variant="ghost" size="lg" arrow>
                See how it works
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Pain points */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[820px] mb-10 md:mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-3">
              What eats your week
            </p>
            <h2
              className="font-sans font-black text-[var(--color-heading)] tracking-[-0.03em] leading-[1.05]"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)" }}
            >
              The drag is real. The fix is workflow, not effort.
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 list-none m-0 p-0">
            {v.painPoints.map((p, i) => (
              <li
                key={p}
                className="flex items-start gap-4 font-sans font-medium text-[var(--color-body)] text-base md:text-lg leading-snug"
              >
                <span
                  className="font-mono text-[10px] font-semibold tracking-[0.22em] mt-1 shrink-0"
                  style={{ color: "var(--color-accent)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Workflows */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[820px] mb-10 md:mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-3">
              What we ship
            </p>
            <h2
              className="font-sans font-black text-[var(--color-heading)] tracking-[-0.03em] leading-[1.05]"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)" }}
            >
              Six workflows for {v.marqueeLabel.toLowerCase()}.
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 list-none m-0 p-0">
            {v.workflows.map((w, i) => (
              <li key={w.title} className="space-y-3">
                <div
                  className="h-px w-12"
                  style={{ backgroundColor: "var(--color-navy)" }}
                />
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-mono text-[10px] font-semibold tracking-[0.22em]"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-sans font-black text-[var(--color-heading)] text-lg md:text-xl tracking-[-0.01em] leading-snug">
                    {w.title}
                  </h3>
                </div>
                <p className="font-sans font-medium text-[var(--color-body)] text-[15px] md:text-base leading-snug">
                  {w.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[820px] mb-10 md:mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-3">
              Questions {v.marqueeLabel.toLowerCase()} ask
            </p>
            <h2
              className="font-sans font-black text-[var(--color-heading)] tracking-[-0.03em] leading-[1.05]"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)" }}
            >
              What we get asked most.
            </h2>
          </div>
          <ul className="max-w-[820px] space-y-10 list-none m-0 p-0">
            {v.faq.map((f) => (
              <li key={f.q} className="space-y-3">
                <h3 className="font-sans font-black text-[var(--color-heading)] text-lg md:text-xl leading-snug tracking-[-0.01em]">
                  {f.q}
                </h3>
                <p className="font-sans font-medium text-[var(--color-body)] text-base md:text-lg leading-snug">
                  {f.a}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Adjacent verticals */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-5">
            Also for
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 list-none m-0 p-0">
            {adjacent.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/for/${a.slug}`}
                  className="block p-6 md:p-7 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface)] no-underline hover:border-[var(--color-accent)] transition-colors"
                >
                  <p className="font-sans font-black text-[var(--color-heading)] text-lg tracking-[-0.01em] mb-1">
                    {a.marqueeLabel}
                  </p>
                  <p className="font-sans text-sm text-[var(--color-muted)] leading-snug">
                    {a.h1.replace(/\.$/, "")} →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <h2
              className="font-sans font-black text-[var(--color-heading)] tracking-[-0.03em] leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Want this running in your practice?
            </h2>
            <p className="font-sans font-medium text-[var(--color-body)] text-base md:text-lg leading-snug mb-8">
              30 minutes on the phone. We scope which workflow to ship first
              and what it costs. You leave with a sharper view, even if you do
              not hire us.
            </p>
            <Button href="/contact" variant="filled" size="lg" arrow>
              Book a call
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
