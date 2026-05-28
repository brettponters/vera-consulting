import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SolutionLayout } from "../_components/SolutionLayout";

export const metadata: Metadata = {
  title: "AI Policy & Governance Consulting",
  description:
    "AI acceptable use policy and governance program for law firms, healthcare practices, financial advisors, and regulated South Florida businesses. Mapped to NIST AI RMF, ISO 42001, and the EU AI Act.",
  alternates: { canonical: "/solutions/policy" },
  openGraph: {
    title: "AI Policy & Governance | VERA",
    description:
      "Custom AI acceptable use policy, approval workflows, and audit trails. Mapped to NIST AI RMF, ISO 42001, EU AI Act, and Florida law.",
    type: "website",
    url: "https://veraconsulting.co/solutions/policy",
  },
};

const FAQ_ITEMS: Array<{ q: string; a: string }> = [
  {
    q: "What is an AI acceptable use policy?",
    a: "An AI acceptable use policy is a written document that defines which AI tools your business has approved, what data employees may put into those tools, what uses are prohibited, when a human has to review AI output before it goes to a client, and what happens when someone breaks the rules. It is the document your board, your insurer, and your regulator will ask for first.",
  },
  {
    q: "What should an AI policy include for a law firm or professional services business?",
    a: "A real AI policy for a professional services business covers sanctioned versus prohibited tools, client confidentiality and data classification, model output review requirements, billing and attribution rules for AI-assisted work, vendor and third-party AI clauses, training requirements, and an incident response process for hallucinations, data leaks, or biased outputs. Generic templates miss the parts that matter for regulated work.",
  },
  {
    q: "How is AI policy different from AI compliance and AI risk assessment?",
    a: "Policy is the rulebook your team follows day to day. Compliance is whether your AI use lines up with the laws and regulations that apply to your industry, covered on our /solutions/compliance page. Risk assessment is the technical review of how a specific AI system can fail and what that failure would cost you, covered on /solutions/risk. Most businesses need all three, in that order.",
  },
  {
    q: "Do I need an AI policy if my business only uses ChatGPT or Copilot a little?",
    a: "Yes. Insurers, enterprise clients, and regulators are now asking small and mid-sized businesses for written AI policies even when AI use is informal. Florida professional licensing boards, state bar associations, and HIPAA covered entities all expect documented oversight when AI touches client or patient data. The risk is not the volume of AI use. The risk is having no documented rules when something goes wrong.",
  },
  {
    q: "How long does it take to build an AI policy with VERA?",
    a: "A first complete draft usually takes two to three weeks. That covers a working session with your leadership team, a review of the tools and workflows already in use, a custom policy document, and one revision pass after your team reads the draft. Businesses that need full governance program rollout including training and audit cadence typically run six to eight weeks.",
  },
];

const FRAMEWORKS: Array<{ name: string; what: string }> = [
  {
    name: "NIST AI Risk Management Framework",
    what: "Voluntary US framework covering govern, map, measure, and manage functions. The baseline most US businesses align to.",
  },
  {
    name: "ISO/IEC 42001",
    what: "International standard for an AI management system. Audit-ready evidence structure for businesses that want certification or enterprise-client readiness.",
  },
  {
    name: "EU AI Act",
    what: "Risk-tiered obligations for any business with EU clients, users, or data subjects. Required even for US-based businesses with EU exposure.",
  },
  {
    name: "Florida Digital Bill of Rights and FIPA",
    what: "State data protection and breach rules that apply when AI tools process Florida resident data.",
  },
  {
    name: "HIPAA and HHS guidance",
    what: "Required for any healthcare practice using AI on PHI. Covers business associate agreements, minimum necessary rules, and breach reporting.",
  },
  {
    name: "SEC and FINRA guidance on AI",
    what: "Required for financial advisors and broker-dealers. Covers conflicts of interest, recordkeeping, and predictive data analytics rules.",
  },
  {
    name: "ABA Formal Opinion 512 and state bar guidance",
    what: "Required for law firms. Covers competence, confidentiality, supervision, candor, and reasonable fees for AI-assisted work.",
  },
  {
    name: "SOC 2 and ISO 27001 alignment",
    what: "For businesses that already maintain a security program, we map AI controls into the existing structure so you do not duplicate work.",
  },
];

