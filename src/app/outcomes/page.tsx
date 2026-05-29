import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const CANONICAL_PATH = "/outcomes";
const CANONICAL_URL = `https://veraconsulting.co${CANONICAL_PATH}`;

export const metadata: Metadata = {
  title: "How AI Helps Real Estate Investors",
  description:
    "Concrete examples of what AI does for short-term rental hosts, wholesalers, and multifamily owners. Real workflows, not vendor demos.",
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "How AI Helps Real Estate Investors, VERA",
    description:
      "What AI actually does for STR hosts, wholesalers, and multifamily owners. Specific workflows, not slogans.",
    url: CANONICAL_URL,
    type: "article",
    images: ["/opengraph-image"],
  },
};

interface Outcome {
  title: string;
  body: string;
}

interface Segment {
  eyebrow: string;
  title: string;
  intro: string;
  outcomes: Outcome[];
}

const SEGMENTS: Segment[] = [
  {
    eyebrow: "Short-term rental hosts",
    title: "Higher RevPAR, fewer 11pm guest messages.",
    intro:
      "Dynamic pricing is the obvious one. The rest is where the time actually goes.",
    outcomes: [
      {
        title: "Dynamic pricing that doesn't leave money on the table",
        body: "PriceLabs, Wheelhouse, or Beyond, tuned to your market and your calendar. Operators in the 2026 benchmark see 13 to 30 point occupancy gaps over static pricing.",
      },
      {
        title: "Guest replies in your voice, in 30 seconds",
        body: "AI drafts reply, checks your calendar and house rules, you tap send. Late-night pool questions stop interrupting your weekend.",
      },
      {
        title: "Review responses that don't sound like a bot wrote them",
        body: "Every review gets a tailored response within the hour. AI matches your tone, references what the guest actually said, and skips the generic thank-you.",
      },
      {
        title: "Listing copy that ranks and converts",
        body: "Hostaway- or Hospitable-ready listings rewritten for each platform. SEO for Airbnb, more breathing room for VRBO and Booking. Updates flow automatically.",
      },
      {
        title: "Cleaner check-ins, fewer turnover misses",
        body: "Cleaners get the right schedule, the right notes, the right photos. Same-day flips stop breaking. Owners see the unit through the AI's eyes before the guest does.",
      },
      {
        title: "Owner statements that explain themselves",
        body: "Monthly reports written in plain English instead of a Yieldstar export. Owners stop emailing you for explanations.",
      },
    ],
  },
  {
    eyebrow: "Wholesalers",
    title: "Same lists, 2 to 3x the deals.",
    intro:
      "The list is rarely the problem. The follow-up is. AI takes over the parts that break.",
    outcomes: [
      {
        title: "AI voice agents on inbound seller calls",
        body: "Calls get answered in the first ring, every ring. AI qualifies, takes notes, books the next step in your calendar. The leads that mattered before you got off the toilet stop slipping away.",
      },
      {
        title: "Day 1, 3, 7, 14, 30, 60, 90 follow-up that actually runs",
        body: "The cadence operators talk about and never run. AI sends it, replies to inbound, hands off to you when it's live. The deals you used to lose to forgetting get closed.",
      },
      {
        title: "Lead scoring you can actually trust",
        body: "Skip-traced lists scored on motivation signals, not vibes. The top 20 get worked first. The bottom 200 stop eating your week.",
      },
      {
        title: "Call transcripts and CRM auto-fill",
        body: "Every call is transcribed, summarized, and dropped into Podio or REsimpli with the next action filled in. The CRM stays current without anyone touching it.",
      },
      {
        title: "Dispo that matches cash buyers to assignments",
        body: "Your buyer list scored against the deal. Top five get the email first. Margins stop leaking on the dispo side.",
      },
      {
        title: "TCPA-aware campaigns that don't get you sued",
        body: "Opt-out lists, time-of-day rules, message limits enforced in the workflow itself. The legal stuff stops being something you remember to do.",
      },
    ],
  },
  {
    eyebrow: "Multifamily owners (50 to 500 units)",
    title: "Lower opex, higher conversion, defensible governance.",
    intro:
      "94% of multifamily owners are implementing or planning AI in 2026. Most are missing the integration plan.",
    outcomes: [
      {
        title: "Leasing AI that doesn't lose a tour at 9pm",
        body: "EliseAI, Funnel, or Frontdesk picked and rolled out properly. After-hours leads stay live. Operators in the 2026 EliseAI survey report 85% higher lead-to-lease conversion.",
      },
      {
        title: "Delinquency outreach that recovers without burning trust",
        body: "Day 3, 7, 14 outreach in the resident's preferred language and tone. Hardship signals routed to your team. Collections move without anyone feeling like a debt collector.",
      },
      {
        title: "Value-add underwriting that holds up",
        body: "OM screening with Claude or ChatGPT, model-population from rent rolls and T-12s, post-renovation rent premium predictions hitting 85 to 92% accuracy.",
      },
      {
        title: "Portfolio reporting that finally tells the truth",
        body: "Yardi or RealPage data, queryable in plain English. NOI variance, occupancy, collections rolled up by asset and by fund. The Monday slide deck stops being a fiction.",
      },
      {
        title: "Fair housing audits on every AI system",
        body: "Screening, pricing, marketing audited for disparate impact. SafeRent paid $2.275M in 2024 for skipping this. We don't.",
      },
      {
        title: "After-hours coverage without hiring a night team",
        body: "Maintenance triage, lockouts, package questions all handled. Your humans focus on tours and renewals during the day.",
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How AI Helps Real Estate Investors",
  description:
    "Concrete examples of what AI does for short-term rental hosts, wholesalers, and multifamily owners.",
  url: CANONICAL_URL,
  publisher: {
    "@id": "https://veraconsulting.co/#org",
  },
};

export default function OutcomesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="relative pt-14 pb-12 md:pt-20 md:pb-16 overflow-hidden bg-[var(--color-bg)]"
      >
        <Container size="wide" className="relative z-10">
          <div className="max-w-[920px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-5">
              Outcomes
            </p>
            <h1
              className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              What AI actually does for real estate investors.
            </h1>
            <p className="font-sans font-semibold text-[var(--color-body)] text-xl md:text-2xl leading-snug max-w-[760px]">
              Concrete workflows for short-term rental hosts, wholesalers, and
              multifamily owners. No slogans.
            </p>
          </div>
        </Container>
      </section>

      {/* Segments */}
      {SEGMENTS.map((seg, segIdx) => (
        <section
          key={seg.eyebrow}
          className={`py-20 md:py-28 ${
            segIdx % 2 === 0
              ? "bg-[var(--color-surface)]"
              : "bg-[var(--color-bg)]"
          }`}
        >
          <Container size="wide">
            <div className="max-w-[820px] mb-12 md:mb-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-3">
                {seg.eyebrow}
              </p>
              <h2
                className="font-sans font-black text-[var(--color-heading)] tracking-[-0.03em] leading-[1.05] mb-5"
                style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)" }}
              >
                {seg.title}
              </h2>
              <p className="font-sans font-medium text-base md:text-lg leading-snug text-[var(--color-body)]">
                {seg.intro}
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 list-none m-0 p-0">
              {seg.outcomes.map((o) => (
                <li key={o.title} className="space-y-3">
                  <div
                    className="h-px w-12"
                    style={{ backgroundColor: "var(--color-navy)" }}
                  />
                  <h3 className="font-sans font-black text-[var(--color-heading)] text-lg md:text-xl leading-snug tracking-[-0.01em]">
                    {o.title}
                  </h3>
                  <p className="font-sans font-medium text-[15px] md:text-base leading-snug text-[var(--color-body)]">
                    {o.body}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <h2
              className="font-sans font-black text-[var(--color-heading)] tracking-[-0.03em] leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Want one of these running for you?
            </h2>
            <p className="font-sans font-medium text-base md:text-lg leading-snug text-[var(--color-body)] mb-10">
              30 minutes on the phone. We figure out which one belongs in your
              business first, scope it, and tell you what it costs. Even if
              you don't hire us.
            </p>
            <Button href="/contact" variant="filled" size="lg" arrow>
              Book a call
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
