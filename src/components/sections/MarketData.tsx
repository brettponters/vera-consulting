import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  {
    value: "94%",
    label:
      "of multifamily owners are implementing or planning AI in 2026. Of those deployed, 77% report lower opex and 85% report higher lead-to-lease conversion.",
    source:
      "EliseAI 2026 Multifamily AI Executive Survey, via Frontdesk Research, January 2026",
  },
  {
    value: "13 pts",
    label:
      "the US occupancy gap between short-term rentals using high-frequency dynamic pricing and listings priced statically. In Italy the gap hits 30 points. Dynamic pricing is now industry standard.",
    source:
      "Rentals United and PriceLabs, 2026 Short-Term Rental Outlook Report, May 2026",
  },
  {
    value: "2 to 3x",
    label:
      "more closed deals reported by wholesalers pairing list-pulling with AI inbound capture, speed-to-lead, and automated 90-day follow-up. The math is brutal: the same lists, different operating system.",
    source: "SuperMIA 2026 AI cold calling industry analysis, April 2026",
  },
];

export function MarketData() {
  return (
    <section
      aria-labelledby="market-data-heading"
      className="py-20 md:py-28 bg-[var(--color-surface)]"
    >
      <Container size="wide">
        <div className="max-w-[820px] mb-12 md:mb-16">
          <p className="font-sans font-medium text-xs uppercase tracking-[0.14em] text-[var(--color-accent)] mb-3">
            Where the market is
          </p>
          <h2
            id="market-data-heading"
            className="font-sans font-black text-[var(--color-heading)] tracking-[-0.03em] leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            The data on AI in real estate, mid-2026.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.05 + i * 0.05}>
              <div className="border-t border-[var(--color-navy)] pt-6 flex flex-col gap-4">
                <div
                  className="font-sans font-black text-[var(--color-heading)] leading-none tracking-[-0.04em]"
                  style={{ fontSize: "clamp(3rem, 5.5vw, 4.5rem)" }}
                >
                  {s.value}
                </div>
                <p className="font-sans font-medium text-base md:text-lg leading-snug text-[var(--color-body)]">
                  {s.label}
                </p>
                <p className="font-sans text-xs italic text-[var(--color-muted)]">
                  {s.source}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
