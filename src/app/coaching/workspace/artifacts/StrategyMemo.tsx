/**
 * Q1 strategy memo artifact.
 *
 * Real memo structure: header block, TL;DR sentence, context paragraph,
 * then numbered priorities each with a 1-sentence rationale, named owner,
 * and a measurable metric. No placeholder tokens.
 */
export function StrategyMemoArtifact() {
  return (
    <article className="space-y-6 max-w-[680px] mx-auto">
      <header className="space-y-1.5">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            memo, q1 2026
          </p>
          <p className="font-mono text-[10px] text-[var(--color-muted)]">
            v2 · brett · oct 14
          </p>
        </div>
        <h3
          className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.018em] leading-tight"
          style={{ fontSize: "clamp(1.35rem, 2vw, 1.75rem)" }}
        >
          Three things between now and April.
        </h3>
      </header>

      <section className="space-y-3 pb-1 border-b border-[var(--color-hairline)]">
        <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold">
          TL;DR
        </p>
        <p className="font-sans text-[14.5px] leading-relaxed text-[var(--color-heading)]">
          Pick three priorities and put a name and a number next to each. Skip the rest until June. The plan only works if we cut what isn’t on this list.
        </p>
      </section>

      <section className="space-y-2 pb-1">
        <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold">
          Context
        </p>
        <p className="font-sans text-[13.5px] leading-relaxed text-[var(--color-body)]">
          Pipeline is healthy on the top of the funnel and thin in the middle.
          Our most defensible work is the long-running coaching engagements, not
          one-off audits. Q1 should land three of those and stop chasing the rest.
        </p>
      </section>

      <section className="space-y-4 pt-1 border-t border-[var(--color-hairline)]">
        <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold">
          Priorities
        </p>
        <ol className="space-y-5 list-none m-0 p-0">
          {PRIORITIES.map((item) => (
            <li
              key={item.n}
              className="grid grid-cols-[28px_1fr] gap-x-4 items-start"
            >
              <span className="font-mono text-[var(--color-accent)] tabular-nums text-[13px] pt-[2px]">
                {item.n}
              </span>
              <div className="space-y-1.5 min-w-0">
                <p className="font-sans text-[14px] font-semibold text-[var(--color-heading)] leading-snug tracking-tight">
                  {item.title}
                </p>
                <p className="font-sans text-[13px] text-[var(--color-body)] leading-relaxed">
                  {item.rationale}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
                  <MetaLabel label="Owner" value={item.owner} />
                  <MetaLabel label="Metric" value={item.metric} accent />
                  <MetaLabel label="Due" value={item.due} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <footer className="pt-4 border-t border-[var(--color-hairline)] flex items-baseline justify-between">
        <p className="font-mono text-[10.5px] text-[var(--color-muted)]">
          q1-priorities.md · 312 words
        </p>
        <p className="font-mono text-[10.5px] text-[var(--color-muted)]">
          next review · jan 7
        </p>
      </footer>
    </article>
  );
}

function MetaLabel({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
        {label}
      </span>
      <span
        className={[
          "font-sans text-[12.5px] font-medium",
          accent ? "text-[var(--color-accent)]" : "text-[var(--color-heading)]",
        ].join(" ")}
      >
        {value}
      </span>
    </span>
  );
}

const PRIORITIES = [
  {
    n: "01",
    title: "Land three coaching engagements by April 1",
    rationale:
      "Two from the warm network, one from inbound. Each one becomes a case-ready reference by June. Anything outside this bucket waits.",
    owner: "VERA",
    metric: "3 signed by Apr 1",
    due: "Apr 1",
  },
  {
    n: "02",
    title: "Ask eight past clients for intros",
    rationale:
      "Replaces the “referral motion” we’ve been talking about for a year. One conversation a week, written follow-up the same day, tracked in the CRM.",
    owner: "VERA",
    metric: "8 conversations",
    due: "rolling",
  },
  {
    n: "03",
    title: "Ship the research library, twelve pieces",
    rationale:
      "These are the artifacts the coaching engagements lean on. Short, dated, signed. Not blog posts. Living documents we update.",
    owner: "Maya (contract)",
    metric: "12 published",
    due: "Mar 28",
  },
];
