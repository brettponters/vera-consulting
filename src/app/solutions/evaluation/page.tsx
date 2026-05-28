import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SolutionLayout } from "../_components/SolutionLayout";

export const metadata: Metadata = {
  title: "AI Evaluation Frameworks for Business Outcomes | VERA",
  description:
    "LLM evaluation frameworks tied to business outcomes. Golden datasets, regression tests, LLM-as-judge, online monitoring for South Florida businesses running AI.",
  alternates: { canonical: "/solutions/evaluation" },
  openGraph: {
    title: "AI Evaluation | VERA",
    description:
      "Custom eval criteria, golden datasets, regression suites, LLM-as-judge rubrics, and production monitoring tied to real business outcomes.",
    type: "website",
    url: "https://veraconsulting.co/solutions/evaluation",
  },
};

const FRAMEWORKS: { name: string; note: string }[] = [
  {
    name: "Promptfoo",
    note: "Open-source CI gating, model comparison, and red-team test suites.",
  },
  {
    name: "Braintrust",
    note: "Hosted platform for the full eval lifecycle: datasets, scoring, regression, production monitoring.",
  },
  {
    name: "LangSmith",
    note: "Tracing, prompt management, and online evals for teams in the LangChain ecosystem.",
  },
  {
    name: "DeepEval",
    note: "Open-source library with 50+ metrics, runs locally, fits cleanly into pytest workflows.",
  },
  {
    name: "RAGAS",
    note: "The standard for retrieval-augmented generation: faithfulness, context precision, answer relevancy.",
  },
  {
    name: "OpenAI Evals",
    note: "Reference framework when you are standardized on OpenAI models and want repeatable graded runs.",
  },
  {
    name: "Anthropic evals",
    note: "Claude-side scoring patterns and rubric design when Claude is the production model.",
  },
  {
    name: "Arize / Langfuse",
    note: "Production observability paired with offline evals for drift detection and quality alerts.",
  },
];

const WHAT_WE_MEASURE: { label: string; detail: string }[] = [
  {
    label: "Task accuracy",
    detail:
      "Did the system actually produce the right answer on cases that matter, scored against a curated golden dataset.",
  },
  {
    label: "Faithfulness and groundedness",
    detail:
      "For retrieval and document workflows, whether the output is supported by the source material instead of invented.",
  },
  {
    label: "Refusal appropriateness",
    detail:
      "The system says no when it should and answers when it should, instead of hedging on everything or hallucinating with confidence.",
  },
  {
    label: "Latency and cost",
    detail:
      "Per-request and per-workflow numbers, tracked over time, so quality wins do not quietly turn into margin losses.",
  },
  {
    label: "Business outcome correlation",
    detail:
      "Hours saved, conversion rate, intake throughput, error rate against the prior process. The numbers that justify the spend.",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the difference between evaluation and testing?",
    a: "Software testing checks deterministic behavior, given this input, you get this exact output. AI evaluation grades probabilistic behavior across a representative dataset, scoring quality on dimensions like accuracy, faithfulness, and refusal. You can pass every unit test and still have an AI workflow that produces bad answers most of the time. Evaluation is what tells you that.",
  },
  {
    q: "How is evaluation different from observability?",
    a: "Observability tells you what happened, traces, tokens, latency, errors. Evaluation tells you whether what happened was any good. Most teams stand up observability first because the dashboards look impressive, then realize they still cannot answer the only question that matters, is the AI producing the output we wanted. The two work together. Observability is the feed, evaluation is the scoring.",
  },
  {
    q: "Do you use LLM-as-judge?",
    a: "Yes, when it earns its place. LLM-as-judge is powerful for grading outputs at scale, but it is only useful if the judge agrees with human reviewers on a calibration set, the target is usually 75 to 90 percent agreement. We validate the judge against a hand-labeled sample before we trust it in production. For high-stakes work we keep humans in the loop on a sampled basis even after the judge is calibrated.",
  },
  {
    q: "How do you tie evaluation to business outcomes?",
    a: "We start from the outcome the work is supposed to produce, more booked consults, faster intake, fewer escalations, cleaner contracts, then work backward to the per-request signals that should correlate with it. The evaluation suite scores both. If accuracy is climbing but the business metric is flat, the eval is measuring the wrong thing and we revise it. The point is a system that earns its keep, not a dashboard.",
  },
  {
    q: "We are a South Florida business without an ML team. Is this for us?",
    a: "Yes. Most businesses this engagement is built for, across Boca Raton, Fort Lauderdale, and Palm Beach County, do not have a dedicated ML team. We build the eval framework, run the baseline, and hand over a monitoring setup your existing operations or IT lead can run. Quarterly review is included so you are not on your own with it.",
  },
];

