import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";
import { RotatingWord } from "@/components/ui/RotatingWord";

const SAMPLE_MARKETS = [
  { label: "Atlanta, GA", blurb: "One of the highest-volume wholesale markets in the country." },
  { label: "Dallas, TX", blurb: "Deep buyer pool, strong off-market deal flow across DFW." },
  { label: "Phoenix, AZ", blurb: "Fast-moving market with motivated sellers across Maricopa County." },
  { label: "Jacksonville, FL", blurb: "Growing market with strong wholesale activity across Duval County." },
  { label: "Cleveland, OH", blurb: "High-density distressed inventory and active cash buyer demand." },
  { label: "Across the U.S.", blurb: "Based in Boca Raton. The partnership runs fully remote, so your market is our market." },
];

export function SouthFlorida() {
  return (
    <section
      aria-label="Where we work"
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
              <span className="block">
                We work with{" "}
                <RotatingWord
                  words={["wholesalers", "investors", "realtors"]}
                />
              </span>
              <span className="block">across the United States.</span>
            </h2>
            <p className="font-sans text-[var(--color-muted)] text-base leading-relaxed">
              The partnership is fully remote. We pull fresh data county by county,
              source deals by your criteria, and find the buyer from our list wherever
              you operate.
            </p>
          </div>

          <ul className="list-none m-0 p-0 border-t border-[var(--color-hairline)]">
            {SAMPLE_MARKETS.map((row, i) => {
              const alignRight = i % 2 === 1;
              return (
                <li
                  key={row.label}
                  className="border-b border-[var(--color-hairline)]"
                >
                  <div
                    className={`flex py-6 md:py-8 ${
                      alignRight ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[460px] ${
                        alignRight ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <p className="font-sans font-semibold text-[var(--color-heading)] text-xl md:text-2xl tracking-[-0.01em] mb-1.5">
                        {row.label}
                      </p>
                      <p className="font-sans text-sm md:text-[15px] text-[var(--color-muted)] leading-snug">
                        {row.blurb}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-10">
            <Link
              href="/locations"
              className="font-sans text-sm font-medium text-[var(--color-accent)] no-underline hover:underline"
            >
              All markets we serve →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
