import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RotatingWord } from "@/components/ui/RotatingWord";

export const metadata: Metadata = {
  title: "Nationwide AI for Wholesalers, Investors & Agents",
  description:
    "VERA partners with wholesalers, investors, and agents across the United States. We source deals by your criteria, underwrite every contract, and connect you with the right buyer.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Nationwide AI for Wholesalers, Investors & Agents",
    description:
      "VERA partners with wholesalers, investors, and agents across the US. Deal sourcing, underwriting, and buyer matching. We only win when you close.",
    type: "website",
    url: "https://veraconsulting.co/locations",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nationwide AI for Wholesalers, Investors & Agents",
    description:
      "AI deal sourcing, underwriting, and buyer matching for wholesalers, investors, and agents across the US.",
  },
};

const MARKETS = [
  {
    region: "Southeast",
    cities: [
      "Atlanta, GA",
      "Jacksonville, FL",
      "Tampa, FL",
      "Orlando, FL",
      "Miami, FL",
      "Charlotte, NC",
      "Nashville, TN",
      "Memphis, TN",
      "Birmingham, AL",
      "Raleigh, NC",
    ],
  },
  {
    region: "Texas & Southwest",
    cities: [
      "Dallas, TX",
      "Houston, TX",
      "San Antonio, TX",
      "Fort Worth, TX",
      "Austin, TX",
      "Phoenix, AZ",
      "Las Vegas, NV",
      "Tucson, AZ",
      "Albuquerque, NM",
      "El Paso, TX",
    ],
  },
  {
    region: "Midwest",
    cities: [
      "Chicago, IL",
      "Cleveland, OH",
      "Indianapolis, IN",
      "Columbus, OH",
      "Kansas City, MO",
      "Detroit, MI",
      "Cincinnati, OH",
      "St. Louis, MO",
      "Milwaukee, WI",
      "Minneapolis, MN",
    ],
  },
  {
    region: "Mid-Atlantic & Northeast",
    cities: [
      "Philadelphia, PA",
      "Baltimore, MD",
      "Pittsburgh, PA",
      "Buffalo, NY",
      "Richmond, VA",
      "Washington, DC",
      "Newark, NJ",
      "Hartford, CT",
      "Syracuse, NY",
      "Wilmington, DE",
    ],
  },
  {
    region: "South Florida (Home Base)",
    cities: [
      "Boca Raton, FL",
      "Fort Lauderdale, FL",
      "West Palm Beach, FL",
      "Delray Beach, FL",
      "Boynton Beach, FL",
      "Deerfield Beach, FL",
      "Pompano Beach, FL",
      "Hollywood, FL",
      "Coral Springs, FL",
      "Lake Worth, FL",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "VERA, AI for Real Estate Wholesalers, Investors & Agents",
  description:
    "VERA sources deals by your criteria, underwrites every contract, and connects you with the right buyer from our list. No retainer, nothing until you close.",
  provider: {
    "@type": "Organization",
    name: "VERA Solutions",
    url: "https://veraconsulting.co",
  },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType:
    "AI deal sourcing, underwriting, and buyer matching for real estate wholesalers, investors, and agents",
};

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-14 pb-16 md:pt-20 md:pb-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[900px]">
            <Eyebrow className="mb-6">Nationwide</Eyebrow>
            <h1
              className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              <span className="block">
                We work with{" "}
                <RotatingWord
                  words={["wholesalers", "investors", "agents"]}
                />
              </span>
              <span
                className="block"
                style={{ color: "var(--color-accent)" }}
              >
                anywhere in the country.
              </span>
            </h1>
            <p className="font-sans font-semibold text-[var(--color-body)] text-xl md:text-2xl leading-snug max-w-[720px] mb-10">
              The partnership is fully remote. We pull fresh data county by
              county from our own maintained database, source deals by your
              criteria, run the underwriting, and connect you with the right
              buyer from our list. Where you are has never been the reason a
              deal slips.
            </p>
            <Button href="/contact" variant="filled" size="lg" arrow>
              Become a Partner
            </Button>
          </div>
        </Container>
      </section>

      {/* How it works nationally */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)] border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="max-w-[820px] mb-14">
            <Eyebrow className="mb-5">How it works</Eyebrow>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Fresh data. Every market. Your criteria.
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)]">
              Most lead lists are stale by the time they reach you. We pull our
              data fresh, county by county, from our own maintained database.
              Not a shared list that every wholesaler in your market already
              bought. We source properties based on what you are actually
              looking for in your specific markets, underwrite every contract
              so you know exactly what you have, and connect you with the right
              buyer from our list so the assignment closes inside the inspection
              window.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1080px]">
            {[
              {
                num: "01",
                head: "Your criteria, your markets",
                body: "We start with one call. You tell us the markets you work, the types of deals you take under contract, and what your buyers are looking for. We source to that. Nothing else.",
              },
              {
                num: "02",
                head: "We source and underwrite",
                body: "We find off-market properties that match your criteria using fresh county-level data, run the underwriting, and match each deal to the right buyer on our list before we send it to you.",
              },
              {
                num: "03",
                head: "We JV, you close",
                body: "You take the deal under contract. We find the buyer. We JV on every deal together, so we only win when you do. No retainer, no upfront cost, nothing until you close.",
              },
            ].map((item) => (
              <div key={item.num} className="flex flex-col gap-3">
                <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)]">
                  {item.num}
                </span>
                <h3 className="font-sans font-semibold text-lg text-[var(--color-heading)] tracking-[-0.01em]">
                  {item.head}
                </h3>
                <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Markets grid */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)] border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="max-w-[820px] mb-14">
            <Eyebrow className="mb-5">Markets we serve</Eyebrow>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Major wholesale markets across the US.
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] mt-5">
              If your market is not listed, reach out anyway. We work wherever
              our data covers, which is most of the country. The conversation
              is the same regardless of where you operate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {MARKETS.map((group) => (
              <div key={group.region}>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
                  {group.region}
                </p>
                <ul className="list-none m-0 p-0 flex flex-col gap-2">
                  {group.cities.map((city) => (
                    <li
                      key={city}
                      className="font-sans text-sm md:text-base text-[var(--color-body)]"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)] border-t border-[var(--color-hairline)]">
        <Container size="prose">
          <div className="flex flex-col items-center text-center gap-8">
            <Eyebrow>Start the conversation</Eyebrow>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Your market. Your criteria. Our deal flow.
            </h2>
            <p className="font-sans text-[var(--color-body)] text-lg leading-relaxed max-w-prose">
              Tell us the markets you work and what you are looking for. We will
              walk through what we can source for you, how the underwriting
              works, and who is on our buyers list in your area. One call. No
              commitment.
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
