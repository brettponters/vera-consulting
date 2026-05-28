/**
 * Vendor brief artifact.
 *
 * Three plausible vendors (invented but believable), proper label column,
 * winner column tinted from header to verdict, concrete cell values, and
 * a two-line verdict at the foot with footnoted sources.
 */
export function VendorBriefArtifact() {
  return (
    <article className="space-y-6">
      <header className="space-y-1.5">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            research, vendor eval
          </p>
          <p className="font-mono text-[10px] text-[var(--color-muted)]">
            3 vendors · oct 14
          </p>
        </div>
        <h3
          className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.018em] leading-tight"
          style={{ fontSize: "clamp(1.25rem, 1.9vw, 1.6rem)" }}
        >
          AI proposal tools, two-person practice.
        </h3>
        <p className="font-sans text-[13px] text-[var(--color-body)] leading-relaxed max-w-[640px]">
          Looked at the three that come up most often in operator slack. Scoped
          for a team running one to three live proposals at a time. SOC2 weight
          set high because most prospects ask.
        </p>
      </header>

      {/* Table */}
      <div className="rounded-md border border-[var(--color-hairline)] overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[var(--color-hairline)] bg-[var(--color-surface)]/60">
              <th className="py-2.5 px-3 font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] font-semibold w-[34%]">
                Criterion
              </th>
              <th className="py-2.5 px-3 font-sans text-[12.5px] text-[var(--color-heading)] font-semibold bg-[var(--color-accent)]/[0.07] border-l border-r border-[var(--color-accent)]/30">
                <span className="inline-flex items-center gap-1.5">
                  Propelo
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    pick
                  </span>
                </span>
              </th>
              <th className="py-2.5 px-3 font-sans text-[12.5px] text-[var(--color-body)] font-semibold">
                Pitchworks
              </th>
              <th className="py-2.5 px-3 font-sans text-[12.5px] text-[var(--color-body)] font-semibold">
                Helix Brief
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => (
              <tr
                key={r.k}
                className={i % 2 === 1 ? "bg-[var(--color-surface)]/30" : ""}
              >
                <td className="py-2.5 px-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-muted)] align-top">
                  {r.k}
                </td>
                <td className="py-2.5 px-3 font-sans text-[12.5px] text-[var(--color-heading)] align-top bg-[var(--color-accent)]/[0.07] border-l border-r border-[var(--color-accent)]/30">
                  <Cell value={r.a} winner />
                </td>
                <td className="py-2.5 px-3 font-sans text-[12.5px] text-[var(--color-body)] align-top">
                  <Cell value={r.b} />
                </td>
                <td className="py-2.5 px-3 font-sans text-[12.5px] text-[var(--color-body)] align-top">
                  <Cell value={r.c} />
                </td>
              </tr>
            ))}
            <tr>
              <td className="py-2.5 px-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-muted)] align-top">
                Notes
              </td>
              <td className="py-2.5 px-3 font-sans text-[11.5px] text-[var(--color-body)] align-top bg-[var(--color-accent)]/[0.07] border-l border-r border-b border-[var(--color-accent)]/30 leading-snug">
                Native Anthropic + OpenAI. Templates own-able. Export to docx.
              </td>
              <td className="py-2.5 px-3 font-sans text-[11.5px] text-[var(--color-muted)] align-top leading-snug">
                Strong editor; closed model. PDF export only.
              </td>
              <td className="py-2.5 px-3 font-sans text-[11.5px] text-[var(--color-muted)] align-top leading-snug">
                Cheapest tier, but lock-in on their CRM.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Verdict */}
      <section className="space-y-2 rounded-md border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/[0.05] px-4 py-3.5">
        <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold">
          Verdict
        </p>
        <p className="font-sans text-[13.5px] text-[var(--color-heading)] leading-snug">
          Go with <strong className="font-semibold">Propelo</strong>. Best SOC2 posture, model-agnostic, lowest switching cost if we change CRMs in &lsquo;27.
        </p>
        <p className="font-sans text-[12.5px] text-[var(--color-body)] leading-snug">
          Next: 14-day trial on the two active deals. Decision by Nov 1.
        </p>
      </section>

      {/* Sources */}
      <footer className="pt-3 border-t border-[var(--color-hairline)] space-y-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Sources
        </p>
        <ol className="space-y-0.5 list-none m-0 p-0">
          <Source n={1} text="Propelo trust portal, soc2 type 2, accessed oct 14 2026" />
          <Source n={2} text="Pitchworks pricing page, team plan, accessed oct 14 2026" />
          <Source n={3} text="Helix changelog, q3 2026 release notes" />
        </ol>
      </footer>
    </article>
  );
}

function Cell({ value, winner = false }: { value: string; winner?: boolean }) {
  return (
    <span
      className={[
        "block leading-snug",
        winner ? "font-medium" : "",
      ].join(" ")}
    >
      {value}
    </span>
  );
}

function Source({ n, text }: { n: number; text: string }) {
  return (
    <li className="flex gap-2 font-mono text-[10.5px] text-[var(--color-muted)] leading-relaxed">
      <span className="text-[var(--color-accent)]">[{n}]</span>
      <span className="truncate">{text}</span>
    </li>
  );
}

const ROWS = [
  {
    k: "Security",
    a: "SOC2 Type 2 [1]",
    b: "SOC2 Type 1",
    c: "Self-attested",
  },
  {
    k: "Price",
    a: "$89 / seat / mo [2]",
    b: "$59 / seat / mo",
    c: "$29 / seat / mo",
  },
  {
    k: "Models",
    a: "Claude + GPT, BYO key",
    b: "GPT-4 only, vendor key",
    c: "Multi-model, vendor key",
  },
  {
    k: "Switch cost",
    a: "Low, markdown export",
    b: "Medium, proprietary format",
    c: "High, CRM lock-in",
  },
];
