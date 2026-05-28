/**
 * Brand voice guide artifact.
 *
 * Modeled on a real one-page voice document, not a marketing card grid.
 * Three columns of voice rules, a "sounds like / not like" comparison
 * strip, and a footer with two before/after rewrites.
 */
export function VoiceGuideArtifact() {
  return (
    <article className="space-y-7">
      <header className="pb-4 border-b border-[var(--color-hairline)]">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              vera, brand voice
            </p>
            <h3
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.015em] leading-tight mt-1"
              style={{ fontSize: "clamp(1.25rem, 1.8vw, 1.65rem)" }}
            >
              How we sound on the page.
            </h3>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] text-[var(--color-muted)]">v1 · brett</p>
            <p className="font-mono text-[10px] text-[var(--color-muted)]">oct 14, 2026</p>
          </div>
        </div>
      </header>

      {/* Three pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
        {PILLARS.map((p, i) => (
          <div key={p.title} className="space-y-2.5">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[10px] text-[var(--color-accent)] tabular-nums">
                0{i + 1}
              </span>
              <p className="font-sans text-[13px] font-semibold text-[var(--color-heading)] tracking-tight">
                {p.title}
              </p>
            </div>
            <p className="font-sans text-[13px] leading-relaxed text-[var(--color-body)]">
              {p.body}
            </p>
          </div>
        ))}
      </section>

      {/* Sounds like / not like */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 border-t border-[var(--color-hairline)] pt-5">
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-2">
            Sounds like us
          </p>
          <ul className="space-y-1.5 list-none m-0 p-0">
            {SOUNDS_LIKE.map((line) => (
              <li
                key={line}
                className="font-sans text-[13px] text-[var(--color-heading)] leading-relaxed"
              >
                <span className="text-[var(--color-accent)] mr-1.5">·</span>
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-2">
            Doesn’t sound like us
          </p>
          <ul className="space-y-1.5 list-none m-0 p-0">
            {NOT_LIKE.map((line) => (
              <li
                key={line}
                className="font-sans text-[13px] text-[var(--color-muted)] leading-relaxed line-through decoration-[var(--color-hairline)] decoration-[1.5px]"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Before / after */}
      <section className="border-t border-[var(--color-hairline)] pt-5 space-y-4">
        <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold">
          Rewrites
        </p>
        {REWRITES.map((r) => (
          <div key={r.before} className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-md border border-[var(--color-hairline)] bg-[var(--color-surface)]/70 px-3.5 py-3">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[var(--color-muted)] mb-1.5">
                draft
              </p>
              <p className="font-sans text-[12.5px] text-[var(--color-muted)] line-through decoration-[var(--color-hairline)] leading-snug">
                {r.before}
              </p>
            </div>
            <div className="rounded-md border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/[0.04] px-3.5 py-3">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-1.5">
                rewrite
              </p>
              <p className="font-sans text-[12.5px] text-[var(--color-heading)] leading-snug">
                {r.after}
              </p>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}

const PILLARS = [
  {
    title: "Direct",
    body:
      "Short sentences carry the load. Names beat adjectives. If the reader has to reread a line to understand it, the line is wrong.",
  },
  {
    title: "Earned",
    body:
      "We say what we’ve seen, not what we’ve heard. Specific over sweeping. A number, a date, or a name beats a promise.",
  },
  {
    title: "Steady",
    body:
      "We don’t lecture and we don’t pitch by fear. We treat the reader like someone running a real team, because they are.",
  },
];

const SOUNDS_LIKE = [
  "Decisions, not predictions.",
  "What you ship between now and 2027.",
  "We help our clients lay it the first time.",
];

const NOT_LIKE = [
  "Let us empower your transformation.",
  "Unlock next-gen AI capabilities.",
  "In today’s fast-paced world…",
];

const REWRITES = [
  {
    before:
      "We help organizations leverage AI to unlock new capabilities and elevate their operations.",
    after:
      "We help operators put AI into the work they already do, then keep it running.",
  },
  {
    before:
      "Our cutting-edge platform empowers teams to revolutionize their workflows with ease.",
    after:
      "You get a workflow you keep. It runs Monday morning whether we’re on a call or not.",
  },
];