export default function EvaluationPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SolutionLayout
        currentSlug="evaluation"
        eyebrow="Solution · AI Evaluation"
        title="Measure whether your AI actually works."
        intro="Most AI projects do not fail technically. They fail because nobody set up the measurements to know if they were working. We build evaluation frameworks that score your AI against business outcomes you care about, before launch, after launch, and quarter over quarter. Golden datasets, regression suites, LLM-as-judge where it fits, and monitoring that tells you when quality drifts. For businesses that have shipped AI and are not sure it is earning its keep, and for businesses about to ship that want measurement in from day one."
        forWho="Law firms, healthcare practices, financial advisors, real estate brokerages, and marketing agencies running AI in client-facing or revenue-critical work. Teams who have a deployed assistant, agent, or RAG system and cannot answer the question, is it actually good. Also: technical leaders at firms about to ship who want the eval in place before launch instead of bolted on six months later."
        whatYouGet={[
          "Custom evaluation criteria mapped to the business outcomes the AI is supposed to produce",
          "Curated golden dataset built from your real traffic and edge cases",
          "Automated test suite for regression, run on every prompt or model change",
          "Baseline scoring of current AI performance against the criteria",
          "LLM-as-judge rubrics calibrated against human reviewers where it earns its place",
          "Production monitoring or recurring report, whichever fits your team",
          "Quarterly review with prioritized recommendations for what to fix next",
        ]}
      />

      {/* ── WHAT WE MEASURE ────────────────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="max-w-[860px] mb-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
              What we measure
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1] mb-5"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              The metrics that actually predict whether AI is earning its keep.
            </h2>
            <p className="font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed max-w-[720px]">
              Vanity numbers are easy to produce and easy to ignore. We build eval suites around the handful of signals that actually correlate with the outcome you hired the AI to deliver.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 list-none m-0 p-0 max-w-[1080px]">
            {WHAT_WE_MEASURE.map((item) => (
              <li key={item.label}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] font-semibold mb-2">
                  {item.label}
                </p>
                <p className="font-sans text-[var(--color-body)] text-base leading-relaxed m-0">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── FRAMEWORKS AND TOOLS ───────────────────────────── */}
      <section className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="max-w-[860px] mb-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
              Frameworks and tools we work with
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1] mb-5"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Pick the right tool for the job, not the one the vendor pitched hardest.
            </h2>
            <p className="font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed max-w-[720px]">
              We are not loyal to one platform. The right stack depends on the workflow, the team, and whether the priority is regression gating, production monitoring, RAG quality, or red teaming.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7 list-none m-0 p-0 max-w-[1080px]">
            {FRAMEWORKS.map((tool) => (
              <li key={tool.name} className="flex gap-4">
                <span className="font-mono text-[var(--color-accent)] shrink-0 leading-tight pt-1">
                  ·
                </span>
                <div>
                  <p className="font-sans font-semibold text-[var(--color-heading)] text-base mb-1">
                    {tool.name}
                  </p>
                  <p className="font-sans text-[var(--color-body)] text-base leading-relaxed m-0">
                    {tool.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="max-w-[860px] mb-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
              Common questions
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              What people ask before starting an eval engagement.
            </h2>
          </div>
          <div className="max-w-[860px] divide-y divide-[var(--color-hairline)]">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group py-6 first:pt-0 last:pb-0"
              >
                <summary className="cursor-pointer list-none flex justify-between items-start gap-6">
                  <h3 className="font-sans font-semibold text-[var(--color-heading)] text-lg leading-snug m-0">
                    {faq.q}
                  </h3>
                  <span className="font-mono text-[var(--color-accent)] text-xl leading-none shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="font-sans text-[var(--color-body)] text-base leading-relaxed mt-4 max-w-[760px]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* ── RELATED ────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] py-16 md:py-20 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="max-w-[860px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
              Related work
            </p>
            <p className="font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed">
              Evaluation pairs with the work that creates the systems you are scoring. If you are deploying autonomous workflows, see{" "}
              <Link
                href="/solutions/agents"
                className="text-[var(--color-accent)] no-underline hover:opacity-80"
              >
                Custom AI Agents
              </Link>
              , every agent we ship comes with an eval framework you can run yourself. If the concern is what could go wrong, see{" "}
              <Link
                href="/solutions/risk"
                className="text-[var(--color-accent)] no-underline hover:opacity-80"
              >
                AI Risk Assessment
              </Link>
              , which scores failure modes by impact and tells you what to monitor.
            </p>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
