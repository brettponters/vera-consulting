import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LOCATIONS } from "@/data/locations";

export const metadata: Metadata = {
  title: "Off-Market Deals and Leads for Real Estate Across South Florida",
  description:
    "VERA partners with real estate investors and agents across South Florida, Boca Raton, Delray Beach, Boynton Beach, Deerfield Beach, and Fort Lauderdale, sourcing off-market deals and motivated seller leads.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Off-Market Deals and Leads for Real Estate Across South Florida | VERA",
    description:
      "VERA partners with real estate investors and agents across South Florida, sourcing off-market deals and motivated seller leads. Local or remote anywhere.",
    type: "website",
    url: "https://veraconsulting.co/locations",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Off-Market Deals and Leads for Real Estate Across South Florida | VERA",
    description:
      "VERA partners with real estate investors and agents across South Florida, sourcing off-market deals and motivated seller leads, local or remote.",
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
          name: "Locations",
          item: "https://veraconsulting.co/locations",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "VERA service areas",
      itemListElement: LOCATIONS.map((loc, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: loc.city,
        item: `https://veraconsulting.co/locations/${loc.slug}`,
      })),
    },
  ],
};

export default function LocationsIndexPage() {
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
              South Florida
            </p>
            <h1
              className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Where we work.
            </h1>
            <p className="font-sans font-semibold text-[var(--color-body)] text-xl md:text-2xl leading-snug max-w-[760px]">
              Based in Boca Raton, partnering with real estate investors and
              agents across South Florida. Sourcing off-market deals and
              motivated seller leads, local when it helps and remote anywhere,
              so distance is never the reason a deal slips.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20 bg-[var(--color-surface)]">
        <Container size="wide">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none m-0 p-0">
            {LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="block p-7 md:p-8 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-bg)] h-full no-underline hover:border-[var(--color-accent)] transition-colors"
                >
                  <p className="font-sans font-black text-[var(--color-heading)] text-lg md:text-xl tracking-[-0.01em] mb-1">
                    {loc.city}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)] mb-3">
                    {loc.region}
                  </p>
                  <p className="font-sans text-sm md:text-[15px] text-[var(--color-muted)] leading-snug">
                    {loc.blurb}
                  </p>
                  <p className="font-sans text-sm font-semibold text-[var(--color-accent)] mt-4">
                    See {loc.city} →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-[var(--color-bg)] border-t border-[var(--color-hairline)]">
        <Container size="prose">
          <div className="flex flex-col items-center text-center gap-8">
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Not in one of these towns?
            </h2>
            <p className="font-sans text-[var(--color-body)] text-lg leading-relaxed max-w-prose">
              Most of the work happens remotely anyway. If you invest in real
              estate or sell it and you want a partner sourcing off-market deals
              and motivated seller leads, the conversation is the same wherever
              you are. VERA makes money only when you close.
            </p>
            <Button href="/contact" variant="filled" size="lg" arrow>
              Become a partner
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
