import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { TextLink } from '@/components/ui/TextLink';
import CoAgentArchitectureFull from '@/components/diagrams/CoAgentArchitectureFull';
import { COAGENT } from '@/config/copy';

export const metadata = {
  title: 'CoAgent — RAIN',
  description:
    'How RAIN built CoAgent: a local-first, multi-agent platform for real estate operations. Architecture, approach, and results.',
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

      {/* ── Hero ── */}
      <section className="pt-16 pb-20">
        <Container>
          <p className="text-xs font-medium tracking-widest uppercase text-fg-muted mb-4">
            {COAGENT.eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-fg-base mb-6 max-w-2xl">
            {COAGENT.headline}
          </h1>
          <p className="text-lg text-fg-muted max-w-prose leading-relaxed">
            {COAGENT.body}
          </p>

          {/* Metric tiles */}
          <div className="flex flex-wrap gap-4 mt-10">
            {COAGENT.metrics.map((metric) => (
              <div
                key={metric.label}
                className="border border-fg-muted/20 bg-bg-subtle rounded-lg px-7 py-5 flex flex-col gap-1"
              >
                <span className="font-display text-4xl font-bold text-fg-base leading-none">
                  {metric.value}
                </span>
                <span className="text-xs text-fg-muted leading-snug mt-1">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-fg-muted/10" />

      {/* ── Problem ── */}
      <section className="py-20">
        <Container>
          <div className="max-w-prose">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-fg-base mb-6">
              The problem
            </h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              Real estate agents spend a large fraction of their working hours on
              coordination work that doesn't require their expertise: chasing
              leads, copying listing data, scheduling showings, drafting routine
              follow-ups. These tasks are low-value but high-volume — the exact
              shape AI agents are built for.
            </p>
            <p className="text-fg-muted leading-relaxed mb-4">
              Existing tools offer point-solutions: a CRM add-on here, an email
              template there. None of them share context. None of them act
              proactively. And most of them require data to leave the agent's
              machine and live in a vendor's cloud — a non-starter for clients
              handling sensitive buyer and seller information.
            </p>
            <p className="text-fg-muted leading-relaxed">
              The brief was clear: build a local-first, multi-agent platform that
              handles the coordination layer automatically, surfaces high-stakes
              decisions for human approval, and keeps every piece of sensitive
              data on the user's own hardware.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-fg-muted/10" />

      {/* ── Approach ── */}
      <section className="py-20">
        <Container>
          <div className="max-w-prose">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-fg-base mb-6">
              Approach
            </h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              The first design decision was where to draw the automation
              boundary. Rather than letting the agent act freely, CoAgent uses an
              explicit approval queue: the agent classifies every pending action
              by risk level and holds anything high-stakes for a one-tap human
              decision. Routine tasks — filing a contact note, sending a
              template follow-up — execute automatically.
            </p>
            <p className="text-fg-muted leading-relaxed mb-4">
              The second decision was the data architecture. All raw files and
              conversation history stay on the user's machine under{' '}
              <code className="text-fg-base text-sm bg-bg-subtle px-1.5 py-0.5 rounded">
                ~/.coagent/
              </code>
              . The agent indexes metadata summaries into a local LanceDB vector
              store for semantic search — the raw content never leaves.
            </p>
            <p className="text-fg-muted leading-relaxed mb-4">
              Tool integrations were built on Model Context Protocol (MCP), which
              gives each capability a clean, versioned interface. This made it
              straightforward to connect Gmail, Google Calendar, Slack, HubSpot,
              and MLS lookup as independent MCP servers — each testable and
              replaceable independently of the agent core.
            </p>
            <p className="text-fg-muted leading-relaxed">
              The same three safety deliverables included in every client
              engagement — red-team report, guardrails spec, monitoring spec —
              were applied to CoAgent's own build before shipping v1.
            </p>
          </div>

          {/* Approach callout blocks */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Local-first',
                body: 'Raw data never leaves the user\'s machine. Vector embeddings index metadata only.',
              },
              {
                title: 'Approval queue',
                body: 'High-stakes actions pause for human review. Routine tasks execute automatically.',
              },
              {
                title: 'MCP integrations',
                body: 'Each tool is an independent MCP server: Gmail, Calendar, Slack, HubSpot, MLS.',
              },
            ].map((item) => (
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

      {/* ── Divider ── */}
      <div className="border-t border-fg-muted/10" />

      {/* ── Architecture (full-width diagram) ── */}
      <section className="py-20">
        <Container>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-fg-base mb-4">
            Architecture
          </h2>
          <p className="text-fg-muted max-w-prose leading-relaxed mb-10">
            The agent runtime is a monorepo of purpose-built packages. The LLM
            core (Claude Sonnet, with GPT-4o and Kimi K2.6 fallbacks) orchestrates
            tool calls through a custom MCP manager that enforces per-tool
            timeouts and structured error handling. A separate scheduler handles
            periodic triggers — incoming email, calendar events, new Slack
            messages — without waking the process unnecessarily between events.
          </p>
        </Container>

        {/* Full-width diagram */}
        <div className="w-full border-y border-fg-muted/10 bg-bg-subtle py-10">
          <Container>
            <CoAgentArchitectureFull className="w-full h-auto" />
          </Container>
        </div>

        <Container>
          {/* Stack table */}
          <div className="mt-12 max-w-2xl">
            <h3 className="font-display text-lg font-bold text-fg-base mb-5">
              Stack at a glance
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
                {[
                  { layer: 'Primary LLM', tech: 'Anthropic Claude Sonnet / Opus' },
                  { layer: 'Fallback LLMs', tech: 'OpenAI GPT-4o, Moonshot Kimi K2.6' },
                  { layer: 'Embeddings', tech: 'Voyage AI' },
                  { layer: 'Vector store', tech: 'LanceDB (local)' },
                  { layer: 'Structured store', tech: 'SQLite (better-sqlite3)' },
                  { layer: 'Tool protocol', tech: 'Model Context Protocol v1.0' },
                  { layer: 'Desktop UI', tech: 'React + TypeScript (Tauri)' },
                  { layer: 'Mobile sync', tech: 'React Native + WebSocket relay' },
                  { layer: 'Scheduling', tech: 'node-cron' },
                  { layer: 'Logging', tech: 'Pino (structured JSON)' },
                ].map((row) => (
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

      {/* ── Divider ── */}
      <div className="border-t border-fg-muted/10" />

      {/* ── Results ── */}
      <section className="py-20">
        <Container>
          <div className="max-w-prose">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-fg-base mb-6">
              Results
            </h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              CoAgent shipped as v0.6.8 and is in active production use. The
              platform handles real estate workflows across email triage, listing
              research, contact follow-up, and calendar coordination — running
              entirely on the user's machine with zero cloud upload of raw data.
            </p>
            <p className="text-fg-muted leading-relaxed mb-4">
              The approval queue pattern proved particularly effective: users
              report trusting the agent with more volume once they've seen that
              high-stakes decisions consistently surface for review rather than
              executing silently.
            </p>
            <p className="text-fg-muted leading-relaxed mb-4">
              Windows support was added in January 2025 (cross-platform CI
              pipeline), extending reach beyond macOS without changes to the
              agent core. Team relay support allows multiple agents to
              collaborate on shared workflows — a feature that directly maps to
              how real estate teams operate.
            </p>
            <p className="text-fg-muted leading-relaxed">
              The architecture is now the reference implementation for every
              agent build RAIN delivers to clients: the same local-first data
              model, the same MCP tool interface, the same approval-queue
              pattern for high-stakes actions.
            </p>
          </div>

          {/* Defensible claims */}
          <div className="mt-14 border border-fg-muted/15 bg-bg-subtle rounded-xl p-8 max-w-2xl">
            <h3 className="font-display text-sm font-bold text-fg-muted uppercase tracking-widest mb-6">
              What the code actually ships
            </h3>
            <ul className="space-y-3">
              {[
                'Real-time triggers on Gmail, Outlook, Google Calendar, Google Drive, Slack, HubSpot, and Notion',
                'Raw user data stays local — zero cloud upload except temporary presigned URLs for outbound email attachments',
                'Multi-LLM routing: Claude (primary), GPT-4o (fallback), Kimi K2.6 (cost optimization)',
                'Five custom MCP servers: contacts, memory (LanceDB), iMessage history, Exa web search, team relay',
                'Tauri desktop app + React Native mobile, synced via WebSocket relay',
                'In production at v0.6.8 with active weekly releases',
              ].map((claim) => (
                <li key={claim} className="flex gap-3 text-sm text-fg-muted leading-relaxed">
                  <span className="mt-0.5 text-fg-muted/40 shrink-0" aria-hidden="true">
                    —
                  </span>
                  {claim}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-fg-muted/10" />

      {/* ── Footer CTA ── */}
      <section className="py-20">
        <Container>
          <p className="text-fg-muted text-sm mb-4">
            Want something like this built for your team?
          </p>
          <TextLink href="/contact" className="text-sm font-medium">
            Book a call &rarr;
          </TextLink>
        </Container>
      </section>
    </main>
  );
}
