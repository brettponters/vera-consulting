import type { Metadata } from "next";
import Link from "next/link";
import { SolutionLayout } from "../_components/SolutionLayout";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "AI Risk Assessment & Red Teaming | VERA",
  description:
    "Find prompt injection, PII leaks, hallucinations, jailbreaks, and silent failures before they reach a client. Mapped to NIST AI RMF and OWASP LLM Top 10.",
  alternates: { canonical: "/solutions/risk" },
  openGraph: {
    title: "AI Risk Assessment & Red Teaming | VERA",
    description:
      "Hallucinations, prompt injection, PII leaks, biased outputs, silent failures. We score the risks, map them to NIST and OWASP, and tell you what to fix first.",
    type: "website",
    url: "https://veraconsulting.co/solutions/risk",
  },
};

const RISKS: { name: string; body: string }[] = [
  {
    name: "Prompt injection (direct and indirect)",
    body: "Attackers hide instructions inside documents, web pages, emails, or images your AI ingests. The model follows the hidden instructions instead of yours. We test direct chat injection plus the indirect variants that hit RAG pipelines, summarizers, and agents reading external content.",
  },
  {
    name: "Hallucinations and confident wrong answers",
    body: "Fabricated citations, invented case law, made-up policy numbers, wrong dosages, phantom client history. We probe the specific places your workflow is most likely to produce confident nonsense, then quantify how often it happens on real inputs from your domain.",
  },
  {
    name: "PII and sensitive data leakage",
    body: "Client names, account numbers, health records, and privileged communications surfacing in outputs they should not. Covers training data memorization, RAG context bleed, log exposure, and information leaking across user sessions or tenants.",
  },
  {
    name: "Jailbreaks and guardrail bypass",
    body: "Roleplay framings, obfuscated requests, multilingual attacks, and adversarial suffixes that get past your system prompt or content filters. Includes testing system prompt leakage, which OWASP flagged in 2025 as a widespread architectural failure.",
  },
  {
    name: "Bias and disparate impact",
    body: "Outputs that differ in quality or content based on protected characteristics, geography, language, or demographics inferred from the input. Especially relevant for hiring, lending, intake, triage, pricing, and any decision that touches a regulated process.",
  },
  {
    name: "Silent failures and quality drift",
    body: "The model returns something that looks fine but is subtly wrong, or its behavior shifts after a vendor update with no version notice. We set up checks that catch the failures nobody is currently watching for.",
  },
  {
    name: "Agent and tool-use abuse",
    body: "AI agents calling tools, writing files, or hitting APIs in ways the designer did not intend. Covers excessive agency, unsafe code execution, memory manipulation, and the new agentic attack techniques MITRE ATLAS added in 2025 and 2026.",
  },
  {
    name: "Model and supply chain risk",
    body: "Vendor model swaps, deprecated endpoints, untrusted third-party fine-tunes, malicious model weights from public hubs, and the prompt or plugin libraries your app pulls at runtime. We trace what is actually in your stack and where the trust boundaries are.",
  },
];

