import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Button } from "@/components/ui/Button";

const CANONICAL_URL = "https://veraconsulting.co/locations/boynton-beach";

export const metadata: Metadata = {
  title: "AI Consulting in Boynton Beach, FL",
  description:
    "VERA helps Boynton Beach clinics, family-owned businesses, and light manufacturers adopt AI that's powerful, accountable, and built to last.",
  alternates: {
    canonical: "/locations/boynton-beach",
  },
  openGraph: {
    title: "AI Consulting in Boynton Beach, FL, VERA",
    description:
      "AI strategy and integration for Boynton Beach clinics, family businesses, and light manufacturers. Foundational work, done right from the start.",
    url: "/locations/boynton-beach",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting in Boynton Beach, FL, VERA",
    description:
      "AI strategy and integration for Boynton Beach clinics, family businesses, and light manufacturers.",
  },
};

const SERVICES = [
  {
    title: "Strategy",
    body:
      "We sit down with you and a few people who actually run the work, a practice manager, a shop foreman, a property lead, and figure out where AI earns its keep in a Boynton-sized operation, and where it doesn't belong yet.",
  },
  {
    title: "Integration",
    body:
      "We pair with whoever keeps your systems running, an in-house tech, a local MSP, a software vendor, and put AI into the tools you already use. Intake, scheduling, quoting, dispatch, billing. With guardrails and a paper trail.",
  },
  {
    title: "Foundation",
    body:
      "For a Boynton clinic or family business, governance means clear rules for what AI can touch, what gets logged, and what stays human. We write the policy in plain language and train the team that has to live with it.",
  },
];

const FAQS = [
  {
    q: "We're a smaller operation, is VERA right for us?",
    a: "Often, yes. A lot of our work is with teams between five and a hundred people, because that's the range where one bad AI decision actually matters. We scope the engagement to your size. A two-location dental practice doesn't need the same plan as a hospital system, and we won't sell you one. If you're better served by a $40/month tool and an afternoon of training, we'll tell you.",
  },
  {
    q: "Do you come on-site or work remotely?",
    a: "Both. Boynton Beach is a short drive for us, so initial discovery, leadership working sessions, and floor walk-throughs at a clinic or shop usually happen in person. Implementation and weekly check-ins are remote, which keeps the engagement affordable. If your operation is hands-on, light manufacturing, marine services, multi-family property work, being in the room matters and we plan for it.",
  },
  {
    q: "How long does an engagement take?",
    a: "A focused strategy engagement is typically four to eight weeks. A first integration, getting one real AI workflow into production with monitoring and documentation, usually runs two to three months on top of that. Foundation and team training continue from there. We don't sell open-ended retainers by default. Each phase has a defined scope, a deliverable you can point at, and a decision about whether to keep going.",
  },
  {
    q: "What does it cost?",
    a: "It depends on scope, and we won't pretend otherwise. A short strategy engagement for a single-location business looks very different from a governance build for a regional operator with regulated data. After a free first call we put a written scope and a fixed fee in front of you before any work starts. No hourly drift, no surprise change orders. If the right answer is smaller than you expected, we'll say that too.",
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
        "AI strategy, integration, and foundation consulting for Boynton Beach companies.",
      url: CANONICAL_URL,
      telephone: "+1-561-900-8182",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boynton Beach",
        addressRegion: "FL",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.5256,
        longitude: -80.0664,
      },
      areaServed: {
        "@type": "City",
        name: "Boynton Beach, FL",
      },
      serviceType: "AI Strategy, Integration, and Foundation Consulting",
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
          name: "Boynton Beach",
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

export default function BoyntonBeachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F5F4F1 30%, #F5F4F1 70%, #FFFFFF 100%)",
        }}
      >
        <Container size="wide" className="relative z-10">
          <div className="max-w-[820px]">
            <Eyebrow className="mb-6">Boynton Beach, Florida</Eyebrow>

            <h1
              className="font-sans font-bold text-[var(--color-heading)] leading-[1.04] tracking-[-0.025em] mb-8"
              style={{ fontSize: "clamp(2.25rem, 5.2vw, 4.25rem)" }}
            >
              AI consulting for Boynton Beach{" "}
              <span className="text-[var(--color-accent)]">
                clinics, shops, and family businesses.
              </span>
            </h1>

            <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[680px] mb-10">
              VERA is an AI strategy and integration practice working with
              owners and operators along the South Florida coast. Foundational
              work, done right from the start, so the tools you put in this
              year are still serving you in five.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/get-started" variant="filled" size="lg" arrow>
                Get started
              </Button>
              <Button href="/our-strategy" variant="ghost" size="md" arrow>
                See how we engage
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── WHY BOYNTON ─── */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <Eyebrow className="mb-5">The local stakes</Eyebrow>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-8">
              Why Boynton Beach businesses can&rsquo;t afford to do AI wrong.
            </h2>

            <div className="space-y-5 font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)]">
              <p>
                Boynton sits in a particular spot on the map. It&rsquo;s not
                Miami-scale enterprise and it&rsquo;s not a one-stoplight town.
                It&rsquo;s independent medical practices on Congress Avenue,
                family-owned retail off Federal Highway, fabrication shops in
                the Quantum corridor, property managers handling thousands of
                units across the Intracoastal, and contractors whose phones
                ring all day. None of these operators have the budget of a
                hospital system or the in-house AI team of a Fortune 500, but
                the AI vendors knocking on their doors quote the same prices
                anyway.
              </p>

              <p>
                That mismatch is where bad decisions get made. A clinic signs a
                three-year contract for an &ldquo;AI scribe&rdquo; that
                doesn&rsquo;t play well with its EMR. A property manager rolls
                out a chatbot that quietly mishandles maintenance escalations
                for two months before anyone notices. A shop pays for a
                forecasting tool sized for a national distributor when their
                whole operation runs out of one building off Industrial
                Avenue. Each one costs real money, real trust with patients or
                tenants or customers, and real time pulling it back out.
              </p>

              <p>
                Smaller operators have less margin for those mistakes, not
                more. There&rsquo;s no enterprise IT department to absorb the
                cleanup. The owner is also the person answering the phone at
                7pm. That&rsquo;s exactly why doing AI right from the start
                matters here, picking the small set of places where AI
                actually pays off, putting it in carefully, and writing down
                what it does so the next person who joins the team can pick
                it up.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[760px] mb-12 md:mb-14">
            <Eyebrow className="mb-5">What we do here</Eyebrow>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight">
              What VERA does for Boynton companies.
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
                  {service.body}
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
            <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-12">
              Questions Boynton businesses ask us.
            </h2>

            <div className="space-y-10">
              {FAQS.map((item, i) => (
                <div key={item.q}>
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)] shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-sans font-semibold text-xl md:text-2xl tracking-[-0.01em] text-[var(--color-heading)] leading-snug">
                      {item.q}
                    </h3>
                  </div>
                  <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] pl-[calc(0.75rem+1ch)] md:pl-10">
                    {item.a}
                  </p>
                  {i < FAQS.length - 1 && <Hairline className="mt-10" />}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-28 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[680px]">
            <Eyebrow className="mb-5">Start the conversation</Eyebrow>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] text-[var(--color-heading)] leading-[1.05] mb-6">
              Want to talk through your situation in Boynton?
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] mb-10">
              A first call is free. We&rsquo;ll listen, ask the kind of
              questions a careful operator would, and tell you honestly
              whether VERA is the right fit, or whether something simpler
              would serve you better.
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
