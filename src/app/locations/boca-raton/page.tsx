import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Button } from "@/components/ui/Button";

const CANONICAL_PATH = "/locations/boca-raton";
const CANONICAL_URL = `https://veraconsulting.co${CANONICAL_PATH}`;

export const metadata: Metadata = {
  title: "AI Consulting in Boca Raton, FL",
  description:
    "VERA helps Boca Raton companies in healthcare, fintech, family offices, and professional services build AI strategy, integration, and coaching, done right from the start.",
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    title: "AI Consulting in Boca Raton, FL, VERA",
    description:
      "AI strategy, integration, and coaching for Boca Raton companies. Built right, not bolted on.",
    type: "website",
    url: CANONICAL_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting in Boca Raton, FL, VERA",
    description:
      "AI strategy, integration, and coaching for Boca Raton companies. Built right, not bolted on.",
  },
};

const PILLARS = [
  {
    title: "Strategy",
    body:
      "We start by understanding the business the way a Boca operator does: regulated, relationship-driven, allergic to risk that wasn't priced in. Then we map where AI genuinely earns its keep, and where it's a distraction sold in a slide deck. You leave with a plan your team can defend in a board meeting and execute on a Monday.",
  },
  {
    title: "Integration",
    body:
      "Plans don't ship value; systems do. We work alongside your engineers, RevOps, and operations staff to put AI into the workflows that move the business, intake, underwriting review, client communications, reporting. Guardrails, logging, evals, and documentation aren't extras. They're how it survives an audit, a turnover, or a bad day.",
  },
  {
    title: "Coaching",
    body:
      "1:1 AI fluency for Boca executives and leadership teams. Hands-on, weekly sessions paired to what your business actually does, so by the end of the engagement you can evaluate tools, set policy, and run the AI conversation in your own boardroom.",
  },
];

