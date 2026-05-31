import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";
import { Button } from "@/components/ui/Button";
import { Timeline } from "./Timeline";

export const metadata: Metadata = {
  title: "AI Fundamentals for Consultants: Agentic AI Explained",
  description:
    "A long-form explainer on AI for coaches, consultants, and solo experts who need to make real decisions about it. How language models work, why AI keeps getting better, what agentic AI actually is, where things are heading, and what each part means for your practice.",
  alternates: { canonical: "/ai-fundamentals" },
  openGraph: {
    title: "AI Fundamentals for Solo Experts and Consultants",
    description:
      "An explainer on AI for coaches, consultants, and solo experts. How language models work, why AI keeps getting better, the kinds of AI you meet today, where things are heading, and what each part means for your practice.",
    type: "website",
    url: "https://veraconsulting.co/ai-fundamentals",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Fundamentals for Solo Experts and Consultants",
    description:
      "An explainer on AI for coaches, consultants, and solo experts. How language models work, why AI keeps getting better, where things are heading, and what each part means for your practice.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Fundamentals, AI explained from the ground up",
  description:
    "A foundations-up walk through what AI is, how language models predict the next word, how vectorization works, scaling laws, agents, superintelligence, and the timeline that got us here.",
  url: "https://veraconsulting.co/ai-fundamentals",
  author: {
    "@type": "Organization",
    name: "VERA Consulting",
    url: "https://veraconsulting.co",
  },
  publisher: {
    "@type": "Organization",
    name: "VERA Consulting",
    url: "https://veraconsulting.co",
  },
  datePublished: "2026-05-01",
  dateModified: "2026-05-24",
  inLanguage: "en-US",
  about: [
    "Artificial Intelligence",
    "Large Language Models",
    "Reinforcement Learning",
    "Scaling Laws",
    "AI Agents",
    "Superintelligence",
  ],
};

/* ─────────────────────────────────────────────────────
   Visual primitives
   ───────────────────────────────────────────────────── */

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] leading-relaxed">
      {children}
    </p>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-3">
      {children}
    </span>
  );
}

function SectionHeadline({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.022em] leading-[1.12] max-w-[680px]"
      style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
    >
      {children}
    </h2>
  );
}

function SectionLead({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-sans text-[var(--color-body)] leading-relaxed max-w-[640px]"
      style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
    >
      {children}
    </p>
  );
}