const FRAMEWORKS: { name: string; body: string }[] = [
  {
    name: "NIST AI Risk Management Framework",
    body: "Including the Generative AI Profile (NIST AI 600-1) for foundation models. Our deliverables map findings to the Govern, Map, Measure, and Manage functions so the output drops into your existing risk program.",
  },
  {
    name: "OWASP Top 10 for LLM Applications (2025)",
    body: "Coverage across prompt injection, sensitive information disclosure, supply chain, data and model poisoning, improper output handling, excessive agency, system prompt leakage, vector and embedding weaknesses, misinformation, and unbounded consumption.",
  },
  {
    name: "MITRE ATLAS",
    body: "Adversarial tactics and techniques specific to AI and ML systems, modeled after MITRE ATT&CK. We pull from the current 16 tactics and 80+ techniques, including the agentic AI additions, when scoping the red team plan.",
  },
  {
    name: "SR 11-7 model risk management",
    body: "For financial advisors, banks, and lenders. We align AI risk findings with the model risk lifecycle that examiners already expect, so AI work does not become a second, parallel governance problem.",
  },
];

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is the difference between an AI risk assessment and a regular security audit?",
    a: (
      <>
        A traditional security audit looks at infrastructure, identity,
        network, and application code. An AI risk assessment looks at the
        ways the model and the prompts can fail or be abused, which most
        security audits do not cover. Prompt injection, training data
        leakage, hallucination, agent misuse, and bias do not show up in a
        SOC 2 audit or a typical pen test. The two are complementary, not
        substitutes. If you also need regulator-facing documentation, see{" "}
        <Link
          href="/solutions/compliance"
          className="text-[var(--color-accent)] hover:opacity-80 no-underline"
        >
          AI Compliance
        </Link>
        .
      </>
    ),
  },
  {
    q: "Do you do AI red teaming?",
    a: (
      <>
        Yes. Red teaming is part of a full assessment. We run direct and
        indirect prompt injection, jailbreak attempts, data extraction
        probes, tool and agent abuse scenarios, and bias testing on real
        inputs from your domain. For systems already in production we
        focus on the realistic abuse paths a user, a third party, or a
        compromised document could take, rather than running every public
        attack in a library and handing you a noisy report.
      </>
    ),
  },
  {
    q: "How often should we re-assess?",
    a: (
      <>
        At minimum annually, and whenever something material changes. That
        includes a model version swap by your vendor, a new data source
        added to a RAG pipeline, a meaningful change in how the AI is used,
        a new agentic capability, or a regulatory change in your industry.
        Businesses running AI in high-stakes workflows typically pair the
        annual assessment with continuous evaluation, which is what{" "}
        <Link
          href="/solutions/evaluation"
          className="text-[var(--color-accent)] hover:opacity-80 no-underline"
        >
          AI Evaluation
        </Link>{" "}
        covers.
      </>
    ),
  },
  {
    q: "Which frameworks do you align with?",
    a: (
      <>
        NIST AI RMF and the Generative AI Profile, OWASP Top 10 for LLM
        Applications (2025), MITRE ATLAS for adversarial techniques, and
        SR 11-7 for financial businesses that already have a model risk
        program. We use these as scaffolding for findings, not as a
        checklist to read back to you. The deliverable is the prioritized
        fix list, with the framework citations attached so your auditor or
        in-house counsel can trace each finding.
      </>
    ),
  },
  {
    q: "We are not a regulated business. Do we still need this?",
    a: (
      <>
        If your AI touches a client, produces work product anyone relies
        on, or has access to private data, yes. Most of the failure modes
        we test for create reputational and contractual exposure even
        outside regulated industries. If the AI is purely internal and the
        worst case is an inconvenient day, it is reasonable to start with{" "}
        <Link
          href="/solutions/policy"
          className="text-[var(--color-accent)] hover:opacity-80 no-underline"
        >
          AI Policy
        </Link>{" "}
        and revisit a full assessment when usage grows.
      </>
    ),
  },
];