const POLICY_CONTENTS: string[] = [
  "Scope, definitions, and which roles the policy applies to",
  "Approved AI tools and the data classification each tool can handle",
  "Prohibited tools and prohibited use cases, written specifically not vaguely",
  "Client confidentiality, privilege, and data residency rules",
  "Human review and approval requirements by use case and risk tier",
  "Logging, audit trail, and recordkeeping standards",
  "Vendor and third-party AI clauses for your contracts",
  "Training requirements and acknowledgment process for staff",
  "Incident response for hallucinations, data leaks, and biased outputs",
  "Enforcement, disciplinary process, and exception handling",
];

export default function PolicyPage() {
  return (
    <>
      <SolutionLayout
        currentSlug="policy"
        eyebrow="Solution · AI Policy"
        title="AI you can defend to your board, your insurer, and your clients."
        intro="A custom AI acceptable use policy and governance program for your business. Clear rules for which tools get used, which data they can touch, what gets reviewed, what gets logged, and what stays off-limits. Written for your industry's actual regulatory environment in Florida and mapped to the frameworks regulators and enterprise clients now expect, not a generic template you found online."
        forWho="General counsel, COOs, compliance officers, managing partners, and practice administrators at law firms, healthcare practices, financial advisors, real estate brokerages, and marketing agencies across Boca Raton, Delray Beach, Fort Lauderdale, Palm Beach County, and Broward County. Also: any business whose board, insurer, or enterprise client has started asking how AI use is governed."
        whatYouGet={[
          "Custom AI acceptable use policy document written for your industry and Florida regulatory environment",
          "Approval and review workflow that fits the way your business already operates",
          "Logging and audit trail recommendations with practical scope for your size",
          "Framework mapping to NIST AI RMF, ISO 42001, and the EU AI Act where applicable",
          "Talking points for client conversations, insurer questionnaires, and auditor questions",
          "One full revision pass after your leadership team reviews the draft",
        ]}
      />

      {/* ── WHAT IS INCLUDED IN THE POLICY ────────────── */}
      <section className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="max-w-[1080px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
              The policy document
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1] mb-6"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              What is inside the document we deliver.
            </h2>
            <p className="font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed mb-10 max-w-[760px]">
              A finished VERA AI policy is a working document your business can adopt, train against, and hand to an auditor. Not a marketing one-pager. Each section is written specifically for how your business operates, not boilerplate stamped across engagements.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3.5 list-none m-0 p-0 font-sans text-[var(--color-body)] text-base leading-relaxed">
              {POLICY_CONTENTS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[var(--color-accent)] shrink-0 leading-tight">
                    ·
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── FRAMEWORKS WE MAP TO ──────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24">
        <Container size="wide">
          <div className="max-w-[1080px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
              Frameworks we map to
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1] mb-6"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              The standards regulators and enterprise clients actually ask about.
            </h2>
            <p className="font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed mb-12 max-w-[760px]">
              Most businesses do not need to chase certification in every framework. They do need a policy that lines up with the one or two that apply to their industry, jurisdiction, and client base. We pick the right set with you, then write the policy so the mapping is explicit.
            </p>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 m-0 p-0">
              {FRAMEWORKS.map((f) => (
                <div key={f.name}>
                  <dt className="font-sans font-semibold text-[var(--color-heading)] text-base md:text-lg mb-2">
                    {f.name}
                  </dt>
                  <dd className="font-sans text-[var(--color-body)] text-sm md:text-base leading-relaxed m-0">
                    {f.what}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="font-sans text-[var(--color-muted)] text-sm leading-relaxed mt-12 max-w-[760px]">
              Need the regulatory mapping itself, not the policy? That work lives under{" "}
              <Link
                href="/solutions/compliance"
                className="text-[var(--color-accent)] hover:opacity-80 no-underline"
              >
                AI Compliance
              </Link>
              . Need to know how a specific AI system in your stack can fail? See{" "}
              <Link
                href="/solutions/risk"
                className="text-[var(--color-accent)] hover:opacity-80 no-underline"
              >
                AI Risk Assessment
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="max-w-[860px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
              Frequently asked
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1] mb-10"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Questions we hear from general counsel and operations leads.
            </h2>
            <dl className="space-y-10 m-0 p-0">
              {FAQ_ITEMS.map((item) => (
                <div key={item.q}>
                  <dt className="font-sans font-semibold text-[var(--color-heading)] text-lg md:text-xl mb-3 leading-snug">
                    {item.q}
                  </dt>
                  <dd className="font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed m-0">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            }),
          }}
        />
      </section>
    </>
  );
}
