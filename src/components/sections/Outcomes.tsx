import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const SEGMENTS = [
  {
    eyebrow: "Wholesale",
    headline: "Same lists. 2 to 3x the deals.",
    outcomes: [
      "Motivated-seller leads scored before you call",
      "Day 1 through 90 follow-up that actually runs",
      "Dispo that matches assignments to cash buyers",
    ],
  },
  {
    eyebrow: "Fix & flip",
    headline: "Off-market deals first. Numbers in seconds.",
    outcomes: [
      "Off-market properties sourced and ranked daily",
      "ARV, repairs, and margin run before you offer",
      "Comps pulled the moment a lead comes in",
    ],
  },
  {
    eyebrow: "Agents & teams",
    headline: "More listings. Fewer leads dropped.",
    outcomes: [
      "Seller leads worked the minute they come in",
      "Listing prospects surfaced before they list",
      "Follow-up that runs without you remembering",
    ],
  },
];

export function Outcomes() {
  return (
    <section
      aria-labelledby="outcomes-heading"
      className="py-20 md:py-28 bg-[var(--color-bg)]"
    >
      <Container size="wide">
        <div className="max-w-[820px] mb-12 md:mb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-3">
            What AI does
          </p>
          <h2
            id="outcomes-heading"
            className="font-sans font-black text-[var(--color-heading)] tracking-[-0.03em] leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Concrete workflows. Not vendor demos.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SEGMENTS.map((s, i) => (
            <Reveal key={s.eyebrow} delay={0.05 + i * 0.05}>
              <div className="h-full p-7 md:p-9 rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] flex flex-col gap-5">
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.22em] font-semibold"
                  style={{ color: "var(--color-navy)" }}
                >
                  {s.eyebrow}
                </p>
                <h3 className="font-sans font-black text-xl md:text-2xl text-[var(--color-heading)] tracking-[-0.02em] leading-tight">
                  {s.headline}
                </h3>
                <ul className="mt-auto space-y-3 list-none m-0 p-0">
                  {s.outcomes.map((o) => (
                    <li
                      key={o}
                      className="font-sans font-medium text-[15px] md:text-base text-[var(--color-body)] flex items-start gap-3 leading-snug"
                    >
                      <span className="text-[var(--color-accent)] mt-1 shrink-0">
                        ·
                      </span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <Button href="/outcomes" variant="ghost" size="md" arrow>
            See every outcome
          </Button>
        </div>
      </Container>
    </section>
  );
}