export default function RiskPage() {
  return (
    <>
      <SolutionLayout
        currentSlug="risk"
        eyebrow="Solution · AI Risk Assessment"
        title="Find AI failure modes before they reach a client."
        intro="Every AI system has ways it can go wrong. Hallucinated facts, prompt injection, leaked PII, biased outputs, silent failures, agent misuse. We assess your AI systems against the actual ways they fail, score impact and likelihood, and give you a prioritized list of what to fix, what to monitor, and what to accept. Findings map to NIST AI RMF, OWASP Top 10 for LLMs, and MITRE ATLAS so the output fits the risk program you already run."
        forWho="Businesses running AI in client-facing or high-stakes work where a failure could result in regulatory exposure, financial loss, or reputational damage. Especially relevant for systems built quickly before risk frameworks were considered, AI agents with tool access, and RAG pipelines pulling from documents the business does not fully control. Common buyers are the CTO, CISO, risk officer, or general counsel at South Florida law firms, healthcare practices, financial advisors, and real estate brokerages."
        whatYouGet={[
          "Risk inventory across your AI systems, models, prompts, and integrations",
          "Failure mode analysis with impact and likelihood scoring per finding",
          "Red team testing for prompt injection, jailbreaks, data leakage, and agent abuse",
          "Prioritized remediation roadmap with effort estimates and ownership",
          "Recommended monitoring, evaluation gates, and circuit breakers",
          "Findings mapped to NIST AI RMF, OWASP LLM Top 10, and MITRE ATLAS",
          "Re-assessment after 90 days to verify what was actually fixed",
        ]}
      />

      {/* ── COMMON AI RISKS WE TEST FOR ───────────────── */}
      <section className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
              Common AI risks we test for
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1] mb-10 max-w-[820px]"
              style={{ fontSize: "clamp(1.625rem, 2.6vw, 2.25rem)" }}
            >
              The specific ways your AI can fail, get attacked, or quietly drift.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-[1080px]">
            {RISKS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.04}>
                <div>
                  <h3 className="font-sans text-[var(--color-heading)] font-semibold text-lg md:text-xl leading-snug mb-3">
                    {r.name}
                  </h3>
                  <p className="font-sans text-[var(--color-body)] text-base leading-relaxed">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FRAMEWORKS WE ALIGN WITH ──────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-16 max-w-[1080px]">
            <div className="md:col-span-5">
              <Reveal>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
                  Frameworks we align with
                </p>
                <h2
                  className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
                  style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}
                >
                  Findings mapped to the standards your risk program already uses.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal delay={0.05}>
                <ul className="space-y-6 list-none m-0 p-0">
                  {FRAMEWORKS.map((f) => (
                    <li key={f.name}>
                      <p className="font-sans text-[var(--color-heading)] font-semibold text-base md:text-lg leading-snug mb-2">
                        {f.name}
                      </p>
                      <p className="font-sans text-[var(--color-body)] text-base leading-relaxed">
                        {f.body}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-[var(--color-muted)] text-sm md:text-base leading-relaxed mt-8 max-w-[560px]">
                  We use frameworks as scaffolding, not as a script. The
                  deliverable is the fix list, with citations attached so your
                  auditor, GC, or board can trace each finding back to a named
                  standard.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
              Frequently asked
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1] mb-12 max-w-[760px]"
              style={{ fontSize: "clamp(1.625rem, 2.6vw, 2.25rem)" }}
            >
              Questions risk officers and CISOs ask before an assessment.
            </h2>
          </Reveal>
          <div className="max-w-[820px] divide-y divide-[var(--color-hairline)]">
            {FAQS.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="py-7 first:pt-0">
                  <h3 className="font-sans text-[var(--color-heading)] font-semibold text-lg md:text-xl leading-snug mb-3">
                    {item.q}
                  </h3>
                  <p className="font-sans text-[var(--color-body)] text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="font-sans text-[var(--color-muted)] text-base leading-relaxed mt-12 max-w-[720px]">
              Most engagements pair the risk assessment with{" "}
              <Link
                href="/solutions/evaluation"
                className="text-[var(--color-accent)] hover:opacity-80 no-underline"
              >
                AI Evaluation
              </Link>{" "}
              for ongoing measurement, and with{" "}
              <Link
                href="/solutions/compliance"
                className="text-[var(--color-accent)] hover:opacity-80 no-underline"
              >
                AI Compliance
              </Link>{" "}
              or{" "}
              <Link
                href="/solutions/policy"
                className="text-[var(--color-accent)] hover:opacity-80 no-underline"
              >
                AI Policy
              </Link>{" "}
              when the gaps are governance, not technical.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
