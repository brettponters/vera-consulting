import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SolutionLayout } from "../_components/SolutionLayout";

export const metadata: Metadata = {
  title: "Custom AI Agents for Professional Businesses | VERA",
  description:
    "Custom AI agents that run real workflows on a schedule or trigger. Built on Claude and MCP, evaluated, and supported. For South Florida businesses tired of chatbots that don't ship work.",
  alternates: { canonical: "/solutions/agents" },
  openGraph: {
    title: "Custom AI Agents | VERA",
    description:
      "Real agents, not chatbots. Built into your tools, evaluated against quality criteria, supported after launch.",
    type: "website",
    url: "https://veraconsulting.co/solutions/agents",
  },
};

const FAQS = [
  {
    q: "What is the difference between an AI agent and a chatbot?",
    a: "A chatbot waits for someone to type a question and replies with text. An AI agent runs a workflow. It reads from your tools, makes decisions, takes actions like sending an email, updating a CRM record, or drafting a document, and reports back. Chatbots answer. Agents ship work.",
  },
  {
    q: "How do you handle reliability when the model gets something wrong?",
    a: "Three layers. First, the agent is scoped to a narrow job with clear inputs and outputs so the failure surface is small. Second, every run is checked against an evaluation framework we build with you, so quality is measured, not assumed. Third, human review is built into the steps that matter, with the agent flagging anything it is not confident about instead of guessing.",
  },
  {
    q: "What happens if the model provider goes down or changes?",
    a: "We build model-agnostic. Claude is the default because it leads on agent work in 2026, but the agent is structured so the model can be swapped without rewriting the workflow. If Anthropic is degraded, the agent can fail over to another provider for the duration.",
  },
  {
    q: "How long does it take to build a custom AI agent?",
    a: "A focused single-workflow agent typically takes four to eight weeks from kickoff to production. More complex multi-step agents with several tool integrations run eight to sixteen weeks. We scope tightly and ship the first useful version fast, then iterate.",
  },
  {
    q: "Do I own the agent after you build it?",
    a: "Yes. You own the code, the prompts, the evaluation suite, and the runbook. We give you everything your team needs to operate it without us. The 30-day support window is there for tuning and edge cases, not lock-in.",
  },
];

const EXAMPLES = [
  {
    industry: "Real estate brokerage",
    agent: "Past-client outreach agent",
    detail:
      "Reads the CRM weekly, finds past clients due for a check-in based on transaction date and life-event signals, drafts a personal message for the agent to review and send.",
  },
  {
    industry: "Law firm",
    agent: "Intake summarization agent",
    detail:
      "Pulls new intake form submissions, summarizes the matter, flags conflicts against the client list, drafts a routing recommendation to the right practice group.",
  },
  {
    industry: "Financial advisor",
    agent: "Client meeting brief agent",
    detail:
      "Runs the morning of each client meeting. Pulls portfolio changes, recent market moves relevant to the client's holdings, last meeting notes, and produces a one-page brief in the advisor's inbox.",
  },
  {
    industry: "Healthcare practice",
    agent: "Referral follow-up agent",
    detail:
      "Tracks outbound referrals, checks for return correspondence on a schedule, drafts a follow-up to the referring provider when a report is overdue.",
  },
  {
    industry: "Marketing agency",
    agent: "Weekly client report agent",
    detail:
      "Aggregates campaign data across platforms, drafts the recurring client report in the agency's voice and template, surfaces anomalies the account lead should explain.",
  },
];

export default function AgentsPage() {
  return (
    <>
      <SolutionLayout
        currentSlug="agents"
        eyebrow="Solution · Custom AI Agents"
        title="Autonomous workflows that run themselves."
        intro="An AI agent is not a chatbot. A chatbot answers questions. An agent runs a workflow, reads from your tools, makes decisions, takes actions, and reports back. When a task is repetitive enough that you'd hire someone for it but specific enough that you can't outsource it, an agent fits. We design, build, evaluate, and deploy custom AI agents that produce real output on a schedule or a trigger."
        forWho="South Florida professional service businesses with high-volume repetitive work that has clear inputs and outputs. Real estate brokerages, law firms, financial advisors, healthcare practices, marketing agencies. Past-client outreach, intake summarization, lead qualification, market briefs, document generation, recurring client reports."
        whatYouGet={[
          "Agent design and specification document, written before any code",
          "Built agent integrated with your existing tools and data via MCP or direct APIs",
          "Evaluation framework and quality monitoring your team can run without us",
          "Documentation and operating runbook for your team",
          "30-day support window after launch for tuning and edge cases",
        ]}
      />

      {/* ── EXAMPLES ──────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="max-w-[860px] mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-4">
              How agents fit
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1] mb-5"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
            >
              What an AI agent looks like in practice.
            </h2>
            <p className="font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed max-w-[680px]">
              Shapes of agents we design and build for professional service businesses. Each one starts as a recurring task someone is doing by hand, every week, that an agent can take over with a human approval step at the end.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 list-none m-0 p-0 max-w-[1080px]">
            {EXAMPLES.map((ex) => (
              <li key={ex.agent} className="flex flex-col gap-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold">
                  {ex.industry}
                </p>
                <p className="font-sans text-[var(--color-heading)] text-lg font-semibold leading-snug">
                  {ex.agent}
                </p>
                <p className="font-sans text-[var(--color-body)] text-base leading-relaxed">
                  {ex.detail}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── STACK ─────────────────────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-16 max-w-[1080px]">
            <div className="md:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
                Stack we work with
              </p>
              <h2
                className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
                style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}
              >
                Claude first, model-agnostic by design.
              </h2>
            </div>
            <div className="md:col-span-7 font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed space-y-5">
              <p>
                We default to Anthropic&apos;s Claude family because it leads on the agent and tool-use work this kind of project needs in 2026. The Model Context Protocol (MCP) is how the agent talks to your real systems, your CRM, calendar, document store, internal data, so we are not gluing together brittle webhooks.
              </p>
              <p>
                Every agent we build is structured so the model can be swapped. If OpenAI, Google, or an open model is the right answer for a specific job, we use it. The agent is the workflow. The model is a component.
              </p>
              <p>
                Reliability is paired with measurement. Agents ship with an{" "}
                <Link
                  href="/solutions/evaluation"
                  className="text-[var(--color-accent)] hover:opacity-80 transition-opacity no-underline font-medium"
                >
                  evaluation framework
                </Link>{" "}
                so you know whether quality is holding over time, not just on launch day.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="max-w-[860px] mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-4">
              FAQ
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
            >
              Common questions.
            </h2>
          </div>
          <dl className="max-w-[840px] divide-y divide-[var(--color-hairline)]">
            {FAQS.map((item) => (
              <div key={item.q} className="py-7 first:pt-0">
                <dt className="font-sans text-[var(--color-heading)] text-lg md:text-xl font-semibold leading-snug mb-3">
                  {item.q}
                </dt>
                <dd className="font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed m-0">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
