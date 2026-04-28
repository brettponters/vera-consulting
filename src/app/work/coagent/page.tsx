import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { TextLink } from '@/components/ui/TextLink';
import { Eyebrow } from '@/components/ui/Eyebrow';
import CoAgentArchitectureFull from '@/components/diagrams/CoAgentArchitectureFull';
import { COAGENT_CASE_STUDY } from '@/config/copy';

const C = COAGENT_CASE_STUDY;

export const metadata = {
  title: C.meta.title,
  description: C.meta.description,
};

export default function CoAgentPage() {
  return (
    <main className="min-h-screen bg-bg-base text-fg-base">

      {/* ── Nav back ── */}
      <div className="pt-10 pb-0">
        <Container>
          <Link
            href="/"
            className="text-sm text-fg-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-1 group"
          >
            <span
              className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5"
              aria-hidden="true"
            >
              &larr;
            </span>
            Back
          </Link>
        </Container>
      </div>

      {/* ── §3.1 Hero ── */}
      <section className="pt-16 pb-20">
        <Container>
          <Eyebrow className="mb-6">{C.hero.eyebrow}</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-fg-base mb-6 max-w-2xl">
            {C.hero.headline}
          </h1>
          <p className="text-lg text-fg-muted max-w-prose leading-relaxed">
            {C.hero.body}
          </p>
        </Container>
      </section>

      <div className="border-t border-fg-muted/10" />

      {/* ── §3.2 What it is ── */}
      <section className="py-20">
        <Container>
          <div className="max-w-prose">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-fg-base mb-6">
              {C.whatItIs.heading}
            </h2>
            {C.whatItIs.paragraphs.map((p, i) => (
              <p key={i} className="text-fg-muted leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <div className="border-t border-fg-muted/10" />

      {/* ── §3.3 Architecture ── */}
      <section className="py-20">
        <Container>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-fg-base mb-4">
            {C.architecture.heading}
          </h2>
          <p className="text-fg-muted max-w-prose leading-relaxed mb-10">
            {C.architecture.walkthrough}
          </p>
        </Container>

        {/* Full-width diagram */}
        <div className="w-full border-y border-fg-muted/10 bg-bg-subtle py-10">
          <Container>
            <CoAgentArchitectureFull className="w-full h-auto" />
          </Container>
        </div>

        <Container>
          <div className="mt-12 max-w-2xl">
            <h3 className="font-display text-lg font-bold text-fg-base mb-5">
              {C.architecture.stackHeading}
            </h3>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-fg-muted/15">
                  <th className="text-left text-fg-muted font-medium py-2 pr-6 w-1/3">
                    Layer
                  </th>
                  <th className="text-left text-fg-muted font-medium py-2">
                    Technology
                  </th>
                </tr>
              </thead>
              <tbody>
                {C.architecture.stack.map((row) => (
                  <tr
                    key={row.layer}
                    className="border-b border-fg-muted/10 last:border-0"
                  >
                    <td className="py-3 pr-6 text-fg-muted">{row.layer}</td>
                    <td className="py-3 text-fg-base">{row.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <div className="border-t border-fg-muted/10" />

      {/* ── §3.4 The autonomy split ── */}
      <section className="py-20">
        <Container>
          <div className="max-w-prose">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-fg-base mb-6">
              {C.autonomySplit.heading}
            </h2>
            <p className="text-fg-muted leading-relaxed mb-10">
              {C.autonomySplit.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mb-10">
            {/* Runs automatically */}
            <div className="border border-fg-muted/15 bg-bg-subtle rounded-xl p-6">
              <h3 className="font-display text-sm font-bold text-fg-muted uppercase tracking-widest mb-4">
                {C.autonomySplit.autoLabel}
              </h3>
              <ul className="space-y-2">
                {C.autonomySplit.autoItems.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-fg-muted leading-relaxed">
                    <span className="mt-0.5 text-fg-muted/40 shrink-0" aria-hidden="true">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Queues for approval */}
            <div className="border border-fg-muted/15 bg-bg-subtle rounded-xl p-6">
              <h3 className="font-display text-sm font-bold text-fg-muted uppercase tracking-widest mb-4">
                {C.autonomySplit.queueLabel}
              </h3>
              <ul className="space-y-2">
                {C.autonomySplit.queueItems.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-fg-muted leading-relaxed">
                    <span className="mt-0.5 text-fg-muted/40 shrink-0" aria-hidden="true">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-fg-muted leading-relaxed max-w-prose">
            {C.autonomySplit.rationale}
          </p>
        </Container>
      </section>

      <div className="border-t border-fg-muted/10" />

      {/* ── §3.5 What we got right ── */}
      <section className="py-20">
        <Container>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-fg-base mb-10">
            {C.whatWeGotRight.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {C.whatWeGotRight.items.map((item) => (
              <div
                key={item.title}
                className="border border-fg-muted/15 bg-bg-subtle rounded-xl p-6"
              >
                <h3 className="font-display text-base font-bold text-fg-base mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="border-t border-fg-muted/10" />

      {/* ── §3.6 What broke ── */}
      {/* MOST IMPORTANT SECTION per design doc §3. Ships as placeholder until founder adds real failure cases. */}
      <section className="py-20">
        <Container>
          <div className="max-w-prose">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-fg-base mb-4">
              {C.whatBroke.heading}
            </h2>
            <p className="text-fg-muted leading-relaxed mb-8">
              {C.whatBroke.intro}
            </p>

            {/* TODO: founder to replace this placeholder with real failure cases.
                The design doc calls this section the most important on the page.
                Do not invent failures. Ship real incidents: misclassifications,
                memory retrieval failures, MCP timeout edge cases, approval queue
                UX issues, integration failures — whatever actually happened.
                Format: items: [{ title, body }] added to COAGENT_CASE_STUDY.whatBroke in copy.ts */}
            <div className="border border-fg-muted/15 bg-bg-subtle rounded-xl p-6">
              <p className="text-sm text-fg-muted leading-relaxed italic">
                Founder to add specific failure cases here. This section ships
                with real content — not invented. What classification mistakes
                did the agent make? What broke in the MCP integrations? What
                did the approval queue UX get wrong at first? Where did memory
                retrieval return stale or irrelevant context?
              </p>
            </div>
          </div>
        </Container>
      </section>

      <div className="border-t border-fg-muted/10" />

      {/* ── §3.7 What it taught us ── */}
      <section className="py-20">
        <Container>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-fg-base mb-10">
            {C.whatItTaughtUs.heading}
          </h2>
          <div className="max-w-prose space-y-8">
            {C.whatItTaughtUs.items.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-base font-bold text-fg-base mb-2">
                  {item.title}
                </h3>
                <p className="text-fg-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="border-t border-fg-muted/10" />

      {/* ── §3.8 CTA ── */}
      <section className="py-20">
        <Container>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-fg-base mb-4">
            {C.cta.heading}
          </h2>
          <p className="text-fg-muted mb-6 max-w-sm leading-relaxed">
            {C.cta.body}
          </p>
          <TextLink href={C.cta.href} className="text-sm font-medium">
            {C.cta.label}
          </TextLink>
        </Container>
      </section>

    </main>
  );
}
