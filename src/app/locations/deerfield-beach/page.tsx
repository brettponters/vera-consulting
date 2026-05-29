import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Button } from "@/components/ui/Button";

const CANONICAL_URL = "https://veraconsulting.co/locations/deerfield-beach";

export const metadata: Metadata = {
  title: "AI Consulting in Deerfield Beach, FL",
  description:
    "VERA helps Deerfield Beach logistics, light industrial, and SMB operators put AI to work the right way, foundational, accountable, built to last from day one.",
  alternates: {
    canonical: "/locations/deerfield-beach",
  },
  openGraph: {
    title: "AI Consulting in Deerfield Beach, FL, VERA",
    description:
      "AI strategy and integration for Deerfield Beach operators, logistics, distribution, marine, hospitality, and SMB. Built right from the start.",
    url: "/locations/deerfield-beach",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting in Deerfield Beach, FL, VERA",
    description:
      "AI strategy and integration for Deerfield Beach operators. Foundational, accountable, designed to last.",
  },
};

const SERVICES = [
  {
    title: "Strategy",
    description:
      "We map where AI actually fits in your operation, inventory, dispatch, quoting, customer service, and where it doesn't. Scoped to the team and systems you already have in Deerfield, not a stack you'd have to hire around.",
  },
  {
    title: "Integration",
    description:
      "Hands-on implementation alongside your people. We connect AI into the warehouse software, the booking system, the spreadsheets that actually run the business. Guardrails, monitoring, and documentation are part of the work, not a phase-two promise.",
  },
  {
    title: "Coaching",
    description:
      "1:1 AI fluency for Deerfield Beach executives and leadership teams. Hands-on, weekly sessions paired to what your business actually does, so by the end of the engagement you can evaluate tools, set policy, and run the AI conversation in your own boardroom.",
  },
];

const FAQS = [
  {
    q: "We're not a tech company, can AI even help us?",
    a: "Yes, and usually more than tech companies. A logistics dispatcher, a marine service shop, an oceanfront hotel, these businesses generate enormous amounts of operational data that nobody is using. AI tends to be most valuable where the wins are unglamorous: faster quotes, fewer scheduling mistakes, less time copying numbers between systems. We start by understanding how your business actually runs, then figure out the smallest useful place to introduce AI. If the answer is 'not yet,' we'll tell you that too.",
  },
  {
    q: "Do you work with logistics / SMB / industrial businesses?",
    a: "Yes. Deerfield Beach is dense with distribution, light industrial, marine, and professional services operators, and most of them face the same problem: AI tools are being sold to them faster than they can evaluate them. We work across those categories. Our job is to be the technical person in the room who reads the contracts, understands the models, and tells you whether a vendor's pitch matches what the system actually does. Industry-specific tooling matters less than getting the foundation right.",
  },
  {
    q: "How long does an engagement take?",
    a: "It depends on what you're trying to do. A focused assessment, what AI fits, what to avoid, what to budget, is usually a few weeks. Putting a single integration into production with proper guardrails and documentation is typically a couple of months. Standing up governance across a multi-site operation runs longer. We're upfront about scope before we start, and we'd rather finish one thing well than open three workstreams that all stall.",
  },
  {
    q: "What does it cost?",
    a: "We don't post fixed prices because the work isn't fixed. A short strategy engagement looks very different from embedding alongside your engineers for a quarter. What we will do on a first call: scope honestly, give you a realistic range, and tell you if a smaller engagement or a different team would serve you better. We'd rather lose the deal than oversell something that won't hold up.",
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
        "AI strategy, integration, and coaching for Deerfield Beach companies.",
      url: CANONICAL_URL,
      telephone: "+1-561-900-8182",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Deerfield Beach",
        addressRegion: "FL",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.3184,
        longitude: -80.0998,
      },
      areaServed: {
        "@type": "City",
        name: "Deerfield Beach, FL",
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
          name: "Deerfield Beach",
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

export default function DeerfieldBeachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F5F4F1 25%, #F5F4F1 75%, #FFFFFF 100%)",
        }}
      >
        <Container size="wide" className="relative z-10">
          <div className="max-w-[820px]">
            <Eyebrow className="mb-5">Deerfield Beach, Florida</Eyebrow>

            <h1
              className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-10"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              AI consulting for Deerfield Beach operators, built right from
              the start.
            </h1>

            <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[680px]">
              VERA works with Deerfield&rsquo;s logistics, light industrial,
              marine, and small-to-mid businesses to put AI to work where it
              actually pays back, and to keep it out of the places it
              doesn&rsquo;t. Foundational, hands-on, education first.
            </p>

            <div className="mt-10">
              <Button href="/get-started" variant="filled" size="lg" arrow>
                Get started
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── WHY DEERFIELD ─── */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <Eyebrow className="mb-5">Why it matters here</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-8">
              Why Deerfield Beach businesses need AI built right.
            </h2>

            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] mb-5">
              Deerfield Beach runs on operations. The I-95 corridor moves
              freight south to Miami and north toward the Port; distribution
              centers, light industrial yards, and marine service shops
              cluster around it. The Cove and the oceanfront keep hospitality
              busy year-round. Behind all of that is a layer of
              professional-services businesses and family-run SMBs that quietly
              keep everything moving.
            </p>

            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] mb-5">
              That mix is exactly where AI is being sold the hardest right
              now, and where the wrong choice costs the most. An inventory
              model that hallucinates stock levels turns into a real shortage.
              A scheduling assistant that double-books trucks turns into
              missed windows and unhappy customers. A pricing tool tuned on
              the wrong data quietly bleeds margin for a year before anyone
              notices. The damage doesn&rsquo;t look like a software bug. It
              looks like operations getting worse for reasons nobody can
              explain.
            </p>

            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)]">
              That&rsquo;s why we lead with the foundation. Before any model
              gets touched, we want to know how your business actually
              works, what data you can trust, and which decisions are too
              important to hand over without a human on the other end. The
              goal isn&rsquo;t to install AI somewhere. The goal is to give
              you tools you can keep, in a form your team can maintain
              after we&rsquo;re gone. That&rsquo;s what &ldquo;built right
              from the start&rdquo; means in practice, not bolted on as a
              feature, but designed into how the operation runs.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[760px] mb-10">
            <Eyebrow className="mb-5">Our work</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight">
              What VERA does for Deerfield companies.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="p-6 md:p-8 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-bg)] h-full"
              >
                <h3 className="font-sans font-semibold text-lg text-[var(--color-heading)] mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[var(--color-body)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[820px]">
            <Eyebrow className="mb-5">Common questions</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-10">
              Questions Deerfield businesses ask us.
            </h2>

            <div className="space-y-8">
              {FAQS.map((item, i) => (
                <div key={item.q}>
                  <h3 className="font-sans font-semibold text-base md:text-lg text-[var(--color-heading)] mb-3">
                    {item.q}
                  </h3>
                  <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                    {item.a}
                  </p>
                  {i < FAQS.length - 1 && <Hairline className="mt-8" />}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[640px]">
            <Eyebrow className="mb-5">Start the conversation</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-6">
              Want to talk through your situation?
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] mb-8">
              Book a short call and we&rsquo;ll walk through where AI fits in
              your Deerfield operation, and where it doesn&rsquo;t. No
              pitch deck, no pressure.
            </p>
            <Button href="/get-started" variant="filled" size="lg" arrow>
              Get started
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
