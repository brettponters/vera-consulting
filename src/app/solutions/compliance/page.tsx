import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SolutionLayout } from "../_components/SolutionLayout";

export const metadata: Metadata = {
  title: "AI Compliance Consulting in South Florida | VERA",
  description:
    "AI compliance audits, regulatory mapping, and audit-ready documentation for South Florida law firms, healthcare practices, and financial advisors. NIST AI RMF, ISO 42001, HIPAA, EU AI Act.",
  alternates: { canonical: "/solutions/compliance" },
  openGraph: {
    title: "AI Compliance Consulting | VERA",
    description:
      "Audit your AI use, map it against the regulations that actually apply, and produce documentation a regulator can follow.",
    type: "website",
    url: "https://veraconsulting.co/solutions/compliance",
  },
};

const frameworks: { name: string; description: string }[] = [
  {
    name: "NIST AI Risk Management Framework (AI RMF 1.0)",
    description:
      "The US federal reference for AI governance. We map your AI use to the Govern, Map, Measure, and Manage functions so a regulator or auditor can see how you handle risk.",
  },
  {
    name: "ISO/IEC 42001:2023",
    description:
      "The international AI management system standard. Increasingly requested by enterprise procurement teams and insurers as a vendor qualification.",
  },
  {
    name: "EU AI Act (Regulation 2024/1689)",
    description:
      "Applies to any US business whose AI output is used in the EU. High-risk system obligations were originally set for August 2, 2026; high-risk timelines have since been pushed to December 2, 2027 pending Council confirmation. We tell you which articles apply to you and when.",
  },
  {
    name: "HIPAA Security Rule (45 CFR Part 164) and 2026 updates",
    description:
      "For any AI tool that touches PHI. Covers encryption, vulnerability scanning for AI infrastructure, BAA scope for AI vendors, and the 72-hour breach notification window.",
  },
  {
    name: "ABA Model Rules 1.1, 1.6, and 5.3 + Formal Opinion 512",
    description:
      "Competence, confidentiality, and supervision of non-lawyer assistance, applied to generative AI in law practice. Florida Rules of Professional Conduct mirror the model rules.",
  },
  {
    name: "SEC Marketing Rule, FINRA guidance, and SR 26-02",
    description:
      "For RIAs and broker-dealers. SR 26-02 (which superseded SR 11-7 in 2026) sets model risk management expectations now applied to AI and machine learning systems.",
  },
  {
    name: "Fair Housing Act + 2024 HUD AI guidance",
    description:
      "For real estate brokerages, property managers, and lenders. Tenant screening models, ad targeting, and pricing tools can create disparate impact liability even without intent.",
  },
  {
    name: "Florida data and consumer rules",
    description:
      "Florida Digital Bill of Rights (SB 262), Florida Information Protection Act (FIPA), and HB 919 (AI in political ads). Florida has no comprehensive AI statute today, so the compliance picture is a patchwork.",
  },
];

const industries: { name: string; summary: string }[] = [
  {
    name: "Law firms",
    summary:
      "AI tool inventory, ABA Formal Opinion 512 alignment, client-confidentiality controls, billing disclosure language, and a written use policy that holds up to a bar inquiry.",
  },
  {
    name: "Healthcare practices",
    summary:
      "BAA review for every AI vendor that touches PHI, scribe and intake-tool documentation, risk analysis under the HIPAA Security Rule, and the 72-hour breach posture for AI incidents.",
  },
  {
    name: "Financial advisors and RIAs",
    summary:
      "Model inventory under SR 26-02 principles, Marketing Rule review of AI-generated content, recordkeeping for AI-assisted communications, and exam-ready governance documentation.",
  },
  {
    name: "Real estate brokerages",
    summary:
      "Fair Housing review of AI tools used in screening, pricing, ad targeting, and lead routing. Vendor due diligence on tenant-screening and AVM models.",
  },
  {
    name: "Government contractors",
    summary:
      "AI use disclosure for federal procurement, NIST AI RMF alignment, and supply-chain documentation for AI components in deliverables.",
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "Does the EU AI Act apply to my US business?",
    answer:
      "It can. The EU AI Act applies to any provider or deployer whose AI output is used inside the EU, regardless of where the company sits. A South Florida business using an AI tool to screen EU candidates, serve EU clients, or produce output consumed in the EU is in scope. The original August 2, 2026 high-risk deadline has been deferred to December 2, 2027 pending final Council action, but documentation work should already be underway.",
  },
  {
    question: "How do I document AI use for HIPAA?",
    answer:
      "You need a written risk analysis covering each AI tool that touches PHI, a signed BAA with every AI vendor in that path, encryption and access controls that meet the updated Security Rule, and an incident-response plan that can meet the 72-hour AI breach notification window. We produce all of this in a format your privacy officer and an OCR auditor can both follow.",
  },
  {
    question: "What is the audit-trail standard for AI use?",
    answer:
      "There is no single federal standard, but the working consensus across NIST AI RMF, ISO 42001, SR 26-02, and sector regulators is: who used the tool, what data went in, what came out, what decision was made, who reviewed it, and when. We translate that into a logging plan that fits the tools you already run.",
  },
  {
    question: "Do I need ISO 42001 certification?",
    answer:
      "Most South Florida professional service businesses do not need to certify. But ISO 42001 is becoming a procurement requirement for vendors selling into healthcare systems, financial institutions, and the public sector. If your enterprise clients have started asking, we map your current state against ISO 42001 and tell you what a certification path would cost.",
  },
  {
    question: "Does Florida have an AI compliance law I need to follow?",
    answer:
      "Not a comprehensive one. SB 482, the proposed Florida AI Bill of Rights, died in March 2026. Florida businesses today are governed by the Florida Digital Bill of Rights (SB 262), the Florida Information Protection Act, sector-specific rules (Florida Bar, AHCA, OIR, FREC), and any out-of-state law that reaches them (EU AI Act, Colorado AI Act once enforcement resumes, NYC Local Law 144 for bias audits in hiring).",
  },
  {
    question: "What does an AI compliance engagement actually produce?",
    answer:
      "A written audit of every AI tool in use, a regulatory mapping document tied to your industry and the states you operate in, a gap analysis with prioritized remediation, a compliance checklist with a recurring review cadence, and the underlying documentation in a form a regulator or auditor can read without translation.",
  },
];