function BodyProse({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 font-sans text-[var(--color-body)] leading-relaxed text-[17px] max-w-[560px] space-y-4">
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Part divider, marks the act breaks
   ───────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────
   Bridge, one or two sentences between subsections
   ───────────────────────────────────────────────────── */

function Bridge({ children }: { children: React.ReactNode }) {
  return (
    <section
      aria-hidden="true"
      className="bg-[var(--color-surface)] py-6 md:py-10"
    >
      <Container size="wide">
        <p
          className="mx-auto max-w-[620px] text-center font-sans italic text-[var(--color-muted)] leading-relaxed"
          style={{ fontSize: "clamp(0.9375rem, 1.05vw, 1rem)" }}
        >
          {children}
        </p>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   Next-token prediction visual
   ───────────────────────────────────────────────────── */

function NextTokenVisual() {
  const candidates: { token: string; prob: number; pick?: boolean }[] = [
    { token: "mat", prob: 0.42, pick: true },
    { token: "rug", prob: 0.21 },
    { token: "floor", prob: 0.14 },
    { token: "couch", prob: 0.08 },
    { token: "table", prob: 0.05 },
    { token: "windowsill", prob: 0.03 },
  ];

  const maxBar = 320;

  return (
    <div className="rounded-2xl border border-[var(--color-hairline)] bg-white p-7 md:p-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-4">
        Input
      </p>
      <p className="font-mono text-[15px] md:text-[16px] text-[var(--color-heading)] leading-relaxed">
        The cat sat on the{" "}
        <span className="inline-block w-3 h-[1.1em] align-[-0.15em] bg-[var(--color-accent)] animate-pulse" />
      </p>

      <div className="mt-8 border-t border-[var(--color-hairline)] pt-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-4">
          Probability over next token
        </p>
        <div className="space-y-2.5">
          {candidates.map((c) => (
            <div key={c.token} className="flex items-center gap-4">
              <span
                className={`font-mono text-[13px] w-[110px] shrink-0 ${
                  c.pick
                    ? "text-[var(--color-accent)] font-semibold"
                    : "text-[var(--color-body)]"
                }`}
              >
                {c.token}
              </span>
              <div className="relative flex-1 h-[18px] bg-[var(--color-surface)] rounded-sm overflow-hidden">
                <div
                  className={`h-full ${
                    c.pick ? "bg-[var(--color-accent)]" : "bg-[var(--color-hairline)]"
                  }`}
                  style={{ width: `${(c.prob / 0.42) * maxBar}px`, maxWidth: "100%" }}
                />
              </div>
              <span
                className={`font-mono text-[11px] w-[40px] text-right ${
                  c.pick ? "text-[var(--color-accent)] font-semibold" : "text-[var(--color-muted)]"
                }`}
              >
                {(c.prob * 100).toFixed(0)}%
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 font-sans text-[13px] italic text-[var(--color-muted)] leading-relaxed">
          The model picks one, appends it, and repeats. Everything an LLM does is
          built on that loop.
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Scaling laws visual, log-log curves
   ───────────────────────────────────────────────────── */

function ScalingLawsVisual() {
  const models = [
    { name: "GPT-3", year: 2020, width: 14 },
    { name: "GPT-4", year: 2023, width: 28 },
    { name: "Claude 3.5 / GPT-4o class", year: 2024, width: 46 },
    { name: "Claude Opus 4.7 / GPT-5 class", year: 2026, width: 84 },
  ];
  return (
    <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-bg)] p-6 md:p-10">
      <div className="mb-6 md:mb-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)] mb-2">
          training compute, each generation
        </p>
        <p className="font-sans text-[var(--color-heading)] text-[15px] md:text-base leading-snug font-medium max-w-[480px]">
          Each generation has been trained with roughly 10× the compute of the
          one before. Capability has followed.
        </p>
      </div>

      <ul className="list-none m-0 p-0 space-y-3.5">
        {models.map((m) => (
          <li
            key={m.name}
            className="grid grid-cols-[140px_1fr_auto] md:grid-cols-[200px_1fr_auto] items-center gap-3 md:gap-4"
          >
            <div className="min-w-0">
              <p className="font-sans text-[13px] text-[var(--color-heading)] font-medium truncate">
                {m.name}
              </p>
              <p className="font-mono text-[10px] text-[var(--color-muted)] tabular-nums">
                {m.year}
              </p>
            </div>
            <div className="h-6 md:h-7 relative">
              <div
                className="h-full rounded-[3px] bg-[var(--color-accent)]"
                style={{ width: `${m.width}%` }}
              />
            </div>
            <p className="font-mono text-[10px] text-[var(--color-muted)] tabular-nums">
              ≈10× prior
            </p>
          </li>
        ))}
      </ul>

      <p className="font-sans text-[11px] text-[var(--color-muted)] mt-6 leading-relaxed">
        Bars are illustrative, not to exact scale. Real ratios per generation
        are roughly 10× more training compute, on a smooth curve that has held
        for over a decade (Epoch AI, Stanford AI Index 2025).
      </p>

      <span className="sr-only">
        A stack of horizontal bars, each one wider than the last, showing
        that each generation of frontier model used roughly ten times the
        training compute of the previous one.
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Agent vs assistant comparison
   ───────────────────────────────────────────────────── */

const ASSISTANTS = ["ChatGPT", "Claude", "Gemini", "Copilot Chat", "Notion AI"];
const AGENTS = ["Claude Code", "Devin", "Cursor Agent", "Replit Agent", "OpenAI Codex"];
const MULTI_AGENT = ["Claude Code (parallel sub-agents)", "LangGraph", "AutoGen", "CrewAI", "OpenAI Swarm"];

function AgentAssistantCompare() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* Assistant */}
      <div className="rounded-2xl border border-[var(--color-hairline)] bg-white p-6 md:p-7 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-2 h-2 rounded-full bg-[var(--color-muted)]" />
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold">
            Assistant
          </p>
        </div>
        <h3 className="font-sans text-[17px] md:text-[18px] font-semibold text-[var(--color-heading)] leading-snug tracking-[-0.015em]">
          You drive. It answers.
        </h3>
        <p className="mt-3 font-sans text-[13.5px] leading-relaxed text-[var(--color-body)]">
          Single-turn. You ask one thing, it answers, you ask the next. No
          side effects. You stay in the loop.
        </p>
        <div className="mt-5 pt-4 border-t border-[var(--color-hairline)]">
          <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-1.5">
            Examples
          </p>
          <p className="font-sans text-[12.5px] text-[var(--color-body)] leading-relaxed">
            {ASSISTANTS.join(", ")}
          </p>
        </div>
      </div>

      {/* Agent */}
      <div className="rounded-2xl border border-[var(--color-accent)]/60 bg-white p-6 md:p-7 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-2 h-2 rounded-full bg-[var(--color-accent)]" />
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold">
            Agent
          </p>
        </div>
        <h3 className="font-sans text-[17px] md:text-[18px] font-semibold text-[var(--color-heading)] leading-snug tracking-[-0.015em]">
          You set a goal. It works.
        </h3>
        <p className="mt-3 font-sans text-[13.5px] leading-relaxed text-[var(--color-body)]">
          The same model wrapped in a loop with tools, files, and a terminal.
          You give it a goal, it plans, acts, observes, repeats until done.
        </p>
        <div className="mt-5 pt-4 border-t border-[var(--color-hairline)]">
          <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-1.5">
            Examples
          </p>
          <p className="font-sans text-[12.5px] text-[var(--color-body)] leading-relaxed">
            {AGENTS.join(", ")}
          </p>
        </div>
      </div>

      {/* Multi-agent */}
      <div className="rounded-2xl border-2 border-[var(--color-accent)] bg-[var(--color-accent)]/[0.04] p-6 md:p-7 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold">
            Multi-agent
          </p>
        </div>
        <h3 className="font-sans text-[17px] md:text-[18px] font-semibold text-[var(--color-heading)] leading-snug tracking-[-0.015em]">
          You set a goal. They work.
        </h3>
        <p className="mt-3 font-sans text-[13.5px] leading-relaxed text-[var(--color-body)]">
          Many agents in parallel, coordinated by another agent. One plans
          and delegates, others execute. Whole workflows finish while you do
          something else.
        </p>
        <div className="mt-5 pt-4 border-t border-[var(--color-hairline)]">
          <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-1.5">
            Examples
          </p>
          <p className="font-sans text-[12.5px] text-[var(--color-body)] leading-relaxed">
            {MULTI_AGENT.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Capability climb
   ───────────────────────────────────────────────────── */

function CapabilityClimb() {
  return (
    <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-bg)] p-6 md:p-10">
      <svg
        viewBox="0 0 720 360"
        className="w-full h-auto block"
        aria-labelledby="climb-title"
        role="img"
      >
        <title id="climb-title">
          A rising curve passing the human baseline, with markers for routine,
          professional, and frontier tasks.
        </title>

        <line x1="60" y1="40" x2="60" y2="300" stroke="#E6E6EA" strokeWidth="1" />
        <line x1="60" y1="300" x2="680" y2="300" stroke="#E6E6EA" strokeWidth="1" />

        <line
          x1="60"
          y1="200"
          x2="680"
          y2="200"
          stroke="#5C5C66"
          strokeDasharray="4 4"
          strokeWidth="1"
        />
        <text x="676" y="194" textAnchor="end" fontFamily="DM Sans, sans-serif" fontSize="11" fill="#5C5C66">
          human baseline
        </text>

        <path
          d="M 60 290 C 180 285, 240 270, 320 230 S 460 130, 560 90 680 70 680 60"
          fill="none"
          stroke="#C97B3F"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <circle cx="200" cy="278" r="5" fill="#FFFFFF" stroke="#C97B3F" strokeWidth="2" />
        <text x="200" y="320" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fill="#0F0F10" fontWeight="600">
          routine tasks
        </text>
        <text x="200" y="335" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#5C5C66">
          email drafts, summaries
        </text>

        <circle cx="380" cy="205" r="5" fill="#FFFFFF" stroke="#C97B3F" strokeWidth="2" />
        <text x="380" y="245" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fill="#0F0F10" fontWeight="600">
          professional tasks
        </text>
        <text x="380" y="260" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#5C5C66">
          analysis, coding, briefs
        </text>

        <circle cx="560" cy="92" r="5" fill="#C97B3F" />
        <text x="560" y="76" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fill="#0F0F10" fontWeight="600">
          frontier tasks
        </text>
        <text x="560" y="62" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#5C5C66">
          research, novel reasoning
        </text>

        <text x="60" y="24" fontFamily="DM Sans, sans-serif" fontSize="10" letterSpacing="2" fill="#C97B3F" fontWeight="700">
          CAPABILITY
        </text>
        <text x="680" y="324" textAnchor="end" fontFamily="DM Sans, sans-serif" fontSize="10" letterSpacing="2" fill="#5C5C66" fontWeight="700">
          TIME →
        </text>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   RL loop visual
   ───────────────────────────────────────────────────── */

function RLLoop() {
  return (
    <div className="rounded-2xl border border-[var(--color-hairline)] bg-white p-6 md:p-10">
      <svg
        viewBox="0 0 640 340"
        className="w-full h-auto block"
        aria-labelledby="rl-loop-title"
        role="img"
      >
        <title id="rl-loop-title">
          A feedback loop showing how a model takes an action, observes a
          reward from the environment, then updates the policy that chose
          the action.
        </title>

        {/* Agent box */}
        <rect x="60" y="120" width="180" height="100" rx="10" fill="#FFFFFF" stroke="#0F0F10" strokeWidth="1.5" />
        <text x="150" y="160" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="14" fontWeight="700" fill="#050507">
          Model
        </text>
        <text x="150" y="180" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fill="#5C5C66">
          chooses an action
        </text>
        <text x="150" y="196" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fill="#5C5C66">
          from current policy
        </text>

        {/* Environment box */}
        <rect x="400" y="120" width="180" height="100" rx="10" fill="#FFFFFF" stroke="#0F0F10" strokeWidth="1.5" />
        <text x="490" y="160" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="14" fontWeight="700" fill="#050507">
          Environment
        </text>
        <text x="490" y="180" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fill="#5C5C66">
          a game, a user,
        </text>
        <text x="490" y="196" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fill="#5C5C66">
          a benchmark
        </text>

        {/* Top arrow: action */}
        <path
          d="M 240 145 C 300 110, 340 110, 400 145"
          fill="none"
          stroke="#C97B3F"
          strokeWidth="2"
        />
        <polygon points="400,145 388,138 388,152" fill="#C97B3F" />
        <text x="320" y="98" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="700" fill="#C97B3F">
          action
        </text>

        {/* Bottom arrow: reward */}
        <path
          d="M 400 195 C 340 230, 300 230, 240 195"
          fill="none"
          stroke="#C97B3F"
          strokeWidth="2"
        />
        <polygon points="240,195 252,188 252,202" fill="#C97B3F" />
        <text x="320" y="252" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="700" fill="#C97B3F">
          reward signal
        </text>
        <text x="320" y="266" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#5C5C66">
          (and the new state of the world)
        </text>

        {/* Bottom arrow back into model: update */}
        <path
          d="M 150 220 L 150 290 L 60 290 L 60 220"
          fill="none"
          stroke="#0F0F10"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <text x="105" y="312" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" letterSpacing="1.5" fill="#5C5C66" fontWeight="700">
          update the policy
        </text>

        {/* Top label */}
        <text x="60" y="48" fontFamily="DM Sans, sans-serif" fontSize="10" letterSpacing="2" fill="#5C5C66" fontWeight="700">
          THE REINFORCEMENT LEARNING LOOP
        </text>
        <text x="60" y="64" fontFamily="DM Sans, sans-serif" fontSize="11" fill="#5C5C66">
          repeat many times, the model gets better at picking actions that lead to higher rewards
        </text>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Intelligence ladder (narrow → general → super)
   ───────────────────────────────────────────────────── */

function IntelligenceLadder() {
  return (
    <div className="rounded-2xl border border-[var(--color-hairline)] bg-white p-6 md:p-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="block h-[2px] w-8 bg-[var(--color-accent)]" />
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold">
          VERA's view
        </span>
      </div>
      <p className="font-sans text-[var(--color-heading)] text-[15px] md:text-base leading-snug font-medium max-w-[560px] mb-6">
        AGI is the moment AI can meaningfully improve itself. Superintelligence
        is what comes next, fast. The only ceiling we see is physical.
      </p>

      <svg
        viewBox="0 0 800 440"
        className="w-full h-auto block"
        aria-labelledby="exp-climb-title"
        role="img"
      >
        <title id="exp-climb-title">
          An exponential curve climbing from today's narrow AI to AGI, defined
          as the onset of recursive self-improvement, then steeply into
          superintelligence before flattening against a ceiling of physical
          constraints, infrastructure, power, and data.
        </title>

        {/* Ceiling */}
        <line
          x1="50"
          y1="70"
          x2="780"
          y2="70"
          stroke="#C97B3F"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.55"
        />
        <text
          x="780"
          y="60"
          textAnchor="end"
          fontFamily="DM Sans, sans-serif"
          fontSize="10"
          letterSpacing="2"
          fill="#C97B3F"
          fontWeight="700"
        >
          PHYSICAL CEILING, INFRASTRUCTURE, POWER, DATA
        </text>

        {/* Axes */}
        <line x1="50" y1="390" x2="780" y2="390" stroke="#E6E6EA" strokeWidth="1" />
        <line x1="50" y1="70" x2="50" y2="390" stroke="#E6E6EA" strokeWidth="1" />

        {/* The curve, exponential then flatten */}
        <path
          d="M 50 378 C 180 372, 260 360, 320 332 C 365 295, 395 230, 430 150 C 460 95, 510 78, 580 74 L 780 72"
          fill="none"
          stroke="#C97B3F"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Soft accent fill under the curve */}
        <path
          d="M 50 378 C 180 372, 260 360, 320 332 C 365 295, 395 230, 430 150 C 460 95, 510 78, 580 74 L 780 72 L 780 390 L 50 390 Z"
          fill="#C97B3F"
          opacity="0.05"
        />

        {/* Marker, today / narrow AI */}
        <circle cx="200" cy="370" r="6" fill="#FFFFFF" stroke="#0F0F10" strokeWidth="2" />
        <line x1="200" y1="378" x2="200" y2="405" stroke="#0F0F10" strokeWidth="1" strokeOpacity="0.45" />
        <text x="200" y="421" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="700" fill="#0F0F10">
          today
        </text>
        <text x="200" y="434" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#5C5C66">
          narrow AI
        </text>

        {/* Marker, AGI = RSI */}
        <circle cx="320" cy="332" r="9" fill="#C97B3F" />
        <line x1="320" y1="324" x2="320" y2="288" stroke="#C97B3F" strokeWidth="1" strokeOpacity="0.5" />
        <text x="320" y="280" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#C97B3F">
          AGI
        </text>
        <text x="320" y="266" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#0F0F10">
          recursive self-improvement begins
        </text>

        {/* Marker, superintelligence */}
        <circle cx="430" cy="150" r="9" fill="#C97B3F" />
        <line x1="438" y1="148" x2="478" y2="125" stroke="#C97B3F" strokeWidth="1" strokeOpacity="0.5" />
        <text x="485" y="123" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#C97B3F">
          superintelligence
        </text>
        <text x="485" y="137" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#0F0F10">
          exceeds the best humans in every domain
        </text>

        {/* Axis labels */}
        <text x="50" y="60" fontFamily="DM Sans, sans-serif" fontSize="10" letterSpacing="2" fill="#5C5C66" fontWeight="700">
          CAPABILITY ↑
        </text>
        <text x="780" y="404" textAnchor="end" fontFamily="DM Sans, sans-serif" fontSize="10" letterSpacing="2" fill="#5C5C66" fontWeight="700">
          TIME →
        </text>
      </svg>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-1.5 font-semibold">
            many definitions of AGI exist
          </p>
          <p className="font-sans text-[12.5px] text-[var(--color-body)] leading-relaxed">
            Some define AGI as "matches humans across all cognitive work." Others
            tie it to specific benchmarks, or to economic impact, or to passing
            the Turing test. The debate is open.
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-1.5 font-semibold">
            ours is operational
          </p>
          <p className="font-sans text-[12.5px] text-[var(--color-body)] leading-relaxed">
            We define AGI as the threshold at which an AI can meaningfully
            improve itself. From that point, the climb to superintelligence is
            steep, and the constraints are physical, infrastructure, power, and
            data, not theoretical.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   RSI loop visual
   ───────────────────────────────────────────────────── */

function RSILoop() {
  return (
    <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-bg)] p-6 md:p-10">
      <svg
        viewBox="0 0 720 320"
        className="w-full h-auto block"
        aria-labelledby="rsi-title"
        role="img"
      >
        <title id="rsi-title">
          A loop in which a model trains a successor that trains a further
          successor, each generation more capable.
        </title>

        {/* Three boxes representing generations */}
        {[
          { x: 80, label: "model v1", sub: "today" },
          { x: 300, label: "model v2", sub: "trained by v1" },
          { x: 520, label: "model v3", sub: "trained by v2" },
        ].map((g, i) => (
          <g key={g.label}>
            <rect
              x={g.x}
              y="130"
              width="120"
              height="60"
              rx="8"
              fill="#FFFFFF"
              stroke={i === 0 ? "#0F0F10" : "#C97B3F"}
              strokeWidth="1.5"
            />
            <text
              x={g.x + 60}
              y="156"
              textAnchor="middle"
              fontFamily="DM Sans, sans-serif"
              fontSize="13"
              fontWeight="700"
              fill={i === 0 ? "#050507" : "#C97B3F"}
            >
              {g.label}
            </text>
            <text
              x={g.x + 60}
              y="174"
              textAnchor="middle"
              fontFamily="DM Sans, sans-serif"
              fontSize="10"
              fill="#5C5C66"
            >
              {g.sub}
            </text>
          </g>
        ))}

        {/* Arrows between */}
        <line x1="200" y1="160" x2="295" y2="160" stroke="#C97B3F" strokeWidth="2" />
        <polygon points="302,160 292,154 292,166" fill="#C97B3F" />
        <text x="247" y="148" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#5C5C66" fontStyle="italic">
          designs
        </text>

        <line x1="420" y1="160" x2="515" y2="160" stroke="#C97B3F" strokeWidth="2" />
        <polygon points="522,160 512,154 512,166" fill="#C97B3F" />
        <text x="467" y="148" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#5C5C66" fontStyle="italic">
          designs
        </text>

        {/* Capability bar growing */}
        <text x="80" y="240" fontFamily="DM Sans, sans-serif" fontSize="10" letterSpacing="2" fill="#5C5C66" fontWeight="700">
          CAPABILITY
        </text>
        <rect x="80" y="250" width="120" height="10" fill="#C97B3F" fillOpacity="0.35" />
        <rect x="300" y="250" width="120" height="14" fill="#C97B3F" fillOpacity="0.65" />
        <rect x="520" y="250" width="120" height="20" fill="#C97B3F" />

        {/* Caption */}
        <text x="360" y="298" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fontStyle="italic" fill="#0F0F10">
          I.J. Good, 1965, the intelligence explosion hypothesis
        </text>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Industries by exposure visual
   ───────────────────────────────────────────────────── */

const EXPOSURE_ROWS: { industry: string; pct: number; note: string }[] = [
  { industry: "Software engineering", pct: 58, note: "code, review, refactor" },
  { industry: "Marketing & content", pct: 52, note: "copy, briefs, edits" },
  { industry: "Legal research", pct: 45, note: "discovery, drafting, memos" },
  { industry: "Financial analysis", pct: 40, note: "modeling, summaries" },
  { industry: "Customer support", pct: 36, note: "tier-1, triage, replies" },
  { industry: "Education", pct: 30, note: "tutoring, lesson design" },
  { industry: "Healthcare, knowledge work", pct: 24, note: "notes, coding, prior auth" },
  { industry: "Manufacturing operations", pct: 18, note: "planning, documentation" },
  { industry: "Construction & trades", pct: 11, note: "estimating, paperwork" },
];

function IndustryExposureVisual() {
  const max = 60; // anchor scale to give whitespace at the right
  const labelW = 200;
  const trackX = labelW + 24;
  const trackW = 360;
  const rowH = 34;
  const top = 60;
  const height = top + EXPOSURE_ROWS.length * rowH + 60;
  const viewW = trackX + trackW + 70;

  return (
    <div className="rounded-2xl border border-[var(--color-hairline)] bg-white p-6 md:p-10">
      <svg
        viewBox={`0 0 ${viewW} ${height}`}
        className="w-full h-auto block"
        aria-labelledby="exposure-title"
        role="img"
      >
        <title id="exposure-title">
          Horizontal bar chart showing approximate share of tasks per industry
          that current AI systems can already do well, ranging from software
          engineering at the top to construction at the bottom.
        </title>

        {/* Header */}
        <text
          x={labelW}
          y={28}
          textAnchor="end"
          fontFamily="DM Sans, sans-serif"
          fontSize="10"
          letterSpacing="2"
          fill="#5C5C66"
          fontWeight="700"
        >
          INDUSTRY
        </text>
        <text
          x={trackX}
          y={28}
          fontFamily="DM Sans, sans-serif"
          fontSize="10"
          letterSpacing="2"
          fill="#C97B3F"
          fontWeight="700"
        >
          SHARE OF TASKS AI CAN ALREADY DO WELL
        </text>

        {/* Scale gridlines */}
        {[0, 20, 40, 60].map((tick) => {
          const x = trackX + (tick / max) * trackW;
          return (
            <g key={tick}>
              <line
                x1={x}
                y1={top - 8}
                x2={x}
                y2={top + EXPOSURE_ROWS.length * rowH - 4}
                stroke="#F2F2F4"
                strokeWidth="1"
              />
              <text
                x={x}
                y={top + EXPOSURE_ROWS.length * rowH + 14}
                textAnchor="middle"
                fontFamily="DM Sans, sans-serif"
                fontSize="10"
                fill="#5C5C66"
              >
                {tick}%
              </text>
            </g>
          );
        })}

        {/* Rows */}
        {EXPOSURE_ROWS.map((row, i) => {
          const y = top + i * rowH;
          const w = (row.pct / max) * trackW;
          const isLeader = i === 0;
          return (
            <g key={row.industry}>
              {/* Industry label */}
              <text
                x={labelW}
                y={y + 14}
                textAnchor="end"
                fontFamily="DM Sans, sans-serif"
                fontSize="12"
                fontWeight={isLeader ? 700 : 600}
                fill="#0F0F10"
              >
                {row.industry}
              </text>
              {/* Sub note */}
              <text
                x={labelW}
                y={y + 26}
                textAnchor="end"
                fontFamily="DM Sans, sans-serif"
                fontSize="9.5"
                fill="#5C5C66"
                fontStyle="italic"
              >
                {row.note}
              </text>
              {/* Track */}
              <line
                x1={trackX}
                y1={y + 18}
                x2={trackX + trackW}
                y2={y + 18}
                stroke="#E6E6EA"
                strokeWidth="1"
              />
              {/* Bar */}
              <rect
                x={trackX}
                y={y + 10}
                width={w}
                height={16}
                rx={2}
                fill="#C97B3F"
                fillOpacity={isLeader ? 1 : 0.55 - i * 0.04}
              />
              {/* Percentage */}
              <text
                x={trackX + w + 8}
                y={y + 22}
                fontFamily="DM Sans, sans-serif"
                fontSize="11"
                fontWeight="700"
                fill="#0F0F10"
              >
                {row.pct}%
              </text>
            </g>
          );
        })}

        {/* Footer note */}
        <text
          x={trackX}
          y={top + EXPOSURE_ROWS.length * rowH + 38}
          fontFamily="DM Sans, sans-serif"
          fontSize="10"
          fill="#5C5C66"
          fontStyle="italic"
        >
          Synthesis of Eloundou et al. (2024), Goldman Sachs (2023), and the
          Anthropic Economic Index (2026).
        </text>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Cost curve mini-visual
   ───────────────────────────────────────────────────── */

function CostCurveStrip() {
  const points = [
    { label: "Nov 2022", cost: 20 },
    { label: "Jul 2023", cost: 6 },
    { label: "Mar 2024", cost: 1.2 },
    { label: "Oct 2024", cost: 0.07 },
  ];
  const maxLog = Math.log10(20);
  const minLog = Math.log10(0.05);
  const w = 480;
  const h = 140;
  const padX = 40;
  const padY = 30;

  const x = (i: number) => padX + (i / (points.length - 1)) * (w - padX * 2);
  const y = (c: number) =>
    padY +
    ((maxLog - Math.log10(c)) / (maxLog - minLog)) * (h - padY * 2);

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(p.cost)}`)
    .join(" ");

  return (
    <div className="rounded-2xl border border-[var(--color-hairline)] bg-white p-6 md:p-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-4">
        Cost per million tokens, GPT-3.5-class model
      </p>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto block" role="img" aria-label="Inference cost decline, log scale, from $20 to $0.07 per million tokens between November 2022 and October 2024.">
        {/* Frame */}
        <line x1={padX} y1={padY} x2={padX} y2={h - padY} stroke="#E6E6EA" strokeWidth="1" />
        <line x1={padX} y1={h - padY} x2={w - padX} y2={h - padY} stroke="#E6E6EA" strokeWidth="1" />

        <path d={path} stroke="#C97B3F" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {points.map((p, i) => (
          <g key={p.label}>
            <circle cx={x(i)} cy={y(p.cost)} r={4} fill="#C97B3F" />
            <text
              x={x(i)}
              y={h - padY + 16}
              textAnchor="middle"
              fontFamily="DM Sans, sans-serif"
              fontSize="10"
              fill="#5C5C66"
            >
              {p.label}
            </text>
            <text
              x={x(i)}
              y={y(p.cost) - 10}
              textAnchor="middle"
              fontFamily="DM Sans, sans-serif"
              fontSize="10"
              fontWeight="700"
              fill="#0F0F10"
            >
              ${p.cost < 1 ? p.cost.toFixed(2) : p.cost.toFixed(0)}
            </text>
          </g>
        ))}
      </svg>
      <p className="mt-3 font-sans text-[12px] italic text-[var(--color-muted)] leading-relaxed">
        280x in two years. Source, Stanford AI Index 2025.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────── */

export default function FoundationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="bg-[var(--color-surface)] pt-28 pb-16 md:pt-40 md:pb-24">
        <Container size="wide">
          <div className="max-w-[900px]">
            <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-5">
              For solo experts
            </span>
            <h1
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.035em] leading-[0.96]"
              style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}
            >
              AI, from the ground up.
            </h1>
            <p
              className="mt-7 font-sans text-[var(--color-body)] leading-relaxed max-w-[700px]"
              style={{ fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)" }}
            >
              A long-form explainer on AI, for people who have to make real
              decisions about it. Five parts in order: how language models
              work, why AI keeps getting better, the kinds of AI you meet
              today, where things are heading, and what each part means for
              a business.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 1. What AI is ──────────────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-16 items-center">
            <div className="md:col-span-5 md:order-2">
              <SectionLabel>What AI is</SectionLabel>
              <SectionHeadline>
                Most of what people call AI is one corner of a much older field.
              </SectionHeadline>
              <BodyProse>
                <p>
                  Artificial intelligence is the umbrella term, in use since
                  1956, for the project of building machines that do things we
                  associate with thinking. Machine learning is the subset of AI
                  where the system learns patterns from data instead of
                  following hand-written rules.
                </p>
                <p>
                  Deep learning is a subset of machine learning that uses
                  many-layered neural networks, the technique that started
                  winning everything around 2012. Large language models are a
                  recent slice of deep learning trained to work with text. The
                  chatbots and coding agents everyone talks about live in that
                  innermost ring.
                </p>
              </BodyProse>
            </div>

            <div className="md:col-span-7 md:order-1">
              <div className="rounded-2xl border border-[var(--color-hairline)] bg-white p-8 md:p-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ai-fundamentals/ai-hierarchy.svg"
                  alt="Nested-circle diagram showing machine learning as a subset of artificial intelligence."
                  width={520}
                  height={360}
                  className="w-full max-w-[520px] h-auto mx-auto"
                />
              </div>
              <Caption>
                Diagram, Lollixzc via Wikimedia Commons, CC BY-SA 4.0
              </Caption>
            </div>
          </div>
        </Container>
      </section>

      <Bridge>
        With the family tree settled, the next question is what the thing in
        the innermost ring is actually doing. The mechanism is simpler than the
        hype suggests, and everything else on this page rests on it.
      </Bridge>

      {/* ── 2. How AI works, next-token prediction ─────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-16 items-center">
            <div className="md:col-span-5">
              <SectionLabel>How a language model works</SectionLabel>
              <SectionHeadline>
                Underneath everything, it is just trained to predict the next
                word.
              </SectionHeadline>
              <BodyProse>
                <p>
                  Strip away the chrome and an LLM is doing one thing. Given a
                  stretch of text, it produces a probability over what comes
                  next, one token at a time. Token is the technical word for a
                  short chunk, usually a word or a piece of one.
                </p>
                <p>
                  Training is just this exercise repeated trillions of times
                  across the open internet, code, and books. The model adjusts
                  its internal weights until the predictions get good. Once it
                  is deployed, generation is the same operation in a loop, pick
                  a token, append it, repeat.
                </p>
                <p>
                  Everything you have seen a model do, answer questions, write
                  code, draft documents, reason through problems, is built on
                  top of that one task. Knowing this one fact changes how you
                  prompt.
                </p>
              </BodyProse>
            </div>

            <div className="md:col-span-7">
              <NextTokenVisual />
              <Caption>
                Illustrative probabilities, not from a specific model run.
              </Caption>
            </div>
          </div>
        </Container>
      </section>

      <Bridge>
        Predicting the next token tells a model what is plausible. It does
        not, on its own, tell the model what is good. That second step is a
        different kind of training entirely.
      </Bridge>

      {/* ── 2b. Reinforcement learning ─────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-16 items-center">
            <div className="md:col-span-5">
              <SectionLabel>Reinforcement learning</SectionLabel>
              <SectionHeadline>
                How models learn what good actually means.
              </SectionHeadline>
              <BodyProse>
                <p>
                  Reinforcement learning is training by trial and error. The
                  system tries something, the environment scores the result,
                  and the model nudges itself toward higher scores. Repeat at
                  scale. AlphaGo learned the game of Go this way. Robotics
                  uses it. Game-playing systems use it.
                </p>
                <p>
                  Where it shows up in language models is the step called
                  RLHF, reinforcement learning from human feedback. After a
                  model is pre-trained on raw text, it is fine-tuned with
                  human ratings, "this response is better than that one." That
                  stage is most of what makes a model feel like a helpful
                  assistant instead of a fancy autocomplete.
                </p>
                <p>
                  The newer reasoning models, the o1 family from OpenAI,
                  DeepSeek R1, Claude Sonnet 4.6, push this further. They use
                  RL on chains of thought themselves, learning not just what
                  answer to give but how to think through a problem. A lot of
                  the recent capability jumps come from there.
                </p>
              </BodyProse>
            </div>

            <div className="md:col-span-7">
              <RLLoop />
              <Caption>
                The RL loop: act, observe a reward, update the policy that
                chose the action.
              </Caption>
            </div>
          </div>
        </Container>
      </section>

      <Bridge>
        Whether it is pre-training or reinforcement learning, both steps
        depend on one thing the model has to be able to do first, turn words
        into something it can compare, add, and measure. That is what
        embeddings are.
      </Bridge>

      {/* ── 3. Vectorization ───────────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-16 items-center">
            <div className="md:col-span-5 md:order-2">
              <SectionLabel>Vectorization</SectionLabel>
              <SectionHeadline>
                Meaning becomes geometry.
              </SectionHeadline>
              <BodyProse>
                <p>
                  An embedding turns a word, a sentence, even an image, into a
                  list of numbers, a vector. The trick is in how those numbers
                  get assigned. A model is trained so that things with similar
                  meaning end up with similar numbers, which puts them close
                  together in a high-dimensional space.
                </p>
                <p>
                  Cat and kitten sit near each other. Cat and lawnmower do not.
                  The model does not work with letters or words directly, it
                  works with these vectors, and operations on them carry
                  meaning.
                </p>
                <p>
                  The famous demonstration came from Word2Vec, a Google paper in
                  2013. The vector for king minus the vector for man plus the
                  vector for woman lands very close to the vector for queen.
                  Meaning had become arithmetic. Search, recommendation,
                  retrieval, semantic deduplication, all of it runs on
                  embeddings underneath.
                </p>
              </BodyProse>
            </div>

            <div className="md:col-span-7 md:order-1">
              <div className="rounded-2xl border border-[var(--color-hairline)] bg-white p-8 md:p-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ai-fundamentals/word-embeddings.svg"
                  alt="Word embedding illustration showing related words plotted near each other in vector space."
                  width={520}
                  height={300}
                  className="w-full max-w-[520px] h-auto mx-auto"
                />
              </div>
              <Caption>
                Word embedding illustration, Fschwarzentruber via Wikimedia
                Commons, CC BY-SA 4.0
              </Caption>
            </div>
          </div>
        </Container>
      </section>

      <Bridge>
        Once meaning lives as geometry, the next question is whether bigger
        geometry, more numbers, more text, more compute, predictably makes a
        better model. The answer turns out to be unusually clean.
      </Bridge>

      {/* ── 4. Scaling laws ────────────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-16 items-center">
            <div className="md:col-span-5">
              <SectionLabel>Scaling laws</SectionLabel>
              <SectionHeadline>
                More data, more compute, more parameters, predictably better
                model.
              </SectionHeadline>
              <BodyProse>
                <p>
                  Scaling laws are an empirical observation, not a theorem.
                  Train many models at many sizes, plot the final loss against
                  parameters, data, and compute on a log-log axis, and the
                  points fall on a line. A line on a log-log plot is what a
                  power law looks like.
                </p>
                <p>
                  Jared Kaplan and colleagues at OpenAI documented this in 2020,
                  showing the relationship holds across more than seven orders
                  of magnitude. DeepMind's Chinchilla paper in 2022 refined it,
                  data and parameters should scale together, roughly twenty
                  training tokens per parameter is the compute-optimal ratio.
                  GPT-3 had been undertrained by that standard.
                </p>
                <p>
                  Architecture, data quality, and the optimizer all shift the
                  curve. None of them have flattened it. That predictability is
                  why frontier labs spend nine figures on training runs, the
                  outcome is calculable in advance.
                </p>
              </BodyProse>
            </div>

            <div className="md:col-span-7">
              <ScalingLawsVisual />
              <Caption>
                Illustrative. Curves from Kaplan et al. 2020 and Hoffmann et al.
                2022 (Chinchilla).
              </Caption>
            </div>
          </div>
        </Container>
      </section>

      <Bridge>
        Scale tells you why the curve keeps climbing. The next question is
        where the curve is actually pointing, and how far it has already gone.
      </Bridge>

      {/* ── 6. Where this is going ─────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-16 items-center">
            <div className="md:col-span-5">
              <SectionLabel>Where this is going</SectionLabel>
              <SectionHeadline>
                The capability curve has not turned over.
              </SectionHeadline>
              <BodyProse>
                <p>
                  Benchmarks created two and three years ago are saturating.
                  Models read images, audio, and code in the same forward pass.
                  Context windows have grown from a few thousand tokens to
                  hundreds of thousands. Agents now run for hours.
                </p>
                <p>
                  Stanford's AI Index and Epoch AI both track the trajectory.
                  Training compute has grown roughly four to five times per
                  year for over a decade. Work that feels impressive today is
                  on a known trajectory to being routine in eighteen months.
                  Planning around that curve is a real skill.
                </p>
              </BodyProse>
            </div>

            <div className="md:col-span-7">
              <CapabilityClimb />
              <Caption>
                Illustrative. Direction confirmed by Stanford AI Index and Epoch
                AI compute trends.
              </Caption>
            </div>
          </div>
        </Container>
      </section>

      <Bridge>
        Capability is one thing, what people actually build with it is another.
        The shape of AI in your day-to-day has moved through three rungs, and
        the third is starting to show up.
      </Bridge>

      {/* ── 5. Agents vs assistants ────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-28">
        <Container size="wide">
          <div className="max-w-[820px] mb-14 md:mb-16">
            <SectionLabel>Agents and assistants</SectionLabel>
            <SectionHeadline>
              Same model. Different shape around it.
            </SectionHeadline>
            <BodyProse>
              <p>
                An assistant is single-turn. You ask, it answers, you ask the
                next thing. You stay in the loop on every step. An agent wraps
                the same model in a loop with tools, files, and a terminal, and
                runs until the goal is met. The distinction is mechanical, not
                marketing.
              </p>
              <p>
                Most people meet AI as an assistant first. The work tends to
                move toward agents once the task is bigger than a single
                response, multi-file refactors, research with citations,
                end-to-end report generation.
              </p>
              <p>
                The agent loop itself is the reinforcement learning pattern in
                miniature. The model takes an action (a tool call, a file
                edit, a browser click), observes what happened, and updates
                its plan for the next step. Frontier agent systems, Claude
                Computer Use, OpenAI Operator, Claude Code, are also trained
                with RL on those interaction traces, so they get better at
                picking actions that actually move the task forward. The
                environment teaches them, the same way a game teaches AlphaGo.
              </p>
            </BodyProse>
          </div>

          <AgentAssistantCompare />
        </Container>
      </section>

      <Bridge>
        Multi-agent systems already coordinate at human speed. The open
        question is what happens when systems start coordinating to improve
        the systems themselves.
      </Bridge>

      {/* ── 7. Recursive self-improvement ──────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-16 items-center">
            <div className="md:col-span-5">
              <SectionLabel>Recursive self-improvement</SectionLabel>
              <SectionHeadline>
                A system that improves the process that produced it.
              </SectionHeadline>
              <BodyProse>
                <p>
                  In 1965, the British mathematician I.J. Good, who had worked
                  with Turing at Bletchley Park, wrote the original paper on
                  this idea. Machine design is an intellectual activity. A
                  machine better than humans at intellectual activities is, by
                  definition, better at designing machines. So it can design a
                  better version of itself, and that version can design a better
                  one still. Good called the result an intelligence explosion.
                </p>
                <p>
                  Current models do not do this in the strong sense. They are
                  trained, then deployed, they do not edit their own weights.
                  But model-generated training data, automated ML research, and
                  AI-assisted AI development are all real practices now, and
                  parts of the loop are starting to close.
                </p>
                <p>
                  Researchers disagree on the consequences. François Chollet
                  argues intelligence is bounded by the environment, so an
                  explosion is implausible. Others argue that even a modest
                  recursive effect compounds quickly enough to matter. The
                  debate is live and worth following.
                </p>
              </BodyProse>
            </div>

            <div className="md:col-span-7">
              <RSILoop />
              <Caption>
                Concept, I.J. Good, Speculations Concerning the First
                Ultraintelligent Machine, 1965.
              </Caption>
            </div>
          </div>
        </Container>
      </section>

      <Bridge>
        If that loop ever closes, the term most often used for what comes out
        the other side is superintelligence. The word does a lot of work, so
        it is worth defining cleanly.
      </Bridge>

      {/* ── 8. Superintelligence ───────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-16 items-center">
            <div className="md:col-span-5 md:order-2">
              <SectionLabel>Superintelligence</SectionLabel>
              <SectionHeadline>
                A working definition, not a science-fiction one.
              </SectionHeadline>
              <BodyProse>
                <p>
                  Nick Bostrom, in his 2014 book Superintelligence, defined the
                  term as any intellect that greatly exceeds the cognitive
                  performance of humans in virtually all domains of interest.
                  The everyday discussion uses a three-rung ladder.
                </p>
                <p>
                  Narrow AI handles one task, often better than people, image
                  classifiers, chess engines, today's models on specific
                  benchmarks. General AI matches humans across the full range
                  of cognitive work, which we do not have. Superintelligence
                  exceeds the best humans across virtually every domain.
                </p>
                <p>
                  Why people discuss this seriously: if intelligence is
                  something a machine can have, and capability has been moving
                  along a predictable curve, the question of what happens past
                  the human line is a real question. The argument is about
                  timelines and what to do about it, not whether the concept is
                  coherent.
                </p>
              </BodyProse>
            </div>

            <div className="md:col-span-7 md:order-1">
              <IntelligenceLadder />
              <Caption>
                Categories from Bostrom, Superintelligence, Oxford University
                Press, 2014.
              </Caption>
            </div>
          </div>
        </Container>
      </section>

      <Bridge>
        Whether or not we ever reach those rungs, the near-term implications
        for solo experts are the same. The short view is mostly about which
        parts of the work change first.
      </Bridge>

      {/* ── Part 5. Implications on business ──────────── */}
      <section className="bg-[var(--color-surface)] py-24 md:py-36">
        <Container size="wide">
          <div className="max-w-[920px] mb-16 md:mb-20">
            {/* Bigger eyebrow with accent rule for this major section break */}
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-[2px] w-10 bg-[var(--color-accent)]" />
              <span className="font-sans text-[12px] uppercase tracking-[0.24em] text-[var(--color-accent)] font-semibold">
                Implications on business
              </span>
            </div>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.025em] leading-[1.02]"
              style={{ fontSize: "clamp(2rem, 3.75vw, 3.25rem)" }}
            >
              The first-order question is no longer whether AI matters, it is
              which parts of the work change first.
            </h2>
            <BodyProse>
              <p>
                Adoption is no longer the story. McKinsey's 2025 State of AI
                survey puts the share of organizations using AI in at least one
                business function at 88%, up from 55% two years earlier.
                Stanford's AI Index reports the same direction with slightly
                different framing. The interesting questions have moved
                downstream, what changes, where, in what order, and who
                captures the value.
              </p>
            </BodyProse>
          </div>

          {/* Beat 2, the cost curve */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-16 items-center mb-24 md:mb-32">
            <div className="md:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-3">
                The cost curve
              </p>
              <h3
                className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
              >
                Some work is getting dramatically cheaper. Some isn't.
              </h3>
              <div className="mt-6 font-sans text-[var(--color-body)] leading-relaxed text-[17px] max-w-[560px] space-y-4">
                <p>
                  Inference cost for a GPT-3.5-class model fell from about $20
                  per million tokens in late 2022 to roughly $0.07 by late 2024,
                  a 280-fold drop in two years (Stanford AI Index, 2025). What
                  that buys: first-draft writing, summarization, basic
                  analysis, customer-support replies, boilerplate code. The
                  unit cost of producing that work is approaching zero.
                </p>
                <p>
                  What stays expensive looks different. Judgment under
                  ambiguity, taste, relationships with people who decide,
                  distribution, physical work outside controlled environments.
                  Those did not get cheaper, and the gap between cheap and
                  expensive work is widening.
                </p>
              </div>
            </div>
            <div className="md:col-span-7">
              <CostCurveStrip />
            </div>
          </div>

          {/* Beat 3, where capability compresses fastest */}
          <div className="max-w-[820px] mb-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-3">
              Where capability compresses fastest
            </p>
            <h3
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
            >
              The work that changes first is the work that was already mostly
              text.
            </h3>
            <p className="mt-6 font-sans text-[var(--color-body)] leading-relaxed text-[17px] max-w-[640px]">
              A Brynjolfsson, Li and Raymond field study at a Fortune 500
              software firm, 5,179 customer-support agents, found a 14%
              productivity lift on average and 34% for novices (QJE, 2025). A
              Harvard / BCG study of 758 consultants using GPT-4 measured 12.2%
              more tasks completed, 25.1% faster, and 40% higher quality
              (Dell'Acqua et al., 2023). The Eloundou et al. paper, GPTs are
              GPTs, estimates 80% of US workers have at least 10% of their
              tasks exposed to current models (Science, 2024).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24 md:mb-32 max-w-[1100px]">
            {[
              { area: "Legal research", note: "discovery, drafting, memos, contract review" },
              { area: "Marketing copy", note: "briefs, variants, ad iterations" },
              { area: "Internal docs", note: "policies, runbooks, onboarding" },
              { area: "Financial analysis", note: "models, summaries, deck prep" },
              { area: "Customer support", note: "tier-1 replies, triage, follow-up" },
              { area: "Technical support", note: "log triage, doc lookup, escalation" },
              { area: "Software engineering", note: "first-draft code, tests, review" },
              { area: "Sales operations", note: "outreach drafts, CRM hygiene" },
              { area: "Research synthesis", note: "literature review, summaries" },
            ].map((item) => (
              <div
                key={item.area}
                className="rounded-xl border border-[var(--color-hairline)] bg-white p-5"
              >
                <p className="font-sans text-[15px] font-semibold text-[var(--color-heading)] tracking-[-0.01em]">
                  {item.area}
                </p>
                <p className="mt-1.5 font-sans text-[13px] text-[var(--color-body)] leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          {/* Beat 4, data and workflows as moats */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-16 items-start mb-24 md:mb-32">
            <div className="md:col-span-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-3">
                Data and workflows as moats
              </p>
              <h3
                className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
              >
                Generic operations get the smallest boost. Proprietary data and
                specific workflows get the most.
              </h3>
              <div className="mt-6 font-sans text-[var(--color-body)] leading-relaxed text-[17px] max-w-[560px] space-y-4">
                <p>
                  The McKinsey 2025 survey is direct on this point. Adoption
                  sits near 90%, but only 39% of organizations attribute any
                  EBIT impact to AI, and among those most report under 5%.
                  Roughly 6% are capturing disproportionate value. The
                  difference is not the model. It is the data the model sees
                  and the workflow it sits inside.
                </p>
                <p>
                  A foundation model trained on the open internet is, by
                  definition, a commodity. Everything that makes a company
                  itself, the case histories, the playbooks, the operational
                  detail, the customer record, lives somewhere else. The
                  companies turning AI into margin are the ones bringing those
                  assets together.
                </p>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-bg)] p-7 md:p-9">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-5">
                  McKinsey State of AI, 2025
                </p>
                <div className="space-y-5">
                  <div>
                    <p
                      className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em]"
                      style={{ fontSize: "clamp(2rem, 3.4vw, 2.5rem)" }}
                    >
                      88%
                    </p>
                    <p className="mt-1 font-sans text-[14px] text-[var(--color-body)] leading-snug">
                      of organizations report using AI in at least one function.
                    </p>
                  </div>
                  <div className="border-t border-[var(--color-hairline)] pt-5">
                    <p
                      className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em]"
                      style={{ fontSize: "clamp(2rem, 3.4vw, 2.5rem)" }}
                    >
                      39%
                    </p>
                    <p className="mt-1 font-sans text-[14px] text-[var(--color-body)] leading-snug">
                      attribute any EBIT impact to AI. Most of them report
                      under 5%.
                    </p>
                  </div>
                  <div className="border-t border-[var(--color-hairline)] pt-5">
                    <p
                      className="font-sans font-semibold text-[var(--color-accent)] tracking-[-0.02em]"
                      style={{ fontSize: "clamp(2rem, 3.4vw, 2.5rem)" }}
                    >
                      6%
                    </p>
                    <p className="mt-1 font-sans text-[14px] text-[var(--color-body)] leading-snug">
                      are capturing disproportionate value. The rest are
                      experimenting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Beat 5, build vs buy vs adopt */}
          <div className="max-w-[820px] mb-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-3">
              Build, buy, or adopt
            </p>
            <h3
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
            style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
            >
              The new math has three options, not two.
            </h3>
            <p className="mt-6 font-sans text-[var(--color-body)] leading-relaxed text-[17px] max-w-[640px]">
              Adopt a foundation model off the shelf, the default for most
              functions, fastest to deploy, no moat. Fine-tune or wrap a
              foundation model on proprietary data, slower, real differentiation
              when the data is real. Build in-house, almost never the right
              answer outside frontier labs and a small number of
              data-rich incumbents. The honest question is rarely build versus
              buy, it is which of the three each workflow deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24 md:mb-32">
            {[
              {
                label: "Adopt",
                lede: "Use it as-is",
                body: "Foundation model via API or a polished assistant. Fastest path, lowest cost, no moat. The default for most knowledge work.",
                tone: "muted",
              },
              {
                label: "Fine-tune or wrap",
                lede: "Bring your data",
                body: "Retrieval, evals, fine-tuning on proprietary workflows. Slower to stand up, real differentiation when the data is real.",
                tone: "accent",
              },
              {
                label: "Build",
                lede: "Train your own",
                body: "Rare. Reserved for frontier labs and a small set of data-rich incumbents. Almost always the wrong answer.",
                tone: "muted",
              },
            ].map((o) => (
              <div
                key={o.label}
                className={`rounded-2xl border bg-white p-7 ${
                  o.tone === "accent"
                    ? "border-[var(--color-accent)]/60"
                    : "border-[var(--color-hairline)]"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`block w-2 h-2 rounded-full ${
                      o.tone === "accent"
                        ? "bg-[var(--color-accent)]"
                        : "bg-[var(--color-muted)]"
                    }`}
                  />
                  <p
                    className={`font-mono text-[10px] uppercase tracking-[0.22em] font-semibold ${
                      o.tone === "accent"
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-muted)]"
                    }`}
                  >
                    {o.label}
                  </p>
                </div>
                <h4 className="font-sans text-[18px] font-semibold text-[var(--color-heading)] tracking-[-0.01em] leading-tight">
                  {o.lede}
                </h4>
                <p className="mt-3 font-sans text-[14px] text-[var(--color-body)] leading-relaxed">
                  {o.body}
                </p>
              </div>
            ))}
          </div>

          {/* Beat 6, speed becomes the differentiator */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-16 items-center mb-24 md:mb-32">
            <div className="md:col-span-7 md:order-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-3">
                Speed is the new differentiator
              </p>
              <h3
                className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
              >
                When baseline capability is broadly available, execution speed
                is what compounds.
              </h3>
              <div className="mt-6 font-sans text-[var(--color-body)] leading-relaxed text-[17px] max-w-[640px] space-y-4">
                <p>
                  Every competitor has access to the same models. The
                  differentiator becomes the time from idea to shipped change,
                  the speed of internal iteration loops, and the willingness to
                  rebuild a workflow rather than bolt AI onto an old one. Cycle
                  time, not model choice, is where the gap opens.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 md:order-1">
              <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-bg)] p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-4">
                  What used to be a moat
                </p>
                <ul className="space-y-3 font-sans text-[14px] text-[var(--color-body)]">
                  <li className="flex items-baseline gap-3">
                    <span className="text-[var(--color-muted)] font-mono text-[11px]">→</span>
                    <span className="line-through opacity-60">access to a model</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="text-[var(--color-muted)] font-mono text-[11px]">→</span>
                    <span className="line-through opacity-60">a custom prompt</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="text-[var(--color-muted)] font-mono text-[11px]">→</span>
                    <span className="line-through opacity-60">an internal demo</span>
                  </li>
                </ul>
                <div className="my-5 h-px bg-[var(--color-hairline)]" />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-4 font-semibold">
                  What's actually a moat
                </p>
                <ul className="space-y-3 font-sans text-[14px] text-[var(--color-heading)]">
                  <li className="flex items-baseline gap-3">
                    <span className="text-[var(--color-accent)] font-mono text-[11px]">→</span>
                    <span>proprietary data with clean structure</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="text-[var(--color-accent)] font-mono text-[11px]">→</span>
                    <span>workflows rebuilt around the model</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="text-[var(--color-accent)] font-mono text-[11px]">→</span>
                    <span>iteration speed once a thing is in production</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Beat 7, headcount and skill mix */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-16 items-start mb-24 md:mb-32">
            <div className="md:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-3">
                Headcount and skill mix
              </p>
              <h3
                className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
              >
                The same team does what used to require many more people. The
                shape of the team changes too.
              </h3>
              <div className="mt-6 font-sans text-[var(--color-body)] leading-relaxed text-[17px] max-w-[640px] space-y-4">
                <p>
                  McKinsey's 2025 workforce work shows the number of US roles
                  requiring explicit AI fluency grew from roughly one million
                  in 2023 to seven million by 2025. Three-quarters of that
                  demand sits in computer, management, and business
                  operations. Hiring for entry-level programmers and analysts
                  has slowed, the exact tasks current models do well.
                </p>
                <p>
                  Entry-level work shifts away from rote first drafts and
                  toward review, judgment, and orchestration of model output.
                  Senior work shifts further toward taste, ambiguity, and
                  cross-functional decisions, the parts that did not get
                  cheaper. New roles, agent product managers, eval writers,
                  human-in-the-loop reviewers, are showing up on the org
                  chart.
                </p>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-[var(--color-hairline)] bg-white p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-5">
                  AI-fluent US roles
                </p>
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-sans font-semibold text-[var(--color-muted)] tracking-[-0.02em]"
                    style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}
                  >
                    1M
                  </span>
                  <span className="font-mono text-[11px] text-[var(--color-muted)]">2023</span>
                </div>
                <div className="my-3 flex items-center gap-2 text-[var(--color-accent)]">
                  <span className="block w-8 h-px bg-[var(--color-accent)]" />
                  <span className="font-mono text-[10px] tracking-[0.2em]">7x in two years</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-sans font-semibold text-[var(--color-accent)] tracking-[-0.02em]"
                    style={{ fontSize: "clamp(2.5rem, 4.4vw, 3.25rem)" }}
                  >
                    7M
                  </span>
                  <span className="font-mono text-[11px] text-[var(--color-muted)]">2025</span>
                </div>
                <p className="mt-5 font-sans text-[12px] italic text-[var(--color-muted)] leading-relaxed">
                  McKinsey, Agents, Robots and Us, 2025.
                </p>
              </div>
            </div>
          </div>

          {/* Beat 8, industries by exposure, the standout visual */}
          <div className="max-w-[820px] mb-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-3">
              Industries by exposure
            </p>
            <h3
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
            >
              Not every sector moves at the same speed.
            </h3>
            <p className="mt-6 font-sans text-[var(--color-body)] leading-relaxed text-[17px] max-w-[640px]">
              Exposure here means the approximate share of tasks within an
              industry that current models can already do well, synthesized
              across the Eloundou occupational study, Goldman Sachs exposure
              tables, and the Anthropic Economic Index of real Claude usage.
              The order is more stable than the exact numbers. Knowledge work
              with heavy text loads is at the top. Physical work in
              uncontrolled environments is at the bottom.
            </p>
          </div>

          <div className="mb-8">
            <IndustryExposureVisual />
            <Caption>
              Synthesis, Eloundou et al. (Science, 2024); Goldman Sachs,
              Briggs & Kodnani (2023); Anthropic Economic Index (2026).
              Approximate, not definitive.
            </Caption>
          </div>

          {/* Beat 9, time horizons */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-16 items-start mt-24 md:mt-32">
            <div className="md:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-3">
                Time horizons
              </p>
              <h3
                className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
              >
                What changes when.
              </h3>
              <p className="mt-6 font-sans text-[var(--color-body)] leading-relaxed text-[15px] max-w-[420px]">
                Forecasts compound quickly when capability is on a known curve.
                These are directional, not predictions.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-5">
                {[
                  {
                    span: "6 months",
                    body: "Most knowledge workers are using assistants daily. Agentic systems handle bounded multi-step tasks inside guarded workflows. Customer service and support already show measurable productivity lift in deployments.",
                  },
                  {
                    span: "2 years",
                    body: "Software engineering, marketing, legal research, and financial analysis run on agent-mediated pipelines as the default. Entry-level work composition changes materially. The companies in the 6% bucket pull further ahead on margin.",
                  },
                  {
                    span: "5 years",
                    body: "Industry structure shifts in the most exposed sectors. New roles and team shapes are normal. The relevant comparison stops being human vs AI and becomes human-plus-AI organization vs slower human-only organization.",
                  },
                ].map((h) => (
                  <div
                    key={h.span}
                    className="rounded-xl border border-[var(--color-hairline)] bg-[var(--color-bg)] p-6 md:p-7"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold">
                      {h.span}
                    </p>
                    <p className="mt-3 font-sans text-[15px] leading-relaxed text-[var(--color-body)]">
                      {h.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Hairline variant="full" />

      {/* ── 9. Interactive Timeline ────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-28">
        <Container size="wide">
          <div className="max-w-[820px] mb-14 md:mb-16">
            <SectionLabel>How we got here</SectionLabel>
            <SectionHeadline>
              Seventy years from a summer workshop to agents in production.
            </SectionHeadline>
            <p className="mt-6 font-sans text-[var(--color-body)] leading-relaxed text-[17px] max-w-[640px]">
              Click any year. The field has had booms, winters, and a long
              quiet middle. The recent acceleration only makes sense against
              the full arc.
            </p>
          </div>

          <Timeline />
        </Container>
      </section>

      {/* ── Closing CTA ────────────────────────────────── */}
      <section className="bg-[var(--color-surface)] py-24 md:py-32 border-t border-[var(--color-hairline)] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-20 bg-[var(--color-accent)]"
        />
        <Container size="prose">
          <div className="flex flex-col items-center text-center gap-8">
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.025em] leading-[1.02]"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              Want to talk through how this applies to your business?
            </h2>
            <SectionLead>
              We work with solo experts on what to build, what to buy, and what
              to ignore. Start with a call.
            </SectionLead>
            <Button href="/coaching" variant="filled" size="lg" arrow>
              Talk to us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
