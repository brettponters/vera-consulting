import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "South Florida AI Consulting, Service Area",
  description:
    "VERA is a South Florida AI consulting practice serving Boca Raton, Delray Beach, Boynton Beach, Deerfield Beach, and Fort Lauderdale. Strategy, integration, and coaching for companies adopting AI.",
  alternates: {
    canonical: "/locations",
  },
};

interface LocationEntry {
  city: string;
  href: string;
  blurb: string;
}

const LOCATIONS: ReadonlyArray<LocationEntry> = [
  {
    city: "Boca Raton",
    href: "/locations/boca-raton",
    blurb:
      "We work with Boca Raton companies across financial services, healthcare, and technology, from family offices on Glades Road to growth-stage teams in the T-Rex corridor. Strategy, integration, and coaching, with on-site availability when the work calls for it.",
  },
  {
    city: "Delray Beach",
    href: "/locations/delray-beach",
    blurb:
      "Delray Beach has become a real hub for founders and second-stage companies looking to embed AI into how they actually operate. We help those teams scope sensible bets, ship them, and document what we built so the people who maintain it can.",
  },
  {
    city: "Boynton Beach",
    href: "/locations/boynton-beach",
    blurb:
      "Boynton Beach businesses, from manufacturing and logistics to professional services, are increasingly asking what AI can do for operations without breaking what already works. We answer that question honestly and only build what the team can own.",
  },
  {
    city: "Deerfield Beach",
    href: "/locations/deerfield-beach",
    blurb:
      "Deerfield Beach companies, particularly along the Hillsboro Boulevard corridor, are weighing AI investments against real budgets and real teams. We bring the research and the implementation experience to help them decide what's worth doing.",
  },
  {
    city: "Fort Lauderdale",
    href: "/locations/fort-lauderdale",
    blurb:
      "Fort Lauderdale is home to a growing set of mid-market companies in marine, real estate, healthcare, and professional services. We work with leadership teams there to put AI to work where it earns its keep, and to coach the people who own it long-term.",
  },
];

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
          name: "Locations",
          item: "https://veraconsulting.co/locations",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "VERA service areas in South Florida",
      itemListElement: LOCATIONS.map((loc, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `AI Consulting in ${loc.city}`,
        url: `https://veraconsulting.co${loc.href}`,
      })),
    },
  ],
};

export default function LocationsPage() {
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
          <div className="max-w-[760px]">
            <Eyebrow className="mb-5">South Florida</Eyebrow>

            <h1
              className="font-sans font-bold text-[var(--color-heading)] leading-[1.05] tracking-[-0.02em] mb-8"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
            >
              AI consulting, anchored in South Florida.
            </h1>

            <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[640px]">
              VERA is a small, senior AI practice based in South Florida. We
              work with companies across Palm Beach and Broward counties that
              want to adopt AI seriously, with strategy, real implementation,
              and the coaching to keep your team in command of it.
            </p>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <Eyebrow className="mb-4">Why local matters</Eyebrow>

            <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-8">
              Senior people in the room, when it matters.
            </h2>

            <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-6">
              Most of our work happens over video, the same way the rest of
              your business runs. But there are moments, discovery, executive
              alignment, hands-on integration sessions with your engineers -
              where being in the room changes the outcome. Operating from
              South Florida means we can show up for those moments without
              turning travel into a line item.
            </p>

            <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
              We&rsquo;ve picked the cities below because that&rsquo;s where
              the conversations are happening. If you&rsquo;re somewhere else
              in the region and the fit is right, we&rsquo;re happy to talk.
            </p>
          </div>
        </Container>
      </section>

      {/* Locations list */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[760px] mb-12">
            <Eyebrow className="mb-4">Where we work</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight">
              Cities we serve.
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {LOCATIONS.map((location) => (
              <li
                key={location.href}
                className="p-6 md:p-8 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-bg)] h-full flex flex-col"
              >
                <h3 className="font-sans font-semibold text-lg text-[var(--color-heading)] mb-3">
                  {location.city}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[var(--color-body)] mb-6 flex-1">
                  {location.blurb}
                </p>
                <Link
                  href={location.href}
                  className="font-sans text-sm font-medium text-[var(--color-accent)] hover:underline self-start"
                >
                  AI consulting in {location.city} →
                </Link>
              </li>
            ))}
          </ul>

          <Hairline className="my-12" />

          <div className="max-w-[560px]">
            <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
              Not on the list but nearby? Reach out anyway. We take engagements
              across South Florida and remote across the country when the work
              and the team are right.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[560px]">
            <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] mb-4">
              Want to work together?
            </h2>
            <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-8">
              We&rsquo;re always happy to talk, even if it&rsquo;s just to
              figure out whether we&rsquo;re the right fit.
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
