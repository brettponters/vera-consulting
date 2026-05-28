import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Button } from "@/components/ui/Button";

const CANONICAL_URL = "https://veraconsulting.co/locations/fort-lauderdale";

export const metadata: Metadata = {
  title: "AI Consulting in Fort Lauderdale, FL",
  description:
    "VERA helps Fort Lauderdale companies, marine, healthcare, hospitality, logistics, professional services, adopt AI that is foundational, accountable, and built right from the start.",
  alternates: {
    canonical: "/locations/fort-lauderdale",
  },
  openGraph: {
    title: "AI Consulting in Fort Lauderdale, FL, VERA",
    description:
      "AI strategy and integration for Fort Lauderdale's marine, healthcare, hospitality, port, and professional-services economy. Built right from the start, not bolted on.",
    url: "/locations/fort-lauderdale",
    type: "website",
    siteName: "VERA",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting in Fort Lauderdale, FL, VERA",
    description:
      "AI strategy and integration for Fort Lauderdale's marine, healthcare, hospitality, and logistics businesses.",
  },
};

const SERVICES = [
  {
    title: "Strategy",
    body: "We sit down with your leadership and map where AI actually moves the needle, and where it doesn't. For a marine refit yard, that might be parts forecasting and survey documentation. For a hospitality group, it's guest communication and staffing models. Scoped to what your team can run.",
  },
  {
    title: "Integration",
    body: "We work alongside your IT, clinical, or operations staff to put systems into production. That means guardrails before go-live, monitoring once it's running, and documentation a new hire can read. For healthcare and port-logistics clients, integration is where most projects quietly fail. We treat it as the work, not the afterthought.",
  },
  {
    title: "Coaching",
    body:
      "1:1 AI fluency for Fort Lauderdale executives and leadership teams. Hands-on, weekly sessions paired to what your business actually does, so by the end of the engagement you can evaluate tools, set policy, and run the AI conversation in your own boardroom.",
  },
];

const FAQS = [
  {
    q: "Do you work with healthcare, marine, or hospitality?",
    a: "Yes, those are the industries that define Fort Lauderdale's economy, and they're exactly where thoughtful AI work matters most. Healthcare systems have patient-safety and HIPAA stakes. Marine refit and yacht-service operations run on tight schedules and high-value assets. Hospitality groups touch guests, staff, and revenue daily. We adapt how we engage, but the foundational approach, research-backed, accountable, built to last, is the same across all three.",
  },
  {
    q: "We're not in tech, can VERA help us?",
    a: "Most of our work is with companies that aren't tech-first. A law firm, an accounting practice, a hotel operator, a marine-services business, a real estate brokerage, these are the organizations where AI gets bolted on badly because nobody inside has the time or training to evaluate it properly. We're the outside team that does. You don't need an engineering department to work with us; you need leadership willing to ask honest questions.",
  },
  {
    q: "How long does an engagement take?",
    a: "It depends on what you're trying to accomplish. A focused strategy and risk assessment can wrap in a few weeks. Integration work, actually getting a system into production with documentation, guardrails, and staff trained on it, typically runs longer because doing it right takes longer than doing it fast. We'll give you an honest timeline after a discovery call, not a templated proposal designed to win the room.",
  },
  {
    q: "What does it cost?",
    a: "We scope each engagement to the work. We won't quote a number on a landing page because the honest answer depends on what you need, a half-day workshop, a full strategy review, or a months-long integration with your team. What we'll commit to: clear pricing before you sign, no surprise scope changes mid-project, and a recommendation up front if we don't think we're the right fit for your situation.",
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
        "AI strategy, integration, and coaching for Fort Lauderdale companies.",
      url: CANONICAL_URL,
      telephone: "+1-561-900-8182",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fort Lauderdale",
        addressRegion: "FL",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.1224,
        longitude: -80.1373,
      },
      areaServed: {
        "@type": "City",
        name: "Fort Lauderdale, FL",
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
          name: "Fort Lauderdale",
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

export default function FortLauderdalePage() {
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
            <Eyebrow className="mb-5">Fort Lauderdale, Florida</Eyebrow>
            <h1
              className="font-sans font-bold text-[var(--color-heading)] leading-[1.05] tracking-[-0.02em] mb-8"
              style={{ fontSize: "clamp(2rem, 4.8vw, 3.75rem)" }}
            >
              AI built for a city that runs on yachts, hospitals, container
              cranes, and hotel keys.
            </h1>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[680px]">
              Fort Lauderdale doesn&rsquo;t fit one industry profile, and the
              AI advice you&rsquo;ll find online doesn&rsquo;t fit it either.
              VERA helps marine, healthcare, hospitality, port, real-estate,
              and professional-services companies adopt AI that&rsquo;s
              foundational, built right from the start, not bolted on after
              the fact.
            </p>
          </div>
        </Container>
      </section>

      {/* Why */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <Eyebrow className="mb-4">Why it matters here</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-8">
              Why Fort Lauderdale businesses can&rsquo;t afford to do AI wrong.
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] mb-5">
              Fort Lauderdale is the wealthiest and most economically diverse
              city in Broward County, and that diversity is the point. A single
              week of business in this city includes refit work at a Las Olas
              boatyard, a discharge plan at Broward Health, a container moving
              through Port Everglades, a closing on a riverfront listing, and a
              banquet contract at a beachfront hotel. Each of those operations
              has different data, different regulators, and different
              tolerances for being wrong.
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] mb-5">
              That&rsquo;s why generic AI advice fails here. A model that
              hallucinates a ship part number costs a marine refit operation
              days of berth time and a furious owner. A scheduling tool that
              misreads a clinician&rsquo;s note inside Memorial Healthcare
              System affects patients, not metrics. A logistics platform that
              misroutes a container at Port Everglades cascades into trucking,
              warehousing, and customer commitments for weeks. These
              aren&rsquo;t hypotheticals, they&rsquo;re the conditions under
              which Fort Lauderdale companies actually operate.
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)]">
              VERA&rsquo;s approach is education-first and foundational. Before
              we recommend a tool or write a single line of integration code,
              we make sure the people accountable for the outcome understand
              what the system does, where it fails, and how they&rsquo;ll know.
              That&rsquo;s the work that protects yacht-show season, hospital
              throughput, port schedules, and the dozens of professional
              services businesses quietly running this city in the background.
            </p>
          </div>
        </Container>
      </section>

      {/* What VERA does */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[860px] mb-10">
            <Eyebrow className="mb-4">How we engage</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight">
              What VERA does for Fort Lauderdale companies.
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

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <Eyebrow className="mb-4">FAQ</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-10">
              Questions Fort Lauderdale businesses ask us.
            </h2>
            <div className="space-y-8">
              {FAQS.map((faq, i) => (
                <div key={faq.q}>
                  <h3 className="font-sans font-semibold text-lg md:text-xl text-[var(--color-heading)] mb-3 tracking-[-0.01em]">
                    {faq.q}
                  </h3>
                  <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                    {faq.a}
                  </p>
                  {i < FAQS.length - 1 && <Hairline className="mt-8" />}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[640px]">
            <Eyebrow className="mb-4">Start the conversation</Eyebrow>
            <h2 className="font-sans font-semibold text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-[1.1] mb-5">
              Talk to us about your situation in Fort Lauderdale.
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] mb-8">
              A short call is the fastest way to find out whether
              we&rsquo;re the right team for what you&rsquo;re trying to do.
              We&rsquo;ll tell you honestly either way.
            </p>
            <Button href="/get-started" variant="filled" size="lg" arrow>
              Get started
            </Button>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        // Inline JSON-LD for local SEO. Server-rendered, no client JS.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
