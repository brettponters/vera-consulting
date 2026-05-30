import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Button } from "@/components/ui/Button";
import {
  LOCATIONS,
  LOCATION_PILLARS,
  getLocationBySlug,
  getAllLocationSlugs,
  getLocationFaq,
} from "@/data/locations";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return {};
  const url = `https://veraconsulting.co/locations/${slug}`;
  const title = `AI Coaching in ${loc.city}, ${loc.state}`;
  const description = `Agentic AI coaching, strategy, and integration for ${loc.city} coaches, consultants, marketing pros, and solo experts. In person or over Google Meet.`;
  return {
    title,
    description,
    alternates: { canonical: `/locations/${slug}` },
    keywords: [
      `${loc.city} AI coaching`,
      `${loc.city} AI consultant`,
      `AI coach ${loc.city}`,
      `agentic AI ${loc.city}`,
    ],
    openGraph: {
      title: `${title}, VERA`,
      description,
      type: "website",
      url,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title}, VERA`,
      description,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) notFound();

  const canonicalUrl = `https://veraconsulting.co/locations/${slug}`;
  const faq = getLocationFaq(loc);

  // Other cities, for cross-linking at the bottom.
  const others = LOCATIONS.filter((l) => l.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${canonicalUrl}#business`,
        name: "VERA Consulting",
        description: `Agentic AI coaching, strategy, and integration for ${loc.city} coaches, consultants, and solo experts.`,
        url: canonicalUrl,
        telephone: "+1-561-900-8182",
        email: "brett@veraconsulting.co",
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: loc.city,
          addressRegion: loc.state,
          postalCode: loc.postalCode,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: loc.geo.lat,
          longitude: loc.geo.lng,
        },
        areaServed: { "@type": "City", name: `${loc.city}, ${loc.state}` },
        serviceType: "Agentic AI Coaching and Consulting",
        availableChannel: {
          "@type": "ServiceChannel",
          name: "Remote sessions over Google Meet",
          serviceUrl: "https://veraconsulting.co/contact",
        },
        parentOrganization: { "@id": "https://veraconsulting.co/#org" },
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
            name: "Locations",
            item: "https://veraconsulting.co/locations",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: loc.city,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
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
      <section
        className="relative pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F5F4F1 25%, #F5F4F1 75%, #FFFFFF 100%)",
        }}
      >
        <Container size="wide" className="relative z-10">
          <div className="max-w-[820px]">
            <Eyebrow className="mb-5">
              {loc.city}, {loc.state}
            </Eyebrow>
            <h1
              className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-10"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Agentic AI coaching in {loc.city}.
            </h1>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[680px] mb-10">
              {loc.heroIntro}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="filled" size="lg" arrow>
                Book a call
              </Button>
              <Button href="/coaching" variant="ghost" size="lg" arrow>
                See the coaching
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why here */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <Eyebrow className="mb-5">Why it matters here</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-8">
              AI for {loc.city} businesses that run on trust.
            </h2>
            <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)]">
              {loc.whyHere.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Three pillars */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[760px] mb-12 md:mb-16">
            <Eyebrow className="mb-5">What we do</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight">
              How VERA helps {loc.city} solo experts.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {LOCATION_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 md:p-8 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-bg)] h-full"
              >
                <h3 className="font-sans font-semibold text-lg text-[var(--color-heading)] mb-3">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[var(--color-body)]">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <Eyebrow className="mb-5">FAQ</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-10">
              Questions {loc.city} clients ask.
            </h2>
            <div className="space-y-10">
              {faq.map((item, i) => (
                <div key={item.q}>
                  <h3 className="font-sans font-semibold text-lg md:text-xl text-[var(--color-heading)] tracking-[-0.01em] mb-3">
                    {item.q}
                  </h3>
                  <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                    {item.a}
                  </p>
                  {i < faq.length - 1 && <Hairline className="mt-10" />}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Other areas */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-5">
            Also serving
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none m-0 p-0">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/locations/${o.slug}`}
                  className="block p-6 md:p-7 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-bg)] no-underline hover:border-[var(--color-accent)] transition-colors h-full"
                >
                  <p className="font-sans font-black text-[var(--color-heading)] text-lg tracking-[-0.01em] mb-1">
                    {o.city}
                  </p>
                  <p className="font-sans text-sm text-[var(--color-muted)] leading-snug">
                    {o.region} →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section
        aria-label="Get started"
        className="bg-[var(--color-bg)] py-20 md:py-28 border-t border-[var(--color-hairline)]"
      >
        <Container size="prose">
          <div className="flex flex-col items-center text-center gap-8">
            <Eyebrow>
              {loc.city}, {loc.state}
            </Eyebrow>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
            >
              Want to talk it through?
            </h2>
            <p className="font-sans text-[var(--color-body)] text-lg leading-relaxed max-w-prose">
              Twenty minutes over Google Meet, or in person if you are nearby.
              We figure out together whether this is right for what you are
              trying to do. No deck, no pitch.
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
