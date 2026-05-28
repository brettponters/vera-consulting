import type { Metadata } from "next";
import Link from "next/link";
import { SolutionLayout } from "../_components/SolutionLayout";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "AI Strategy Consulting in South Florida | VERA",
  description:
    "AI strategy and roadmap consulting for South Florida law firms, real estate brokerages, and professional service businesses. Written plan, prioritized initiatives, real cost and success metrics.",
  alternates: { canonical: "/solutions/strategy" },
  openGraph: {
    title: "AI Strategy Consulting | VERA",
    description:
      "A focused AI strategy engagement for South Florida businesses. Written plan, prioritized roadmap, cost estimates, and measurable success criteria.",
    type: "website",
    url: "https://veraconsulting.co/solutions/strategy",
  },
};

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "How much does an AI strategy engagement cost?",
    a: (
      <>
        Most engagements land between $15,000 and $40,000 depending on business
        size, the number of departments involved, and how much primary research
        we do with your team. We quote a fixed fee after a free scoping call,
        so you know the number before you sign. If your team needs hands-on
        skill building first instead of a planning engagement,{" "}
        <Link
          href="/solutions/training"
          className="text-[var(--color-accent)] hover:opacity-80 no-underline"
        >
          AI Training
        </Link>{" "}
        is often the better starting point.
      </>
    ),
  },
  {
    q: "How long does it take to build an AI roadmap?",
    a: (
      <>
        Four to six weeks in most cases. Week one is stakeholder interviews and
        a read of your current operations. Weeks two and three are use-case
        analysis, cost modeling, and prioritization. Weeks four to six are
        document drafting, review with leadership, and a final walk-through.
        Businesses that move faster are usually ones that already have a clear
        executive sponsor and existing process documentation.
      </>
    ),
  },
  {
    q: "Do we need clean data or modern systems before doing AI strategy?",
    a: (
      <>
        No. Part of the value of a strategy engagement is an honest read of
        what your data and systems can actually support today, and what would
        need to change for the bigger initiatives. Most professional services
        businesses have data that is nowhere near ready, and the strategy work
        still surfaces valuable, achievable initiatives regardless.
      </>
    ),
  },
  {
    q: "How is AI strategy different from AI training or coaching?",
    a: (
      <>
        Strategy answers what to do and in what order. Training and coaching
        get your team using the tools well. Most businesses need both, but in a
        specific sequence. If you have no plan, start here. If you have a plan
        and need execution help, look at{" "}
        <Link
          href="/solutions/coaching"
          className="text-[var(--color-accent)] hover:opacity-80 no-underline"
        >
          AI Coaching
        </Link>{" "}
        for individuals and senior leaders.
      </>
    ),
  },
  {
    q: "Do you work with businesses outside South Florida?",
    a: (
      <>
        Yes, but our focus is South Florida. We do most of our work in person
        with businesses in Boca Raton, Delray Beach, Boynton Beach, Deerfield
        Beach, Fort Lauderdale, and the rest of Palm Beach and Broward counties.
        We take a limited number of remote engagements per quarter for
        businesses elsewhere in Florida or the Southeast.
      </>
    ),
  },
];

const SCENARIOS = [
  {
    title: "Scattered pilots, no direction",
    body: "Three departments running three different AI experiments with three different vendors. Nobody can tell whether any of it is working. We consolidate, kill what isn't paying off, and build a single roadmap leadership can stand behind.",
  },
  {
    title: "Pressure from the top, no plan",
    body: "Partners want a position on AI before the next company-wide meeting. We give you a written strategy you can present, with the trade-offs and costs spelled out, so the discussion is about choices instead of vibes.",
  },
  {
    title: "Competitive worry",
    body: "A competitor just announced an AI initiative and your phone is ringing. We help you separate marketing noise from operational reality, then identify the two or three places you can move that actually matter to your clients.",
  },
  {
    title: "Pre-investment due diligence",
    body: "You are about to spend six figures on an AI platform or a custom build. We pressure-test the case, model the real cost, and recommend whether to proceed, pilot smaller, or wait.",
  },
];

