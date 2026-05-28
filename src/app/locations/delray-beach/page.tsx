import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Button } from "@/components/ui/Button";

const CANONICAL_URL = "https://veraconsulting.co/locations/delray-beach";

export const metadata: Metadata = {
  title: "AI Consulting in Delray Beach, FL",
  description:
    "VERA helps Delray Beach businesses, from Atlantic Avenue boutiques to family offices and creative agencies, adopt AI that's built right, not bolted on.",
  alternates: {
    canonical: "/locations/delray-beach",
  },
  openGraph: {
    title: "AI Consulting in Delray Beach, FL, VERA",
    description:
      "AI strategy and integration for Delray Beach independent businesses, hospitality, real estate, family offices, and creative agencies. Built right, not bolted on.",
    url: "/locations/delray-beach",
    type: "website",
    locale: "en_US",
    siteName: "VERA",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting in Delray Beach, FL, VERA",
    description:
      "AI strategy and integration for Delray Beach businesses. Foundational AI done right from the start.",
  },
};

const SERVICES = [
  {
    title: "Strategy",
    description:
      "We figure out where AI actually fits in your Delray business, and just as importantly, where it doesn't. Scoped to what your team can run after we leave.",
  },
  {
    title: "Integration",
    description:
      "We work alongside your operators or your existing tech partners to put AI into the workflows that matter, intake, ops, content, client service, with guardrails and documentation.",
  },
  {
    title: "Coaching",
    description:
      "1:1 AI fluency for Delray Beach executives and leadership teams. Hands-on, weekly sessions paired to what your business actually does, so by the end of the engagement you can evaluate tools, set policy, and run the AI conversation in your own boardroom.",
  },
];

const FAQS = [
  {
    q: "Do you work with small businesses or just enterprises?",
    a: "Both. A lot of our Delray Beach engagements are with independent businesses, boutique professional services businesses, and family offices, places where one well-chosen AI workflow can change the math on a whole department. We size the engagement to the company, not the other way around. If you're a five-person shop on Atlantic Avenue, you don't need an enterprise rollout. You need someone who'll be honest about what's worth doing.",
  },
  {
    q: "Do you work on-site or remotely?",
    a: "Both. VERA is built around senior, hands-on work, and for South Florida clients that often means a mix, kickoff and key working sessions in person in Delray Beach or the surrounding area, then most of the build remote. If you're a Delray-based client and the engagement calls for time on the ground, we plan for it. We don't do drive-by consulting; if we're working with you, we're actually working with you.",
  },
  {
    q: "How long does an engagement take?",
    a: "It depends on what you're trying to do. A focused strategy engagement, where we map your workflows, identify where AI helps and where it doesn't, and hand you a plan, is typically a few weeks. An integration where we're actually building and deploying systems alongside your team runs longer. We scope the work before we sign anything, so you know what you're committing to and what you're getting.",
  },
  {
    q: "What does it cost?",
    a: "We don't publish pricing because it's not honest to. An afternoon of advisory looks nothing like a full strategy plus integration. After a first call we send a scoped proposal with a fixed price or a clear range. If the work doesn't make economic sense for your situation, we'll tell you, that's part of being a Public Benefit Corporation. We'd rather not take the engagement than take one that won't pay off.",
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
        "AI strategy, integration, and coaching for Delray Beach companies.",
      url: CANONICAL_URL,
      telephone: "+1-561-900-8182",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delray Beach",
        addressRegion: "FL",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.4615,
        longitude: -80.0728,
      },
      areaServed: {
        "@type": "City",
        name: "Delray Beach, FL",
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
          name: "Delray Beach",
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

export default function DelrayBeachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #FAFAF7 30%, #FAFAF7 70%, #FFFFFF 100%)",
        }}
      >
        <Container size="wide" className="relative z-10">
          <div className="max-w-[820px]">
            <Eyebrow className="mb-5">Delray Beach, Florida</Eyebrow>

            <h1
              className="font-sans font-bold text-[var(--color-heading)] leading-[1.05] tracking-[-0.02em] mb-8"
              style={{ fontSize: "clamp(2.25rem, 5.2vw, 4rem)" }}
            >
              AI consulting for Delray Beach businesses that want to build it
              right the first time.
            </h1>

            <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[680px]">
              VERA is a Public Benefit Corporation helping independent
              businesses, professional services businesses, and family offices in Delray
              Beach adopt AI that&rsquo;s powerful, accountable, and designed
              to last. Built right, not bolted on.
            </p>

            <div className="mt-10">
              <Button href="/get-started" variant="filled" size="lg" arrow>
                Get started
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY DELRAY */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <Eyebrow className="mb-4">Why it matters here</Eyebrow>

            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight mb-8"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              Why Delray Beach businesses need to do AI right.
            </h2>

            <div className="space-y-5 font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)]">
              <p>
                Delray Beach runs on independent businesses. The boutiques and
                restaurants along Atlantic Avenue, the design firms tucked into
                Pineapple Grove, the real-estate teams quietly moving
                eight-figure inventory east of the Intracoastal, the family
                offices and wealth advisors serving second-home owners, these
                are operations where one person&rsquo;s judgment still shapes
                most of the day. That&rsquo;s an asset. It&rsquo;s also
                exactly the kind of business where badly-implemented AI causes
                the most damage.
              </p>

              <p>
                The temptation right now is to grab a ChatGPT seat, point it
                at a workflow, and call it modernization. We see it constantly
                in South Florida. A hospitality group automates guest replies
                and starts quoting wrong rates. A boutique agency pastes
                client strategy into a public model. A family office lets
                someone&rsquo;s assistant draft sensitive comms in a tool no
                one has reviewed. Each of those is fixable. None of them
                should have happened.
              </p>

              <p>
                Doing AI right in a small or mid-sized business doesn&rsquo;t
                mean spending more. It usually means spending less, on fewer
                things, with someone in the room who has read the research
                and shipped the systems. Pick the workflows that genuinely
                benefit. Wire them into your tools without giving away your
                data. Document what the model does and what it doesn&rsquo;t.
                Train the people who use it daily. That&rsquo;s the work.
                It&rsquo;s less glamorous than a launch announcement and far
                more durable.
              </p>

              <p>
                We&rsquo;re a small, senior practice. We work with Delray
                companies that want a real partner for this, not a vendor
                selling licenses, not a generalist agency adding &ldquo;AI&rdquo;
                to a deck. Education first, then strategy, then careful
                integration. That order matters.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[760px] mb-12">
            <Eyebrow className="mb-4">How we engage</Eyebrow>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              What VERA does for Delray companies.
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

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[820px]">
            <Eyebrow className="mb-4">FAQ</Eyebrow>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight mb-10"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              Questions Delray businesses ask us.
            </h2>

            <div className="space-y-10">
              {FAQS.map((item, i) => (
                <div key={item.q}>
                  <h3 className="font-sans font-semibold text-lg md:text-xl text-[var(--color-heading)] mb-3">
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
        id="book-a-call"
        aria-label="Get started"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <Container size="prose">
          <div className="flex flex-col items-center text-center gap-8">
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
            >
              Based in Delray? Let&rsquo;s talk.
            </h2>

            <p className="font-sans text-[var(--color-body)] text-lg leading-relaxed max-w-prose">
              30 minutes. We&rsquo;ll walk through what you&rsquo;re trying to
              do and whether we&rsquo;re the right fit. No deck, no pitch.
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
