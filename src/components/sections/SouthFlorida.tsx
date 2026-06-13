import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";
import { LOCATIONS } from "@/data/locations";

interface AreaRow {
  label: string;
  blurb: string;
  href: string;
}

// Five local city pages carry the local SEO; the sixth row is national reach
// over Google Meet so the section reads as "based here, working everywhere."
const ROWS: AreaRow[] = [
  ...LOCATIONS.map((loc) => ({
    label: loc.city,
    blurb: loc.blurb,
    href: `/locations/${loc.slug}`,
  })),
  {
    label: "Across the U.S.",
    blurb:
      "Not in South Florida? Most of the work runs over Google Meet, so we partner with investors, agents, and teams anywhere in the country.",
    href: "/contact",
  },
];

export function SouthFlorida() {
  return (
    <section
      aria-label="Service area"
      className="bg-[var(--color-bg)] py-16 md:py-20"
    >
      <Hairline variant="full" />
      <Container size="wide">
        <div className="pt-16 md:pt-20">
          <div className="max-w-[720px] space-y-5 mb-10 md:mb-14">
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Where we work
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              Based in Boca Raton. Partnering with real estate investors and
              agents across the United States.
            </h2>
            <p className="font-sans text-[var(--color-muted)] text-base leading-relaxed">
              In person around South Florida, and over Google Meet anywhere in
              the country, so distance is never the reason something stalls.
            </p>
          </div>

          <ul className="list-none m-0 p-0 border-t border-[var(--color-hairline)]">
            {ROWS.map((row, i) => {
              const alignRight = i % 2 === 1;
              return (
                <li
                  key={row.href}
                  className="border-b border-[var(--color-hairline)]"
                >
                  <Link
                    href={row.href}
                    className={`group flex py-6 md:py-8 no-underline ${
                      alignRight ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[460px] ${
                        alignRight ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <p className="font-sans font-semibold text-[var(--color-heading)] text-xl md:text-2xl tracking-[-0.01em] mb-1.5 transition-colors group-hover:text-[var(--color-accent)]">
                        {row.label}
                      </p>
                      <p className="font-sans text-sm md:text-[15px] text-[var(--color-muted)] leading-snug">
                        {row.blurb}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-10">
            <Link
              href="/locations"
              className="font-sans text-sm font-medium text-[var(--color-accent)] no-underline hover:underline"
            >
              All service areas →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