const NOT_DOING = [
  "We do not resell AI software. We have no vendor incentives that bias the recommendation.",
  "We do not produce 80-page strategy decks nobody reads. The deliverable is a working document, usually 12 to 20 pages.",
  "We do not promise sweeping change in 90 days. AI strategy that holds up takes honest scoping, and we will tell you when something will take longer.",
  "We do not work on initiatives where the right answer is no AI. If a process needs fixing first, we say so.",
];

export default function StrategyPage() {
  return (
    <>
      <SolutionLayout
        currentSlug="strategy"
        eyebrow="Solution · AI Strategy"
        title="AI strategy and roadmap consulting for South Florida businesses."
        intro="A focused engagement that ends with a written plan. The two or three places AI will make the biggest difference in your business, the order to do them in, what each costs, and what success looks like. Built from interviews with your team and a clear-eyed read of your operations, by senior consultants based in Boca Raton."
        forWho="Law firms, real estate brokerages, healthcare practices, financial advisors, and marketing agencies across Palm Beach and Broward counties. Business leaders ready to invest in AI but unsure where to start, or owners and operators with scattered AI experiments that need coordinated direction before more money gets spent. Often paired with an AI Policy engagement so your roadmap and your guardrails land at the same time."
        whatYouGet={[
          "Written strategy document, yours to keep regardless of next steps",
          "Prioritized roadmap with cost estimates and success metrics for each initiative",
          "Two to three rounds of stakeholder interviews across your team",
          "60-minute walk-through of the recommendations with leadership",
          "Optional follow-on quarter to start building the priority items",
          "Inbound referrals to vetted implementation partners when a build is the right call",
        ]}
      />

      {/* ── COMMON SCENARIOS ──────────────────────────── */}
      <section className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
              Common scenarios we see
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1] mb-10 max-w-[760px]"
              style={{ fontSize: "clamp(1.625rem, 2.6vw, 2.25rem)" }}
            >
              When a strategy engagement is the right next move.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-[1080px]">
            {SCENARIOS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div>
                  <h3 className="font-sans text-[var(--color-heading)] font-semibold text-lg md:text-xl leading-snug mb-3">
                    {s.title}
                  </h3>
                  <p className="font-sans text-[var(--color-body)] text-base leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHAT WE DON'T DO ──────────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-16 max-w-[1080px]">
            <div className="md:col-span-5">
              <Reveal>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
                  What we don&apos;t do
                </p>
                <h2
                  className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1]"
                  style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}
                >
                  An honest list of what is outside the scope of this engagement.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal delay={0.05}>
                <ul className="space-y-4 list-none m-0 p-0 font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed">
                  {NOT_DOING.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[var(--color-accent)] shrink-0 leading-tight">
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-[var(--color-muted)] text-sm md:text-base leading-relaxed mt-8 max-w-[560px]">
                  VERA is incorporated as a Public Benefit Corporation. A fixed
                  percentage of revenue funds AI safety research, which is part
                  of why we keep recommendations honest even when the honest
                  answer reduces our scope.
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
              Questions business leaders ask before booking a strategy engagement.
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
              Have a question we did not cover? The fastest way to get an
              answer is a 20-minute scoping call. There is no obligation, and
              you will leave the call with a clearer view of whether strategy
              is the right next step or whether{" "}
              <Link
                href="/solutions/policy"
                className="text-[var(--color-accent)] hover:opacity-80 no-underline"
              >
                AI Policy
              </Link>
              ,{" "}
              <Link
                href="/solutions/risk"
                className="text-[var(--color-accent)] hover:opacity-80 no-underline"
              >
                AI Risk Assessment
              </Link>
              , or something else fits your situation better.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