export default function CompliancePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <SolutionLayout
        currentSlug="compliance"
        eyebrow="Solution · AI Compliance"
        title="AI compliance for regulated businesses in South Florida."
        intro="AI use creates new compliance obligations under HIPAA, the SEC Marketing Rule, the Fair Housing Act, the Florida Bar's professional conduct rules, the EU AI Act, and emerging state laws. We audit your current AI use, map it against the regulations that actually apply to your business, and produce documentation a regulator or auditor can follow. Built for law firms, healthcare practices, financial advisors, and real estate brokerages across Palm Beach and Broward counties."
        forWho="General counsel, compliance officers, risk officers, managing partners, and practice administrators at South Florida businesses where AI use intersects with data privacy, fiduciary duty, client confidentiality, fair-housing rules, or sector-specific obligations. Especially law firms, healthcare practices, financial advisors, real estate brokerages, and government contractors."
        whatYouGet={[
          "Audit of every AI tool in current use across teams, vendors, and shadow deployments",
          "Regulatory mapping tied to your industry, jurisdictions, and client base",
          "Gap analysis with prioritized remediation, effort estimates, and owners",
          "Compliance checklist plus a recurring review cadence your team can run",
          "Audit-ready documentation packaged for regulator, auditor, insurer, or board review",
        ]}
      />

      {/* ── FRAMEWORKS WE MAP TO ──────────────────────── */}
      <section className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="max-w-[860px] mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-4">
              Frameworks we map to
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
            >
              The regulations and standards an AI compliance engagement actually pulls from.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-[1080px]">
            {frameworks.map((f) => (
              <div key={f.name}>
                <h3 className="font-sans font-semibold text-[var(--color-heading)] text-lg leading-snug mb-2">
                  {f.name}
                </h3>
                <p className="font-sans text-[var(--color-body)] text-base leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── INDUSTRIES WE FOCUS ON ────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24">
        <Container size="wide">
          <div className="max-w-[860px] mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-4">
              Industries we focus on
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
            >
              Regulated professional services across South Florida.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-16 max-w-[1080px]">
            {industries.map((i) => (
              <div key={i.name} className="md:col-span-6">
                <h3 className="font-sans font-semibold text-[var(--color-heading)] text-lg leading-snug mb-2">
                  {i.name}
                </h3>
                <p className="font-sans text-[var(--color-body)] text-base leading-relaxed">
                  {i.summary}
                </p>
              </div>
            ))}
          </div>
          <p className="font-sans text-[var(--color-body)] text-base leading-relaxed mt-12 max-w-[720px]">
            Compliance work pairs naturally with two adjacent engagements:{" "}
            <Link
              href="/solutions/policy"
              className="text-[var(--color-accent)] hover:opacity-80 transition-opacity"
            >
              AI policy
            </Link>{" "}
            (the written rules your team follows) and{" "}
            <Link
              href="/solutions/risk"
              className="text-[var(--color-accent)] hover:opacity-80 transition-opacity"
            >
              AI risk assessment
            </Link>{" "}
            (the failure modes you want to catch before a client does).
          </p>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="max-w-[860px] mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-4">
              Frequently asked
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
            >
              What compliance leads ask before they hire us.
            </h2>
          </div>
          <div className="max-w-[820px] divide-y divide-[var(--color-hairline)]">
            {faqs.map((f) => (
              <div key={f.question} className="py-7 first:pt-0 last:pb-0">
                <h3 className="font-sans font-semibold text-[var(--color-heading)] text-lg leading-snug mb-3">
                  {f.question}
                </h3>
                <p className="font-sans text-[var(--color-body)] text-base leading-relaxed">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>
    </>
  );
}