const FAQS = [
  {
    q: "Do you work on-site or remotely?",
    a: "Both. For Boca Raton clients we're regularly on-site for discovery, executive workshops, and integration sprints, being in the room with operations, legal, and engineering at the same time is usually how the real constraints surface. Most build work happens remotely after that, with weekly working sessions. If your organization needs a steady on-site cadence, we'll scope it in from day one rather than treat travel as a surprise line item.",
  },
  {
    q: "Do you work with healthcare, fintech, or family offices?",
    a: "Yes, those are the sectors we're built for. Each has its own pressure: HIPAA and clinical accuracy in healthcare, SEC, FINRA, and model risk expectations in financial services, and discretion plus multi-entity complexity in family offices. We don't treat them as the same engagement. We adapt the diligence depth, the data handling posture, and the governance documentation to what your regulators, auditors, and principals actually expect.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "Engagements scope anywhere from a two-week diagnostic, where we pressure-test an existing AI initiative or map the highest-impact opportunities, to multi-month integration work where we're building, evaluating, and handing off production systems with your team. We'd rather scope a short, honest first phase than sell a long retainer up front. If we can't help, we'll say so and recommend someone who can.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on scope, sector, and how much we're building versus advising. A focused diagnostic looks very different from a quarter-long integration with engineering hours and governance deliverables. We share a fixed-fee proposal after a discovery conversation so you see the full number, the deliverables, and the assumptions in writing, no hourly meter, no surprise change orders. If the budget and the problem don't line up, we'll tell you that directly.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${CANONICAL_URL}#business`,
      name: "VERA Consulting",
      description:
        "AI strategy, integration, and coaching for Boca Raton companies.",
      url: CANONICAL_URL,
      telephone: "+1-561-900-8182",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boca Raton",
        addressRegion: "FL",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.3683,
        longitude: -80.1289,
      },
      areaServed: {
        "@type": "City",
        name: "Boca Raton, FL",
      },
      serviceType: "AI Strategy, Integration, and Coaching Consulting",
      parentOrganization: { "@id": "https://veraconsulting.co/#org" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://veraconsulting.co/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://veraconsulting.co/locations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Boca Raton",
          item: CANONICAL_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function BocaRatonPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F5F4F1 25%, #F5F4F1 75%, #FFFFFF 100%)",
        }}
      >
        <Container size="wide" className="relative z-10">
          <div className="max-w-[820px]">
            <Eyebrow className="mb-5">Boca Raton, Florida</Eyebrow>
            <h1
              className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-10"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              AI consulting for Boca Raton companies that can&rsquo;t afford
              to get it wrong.
            </h1>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[680px] mb-10">
              VERA is an AI strategy and integration practice working with
              healthcare networks, financial services, family offices, and
              professional services across South Florida. We build it right
              from the start, not bolted on after something breaks.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/get-started" variant="filled" size="lg" arrow>
                Start the conversation
              </Button>
              <Button href="/our-strategy" variant="ghost" size="lg" arrow>
                See how we engage
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Boca section */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <Eyebrow className="mb-5">Why it matters here</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-8">
              Why Boca Raton businesses can&rsquo;t afford to do AI wrong.
            </h2>

            <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)]">
              <p>
                Boca Raton is unusually concentrated. Within fifteen minutes of
                Mizner Park you can sit with a hospital system, a multi-billion
                fintech, a discretionary family office, a luxury developer,
                and a regional law firm, and every one of them is being sold
                AI. Most of what&rsquo;s on offer is the same demo, repackaged.
                The cost of buying the wrong version is what makes this town
                different.
              </p>
              <p>
                In healthcare, Boca Regional, the Cleveland Clinic Florida
                campus, and the specialty practices feeding them, a sloppy
                AI rollout means PHI in places it shouldn&rsquo;t be, clinical
                summaries the chart can&rsquo;t support, and a HIPAA exposure
                that didn&rsquo;t exist before. The risk isn&rsquo;t
                hypothetical; it&rsquo;s the next audit.
              </p>
              <p>
                In fintech and wealth management, the corridor running from
                Yamato Road through the Park of Commerce, the failure mode is
                quieter. An advisor pastes client data into a public model,
                a marketing team ships generated content the compliance team
                never saw, an underwriting workflow starts producing decisions
                no one can explain to the SEC. By the time anyone notices, the
                paper trail is already a problem.
              </p>
              <p>
                Family offices have a different version of the same exposure:
                a single principal&rsquo;s data, scattered across entities,
                being processed by tools the IT vendor onboarded without
                anyone in the family signing off. Professional services
                businesses run the privilege risk, generated work product
                that references the wrong matter, or worse, the wrong client.
              </p>
              <p>
                None of this is a reason to avoid AI. It&rsquo;s a reason to
                deploy it on purpose, with the documentation, evaluation, and
                guardrails that match what your regulators, clients, and
                principals actually expect from a serious operator.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What we do, three pillars */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[760px] mb-12 md:mb-16">
            <Eyebrow className="mb-5">What we do</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight">
              What VERA does for Boca companies.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 md:p-8 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-bg)] h-full"
              >
                <h3 className="font-sans font-semibold text-lg text-[var(--color-heading)] mb-3">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[var(--color-body)]">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <Eyebrow className="mb-5">FAQ</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-10">
              Questions Boca businesses ask us.
            </h2>

            <div className="space-y-10">
              {FAQS.map((item, i) => (
                <div key={item.q}>
                  <h3 className="font-sans font-semibold text-lg md:text-xl text-[var(--color-heading)] tracking-[-0.01em] mb-3">
                    {item.q}
                  </h3>
                  <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                    {item.a}
                  </p>
                  {i < FAQS.length - 1 && <Hairline className="mt-10" />}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        aria-label="Get started"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <Container size="prose">
          <div className="flex flex-col items-center text-center gap-8">
            <Eyebrow>Boca Raton, FL</Eyebrow>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
            >
              Want to talk through your situation?
            </h2>
            <p className="font-sans text-[var(--color-body)] text-lg leading-relaxed max-w-prose">
              30 minutes. We&rsquo;ll walk through where you are, where AI
              might fit, and whether VERA is the right partner. No deck, no
              pitch.
            </p>
            <Button href="/get-started" variant="filled" size="lg" arrow>
              Start the conversation
            </Button>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
