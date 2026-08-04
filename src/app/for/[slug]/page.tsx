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
    keywords: [v.primaryKeyword, ...v.secondaryKeywords],
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

  // Adjacent verticals for cross-linking.
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
        serviceType: "Real estate deal sourcing",
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

  const labelLower = v.marqueeLabel.toLowerCase();

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
              Built for {labelLower}
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
                Become a Partner
              </Button>
              <Button href="/" variant="ghost" size="lg" arrow>
                See how it works
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Opening essay */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-3">
                The read
              </p>
              <p className="font-sans font-black text-[var(--color-heading)] text-base md:text-lg tracking-[-0.01em] leading-snug">
                Where AI finds the edge in deals and leads for {labelLower}.
              </p>
            </div>
            <div className="md:col-span-9 md:col-start-4">
              <div className="max-w-[680px] space-y-6">
                {v.openingEssay.map((para, i) => (
                  <p
                    key={i}
                    className="font-sans text-[var(--color-body)] text-lg md:text-[1.2rem] leading-relaxed"
                    style={{
                      fontWeight: i === 0 ? 500 : 400,
                    }}
                  >
                    {i === 0 ? (
                      <span className="font-sans font-semibold">{para}</span>
                    ) : (
                      para
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What eats your week (pain points, editorial list with hairlines) */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[820px] mb-10 md:mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-3">
              What slows the deal flow
            </p>
            <h2
              className="font-sans font-black text-[var(--color-heading)] tracking-[-0.03em] leading-[1.05]"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)" }}
            >
              The drag is real. The fix is better signal, not more hours.
            </h2>
          </div>
          <ul className="max-w-[920px] list-none m-0 p-0 border-t border-[var(--color-hairline)]">
            {v.painPoints.map((p, i) => (
              <li
                key={p}
                className="flex items-start gap-6 md:gap-10 py-5 md:py-6 border-b border-[var(--color-hairline)]"
              >
                <span
                  className="font-mono text-[10px] font-semibold tracking-[0.22em] pt-1 shrink-0 w-12"
                  style={{ color: "var(--color-accent)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-sans font-medium text-[var(--color-body)] text-base md:text-lg leading-snug">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* What changes (before/after vignettes) */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[820px] mb-10 md:mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-3">
              What changes
            </p>
            <h2
              className="font-sans font-black text-[var(--color-heading)] tracking-[-0.03em] leading-[1.05]"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)" }}
            >
              Specific moments in your pipeline, after.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
            {v.whatChanges.map((c, i) => (
              <div
                key={c.heading}
                className={`md:col-span-6 ${
                  i % 2 === 1 ? "md:col-start-7" : ""
                }`}
              >
                <div className="space-y-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold">
                    {String(i + 1).padStart(2, "0")} / {v.whatChanges.length.toString().padStart(2, "0")}
                  </p>
                  <h3 className="font-sans font-black text-[var(--color-heading)] text-2xl md:text-3xl tracking-[-0.02em] leading-tight">
                    {c.heading}
                  </h3>
                  <p className="font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we ship (workflows) */}
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
              The workflows we build for {labelLower}.
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

      {/* How we actually work */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-3">
                The partnership
              </p>
              <h2
                className="font-sans font-black text-[var(--color-heading)] tracking-[-0.03em] leading-[1.05]"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                How we actually partner with {labelLower}.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="max-w-[640px] space-y-6">
                {v.howWeWork.map((para, i) => (
                  <p
                    key={i}
                    className="font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Anecdote (optional) */}
      {v.anecdote && (
        <section className="py-16 md:py-24 bg-[var(--color-bg)]">
          <Container size="wide">
            <div className="max-w-[820px]">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-6">
                One we did
              </p>
              <div className="space-y-6 border-l-2 border-[var(--color-navy)] pl-8 md:pl-10">
                <p className="font-sans text-[var(--color-body)] text-lg md:text-xl leading-relaxed">
                  {v.anecdote.setup}
                </p>
                <p className="font-sans text-[var(--color-body)] text-lg md:text-xl leading-relaxed">
                  {v.anecdote.turn}
                </p>
                <p className="font-sans italic font-semibold text-[var(--color-heading)] text-xl md:text-2xl leading-snug tracking-[-0.01em]">
                  {v.anecdote.line}
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* What this is not */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[820px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-6">
              What this is not
            </p>
            <p className="font-sans text-[var(--color-heading)] text-xl md:text-2xl leading-snug tracking-[-0.01em] font-medium">
              {v.whatThisIsNot}
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[820px] mb-10 md:mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-3">
              Questions {labelLower} ask
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
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-5">
            Also for
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 list-none m-0 p-0">
            {adjacent.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/for/${a.slug}`}
                  className="block p-6 md:p-7 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-bg)] no-underline hover:border-[var(--color-accent)] transition-colors"
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
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <h2
              className="font-sans font-black text-[var(--color-heading)] tracking-[-0.03em] leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Want this running in your pipeline?
            </h2>
            <p className="font-sans font-medium text-[var(--color-body)] text-base md:text-lg leading-snug mb-8">
              30 minutes on the phone. We scope where the edge is in your deals
              and leads, and which one to chase first. No retainer, no hourly.
              We make money only when you close.
            </p>
            <Button href="/contact" variant="filled" size="lg" arrow>
              Become a Partner
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
