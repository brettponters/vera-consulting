import { Container } from "@/components/ui/Container";

const STEPS = [
  {
    number: "01",
    title: "Define the outcome",
    body: "Agree on the metric, qualification criteria, target, timeline, attribution rules, and the commitments on both sides.",
  },
  {
    number: "02",
    title: "Build the system",
    body: "Design the market approach and connect the targeting, messaging, outbound, CRM, follow-up, and reporting infrastructure.",
  },
  {
    number: "03",
    title: "Operate and optimize",
    body: "Run the system, study what the market gives back, and improve the audience, message, and process continuously.",
  },
  {
    number: "04",
    title: "Earn against outcomes",
    body: "A build fee covers the operating system. The majority of our fee is earned when the agreed growth milestone is achieved.",
  },
];

export function GrowthPartnership() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="growth-partnership-heading"
      className="bg-[var(--color-bg)] py-20 md:py-28"
    >
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="max-w-[560px]">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-accent)] mb-5">
              How the partnership works
            </p>
            <h2
              id="growth-partnership-heading"
              className="font-sans font-black text-[var(--color-heading)] tracking-[-0.035em] leading-[0.98]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.75rem)" }}
            >
              One goal. One partner.
            </h2>
            <p className="mt-7 font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)]">
              We begin with one measurable target: qualified attended
              opportunities, sales-qualified pipeline, or another outcome we
              can verify together.
            </p>
            <p className="mt-5 font-sans text-base md:text-lg leading-relaxed text-[var(--color-muted)]">
              Then we build and operate the system required to reach it. No
              activity reports that confuse work with progress. One partner
              accountable for the pipeline system.
            </p>
          </div>

          <ol className="list-none m-0 p-0 border-t border-[var(--color-hairline)]">
            {STEPS.map((step) => (
              <li
                key={step.number}
                className="grid grid-cols-[48px_1fr] gap-4 border-b border-[var(--color-hairline)] py-6 md:grid-cols-[64px_180px_1fr] md:gap-6 md:py-8"
              >
                <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[var(--color-accent)] pt-1">
                  {step.number}
                </span>
                <h3 className="font-sans text-lg font-semibold text-[var(--color-heading)] md:text-xl">
                  {step.title}
                </h3>
                <p className="col-start-2 font-sans text-sm leading-relaxed text-[var(--color-muted)] md:col-start-3 md:text-base">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
