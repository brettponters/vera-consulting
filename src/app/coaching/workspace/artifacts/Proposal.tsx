/**
 * Client proposal artifact.
 *
 * Real proposal structure: client header block with sector tag, scope
 * paragraph, three phase rows, investment line, signature block. Reads
 * as a one-pager, not a slide.
 */
export function ProposalArtifact() {
  return (
    <article className="space-y-7 max-w-[720px] mx-auto">
      {/* Client header */}
      <header className="grid grid-cols-[1fr_auto] gap-x-6 items-start pb-5 border-b-2 border-[var(--color-heading)]">
        <div className="space-y-1.5 min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            prepared for
          </p>
          <h3
            className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.025em] leading-[1.02]"
            style={{ fontSize: "clamp(1.65rem, 2.6vw, 2.25rem)" }}
          >
            Marlin Industries
          </h3>
          <p className="font-sans text-[12.5px] text-[var(--color-muted)] tracking-tight">
            Family-owned distribution, Tacoma WA · est. 1962
          </p>
        </div>
        <div className="space-y-0.5 text-right shrink-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] font-semibold">
            Proposal · v1
          </p>
          <p className="font-mono text-[10.5px] text-[var(--color-muted)]">
            October 14, 2026
          </p>
          <p className="font-mono text-[10.5px] text-[var(--color-muted)]">
            Ref · MAR-2026-Q4
          </p>
        </div>
      </header>

      {/* Scope summary */}
      <section className="space-y-2.5">
        <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold">
          Engagement
        </p>
        <p
          className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.015em] leading-tight"
          style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)" }}
        >
          90-day operating review, third-generation handoff.
        </p>
        <p className="font-sans text-[13.5px] text-[var(--color-body)] leading-relaxed">
          You asked for a clear picture of the operation before the handoff to
          Sarah and Eli in Q1 next year. We’ll spend the first three weeks
          listening, then deliver a written diagnostic and a 12-month plan
          you can hand to the next team without translation.
        </p>
      </section>

      {/* Phases */}
      <section className="space-y-3.5">
        <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold">
          Three phases
        </p>
        <ol className="space-y-2 list-none m-0 p-0">
          {PHASES.map((p) => (
            <li
              key={p.n}
              className="grid grid-cols-[60px_1fr_140px] gap-x-4 items-baseline py-2.5 border-b border-[var(--color-hairline)] last:border-b-0"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold">
                {p.n}
              </span>
              <div className="space-y-0.5 min-w-0">
                <p className="font-sans text-[13.5px] font-semibold text-[var(--color-heading)] tracking-tight leading-snug">
                  {p.title}
                </p>
                <p className="font-sans text-[12.5px] text-[var(--color-body)] leading-snug">
                  {p.detail}
                </p>
              </div>
              <span className="font-mono text-[10.5px] text-[var(--color-muted)] text-right tabular-nums">
                {p.weeks}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Investment */}
      <section className="grid grid-cols-2 gap-x-6 pt-4 border-t border-[var(--color-hairline)]">
        <div className="space-y-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Investment
          </p>
          <p className="font-sans text-[18px] font-semibold text-[var(--color-heading)] tabular-nums tracking-tight">
            $68,000
          </p>
          <p className="font-sans text-[11.5px] text-[var(--color-muted)]">
            Three milestone payments, net 15.
          </p>
        </div>
        <div className="space-y-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Start
          </p>
          <p className="font-sans text-[14.5px] font-semibold text-[var(--color-heading)]">
            Week of Nov 4, 2026
          </p>
          <p className="font-sans text-[11.5px] text-[var(--color-muted)]">
            Final readout · Feb 6, 2027.
          </p>
        </div>
      </section>

      {/* Signature block */}
      <footer className="grid grid-cols-2 gap-x-6 pt-5 border-t border-[var(--color-hairline)]">
        <SignatureSlot name="VERA Consulting" role="Your AI partner" signed />
        <SignatureSlot name="Hank Marlin" role="Marlin Industries" />
      </footer>

      <p className="font-mono text-[10px] text-[var(--color-muted)] text-right">
        marlin-industries · proposal-v1.pdf
      </p>
    </article>
  );
}

function SignatureSlot({
  name,
  role,
  signed = false,
}: {
  name: string;
  role: string;
  signed?: boolean;
}) {
  return (
    <div className="space-y-2">
      <div
        className={[
          "h-9 border-b flex items-end pb-1",
          signed
            ? "border-[var(--color-accent)]/60"
            : "border-[var(--color-hairline)]",
        ].join(" ")}
      >
        {signed && (
          <span
            className="font-serif italic text-[var(--color-accent)] leading-none"
            style={{
              fontFamily: "'Snell Roundhand', 'Apple Chancery', cursive",
              fontSize: "20px",
            }}
          >
            VERA Consulting
          </span>
        )}
      </div>
      <div>
        <p className="font-sans text-[12px] font-semibold text-[var(--color-heading)]">
          {name}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {role}
        </p>
      </div>
    </div>
  );
}

const PHASES = [
  {
    n: "Phase 01",
    title: "Listen and baseline",
    detail:
      "Twelve interviews across the floor, the office, and the family. Pull last three years of operating data into one place.",
    weeks: "Weeks 1–3",
  },
  {
    n: "Phase 02",
    title: "Working review",
    detail:
      "Three deep dives: pricing, fleet utilization, customer concentration. Weekly briefings on what we’re seeing, not just at the end.",
    weeks: "Weeks 4–10",
  },
  {
    n: "Phase 03",
    title: "Diagnostic and plan",
    detail:
      "Written diagnostic, twelve-month plan, decision memo for the board. Walked through in person with Sarah and Eli.",
    weeks: "Weeks 11–13",
  },
];
