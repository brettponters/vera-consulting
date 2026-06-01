import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FaqBlock, buildFaqJsonLd, type FaqItem } from "@/components/ui/FaqBlock";
import { HeroVisual } from "./HeroVisual";
import { AgentFlowDiagram } from "./AgentFlowDiagram";
import { CapabilityCards } from "./CapabilityCards";

const SITE_URL = "https://veraconsulting.co";

export const metadata: Metadata = {
  title: "How to Use AI in Real Estate: A Guide for Agents",
  description:
    "How to use AI in real estate, in plain English for agents. What AI tools actually do, how to use ChatGPT for listings and lead follow-up, the Fair Housing and data risks, and where to start. Written for people who close deals, not write code.",
  alternates: { canonical: "/ai-in-real-estate" },
  openGraph: {
    title: "How to Use AI in Real Estate: A Guide for Agents",
    description:
      "What's real, what's hype, and where AI earns its place in a real estate business. Agentic AI explained for agents, with the Fair Housing and client-data guardrails that matter.",
    type: "article",
    url: `${SITE_URL}/ai-in-real-estate`,
    siteName: "VERA",
    locale: "en_US",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in Real Estate: A Practical Guide for Agents",
    description:
      "What's real, what's hype, and where AI earns its place in a real estate business.",
  },
};

const FAQ: FaqItem[] = [
  {
    q: "How are real estate agents using AI?",
    a: "For the work around the deal, not the deal itself: drafting listing copy and social posts, answering new leads in minutes and nudging the slow ones, pulling comps and property research into a brief, prepping contracts and flagging compliance, coordinating showings, and keeping every client updated. The relationship and the negotiation stay human.",
  },
  {
    q: "What is agentic AI in real estate?",
    a: "Agentic AI is software that takes a goal and works through the steps on its own, instead of answering one prompt at a time. A chatbot writes the follow-up email when you ask. An agent watches for the new lead, writes the follow-up, schedules the next touch, and routes the hot one to you, while you are out at a showing. It checks with you before anything high-stakes.",
  },
  {
    q: "Is it safe to use AI with client data and Fair Housing rules?",
    a: "It can be, if it is built that way. AI-written listing copy can drift into Fair Housing violations, so a human signs off on every word. Client data should never be dumped into a random tool's servers; the systems worth using keep it where it belongs. AI can research and flag compliance, but your judgment and your broker still decide.",
  },
  {
    q: "Will AI replace real estate agents?",
    a: "No. It replaces the busywork, not the trust. Clients hire an agent for judgment, negotiation, and someone who has their back on the biggest purchase of their life. AI does not do that. What it does is hand the agents who use it more time and a sharper edge, so they out-list and out-close the agents who don't.",
  },
  {
    q: "What AI should a real estate agent start with?",
    a: "The one workflow eating your week, usually lead follow-up. Get that running reliably before adding anything else. Pick tools that keep client data private, and skip anything that is a chatbot with a new logo. You do not have to build it alone; the point is to start where the time is bleeding.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI in Real Estate: What Agents Actually Use It For",
  description:
    "A practical guide to AI in real estate for agents: what's real, what agents use it for, the Fair Housing and data risks, and where to start.",
  url: `${SITE_URL}/ai-in-real-estate`,
  author: { "@type": "Organization", name: "VERA Consulting", url: SITE_URL },
  publisher: { "@type": "Organization", name: "VERA Consulting", url: SITE_URL },
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  inLanguage: "en-US",
  about: ["AI in Real Estate", "Agentic AI", "Real Estate Technology", "Real Estate Agents"],
};

const faqJsonLd = buildFaqJsonLd(FAQ);

/* ── Small server-renderable helpers ─────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-4">
      {children}
    </span>
  );
}

function SectionHeadline({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-sans font-black text-[var(--color-heading)] tracking-[-0.025em] leading-[1.08] max-w-[760px] mb-6"
      style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)" }}
    >
      {children}
    </h2>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function AiInRealEstatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-28 pb-0 md:pt-40 md:pb-0"
        style={{
          background:
            "linear-gradient(180deg, #F8F6F1 0%, #F1EDE5 50%, #F1EDE5 80%, #F8F6F1 100%)",
        }}
      >
        {/* Large background grain texture via SVG, adds warmth without a raster */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <Container size="wide" className="relative z-10">
          {/* Two-column: copy left, visual right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_500px] gap-12 lg:gap-8 items-end">
            {/* Copy column */}
            <div className="pb-16 md:pb-20">
              <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-5">
                Guide
              </span>
              <h1
                className="font-sans font-black text-[var(--color-heading)] leading-[1.0] tracking-[-0.035em] mb-8"
                style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}
              >
                AI in Real Estate
                <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>
                  .
                </span>
              </h1>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[600px] mb-10">
                What&rsquo;s actually changing for agents, what&rsquo;s hype,
                and where AI earns its place in your business. Written plain,
                for people who close deals, not people who write code.
              </p>

              {/* TOC strip, section nav mirroring the OurStrategy pattern */}
              <div className="pt-6 border-t border-[var(--color-hairline)] grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-[560px]">
                {[
                  { num: "01", label: "The shift" },
                  { num: "02", label: "What it does" },
                  { num: "03", label: "Agentic AI" },
                  { num: "04", label: "The guardrails" },
                  { num: "05", label: "Where to start" },
                  { num: "06", label: "What's next" },
                ].map((s) => (
                  <div key={s.label} className="flex items-baseline gap-2">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-accent)]">
                      {s.num}
                    </span>
                    <span className="font-sans text-[13px] font-medium text-[var(--color-heading)]">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual column, the agentic network SVG */}
            <div
              className="hidden lg:block relative self-end"
              style={{ height: "460px" }}
              aria-hidden="true"
            >
              <HeroVisual />
            </div>
          </div>
        </Container>
      </section>

      {/* ── ARTICLE SECTIONS ──────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] py-8 md:py-12">
        <Container size="wide">
          <div className="max-w-[860px]">

            {/* ── 01 The shift ── */}
            <div className="relative py-12 md:py-16 border-t border-[var(--color-hairline)]">
              {/* Giant decorative numeral backdrop */}
              <span
                aria-hidden="true"
                className="hidden md:block absolute -top-2 -left-6 xl:-left-16 font-sans font-black select-none pointer-events-none leading-none"
                style={{
                  fontSize: "clamp(7rem, 12vw, 12rem)",
                  color: "transparent",
                  WebkitTextStroke: "1px var(--color-accent)",
                  opacity: 0.06,
                  letterSpacing: "-0.05em",
                  zIndex: 0,
                }}
              >
                01
              </span>
              <div className="relative z-10">
                <SectionLabel>01 / The shift</SectionLabel>
                <SectionHeadline>
                  AI is already in real estate. Most of what you&rsquo;re sold
                  isn&rsquo;t the useful part.
                </SectionHeadline>
                <div className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] flex flex-col gap-4 max-w-[720px]">
                  <p>
                    The portals, your CRM, and a hundred apps have bolted
                    &ldquo;AI&rdquo; onto a button. Most of it is a chatbot that
                    writes a paragraph when you prompt it. That helps a little
                    and changes nothing about your week.
                  </p>
                  <p>
                    The shift that matters is quieter. Software that takes a
                    goal and runs the steps on its own, an agent, not a chatbot
                    you babysit. That is the difference between a tool you have
                    to remember to use and a system that just runs while you are
                    out showing homes.
                  </p>
                </div>
              </div>
            </div>

            {/* ── 02 In practice ── */}
            <div className="relative py-12 md:py-16 border-t border-[var(--color-hairline)]">
              <span
                aria-hidden="true"
                className="hidden md:block absolute -top-2 -left-6 xl:-left-16 font-sans font-black select-none pointer-events-none leading-none"
                style={{
                  fontSize: "clamp(7rem, 12vw, 12rem)",
                  color: "transparent",
                  WebkitTextStroke: "1px var(--color-accent)",
                  opacity: 0.06,
                  letterSpacing: "-0.05em",
                  zIndex: 0,
                }}
              >
                02
              </span>
              <div className="relative z-10">
                <SectionLabel>02 / In practice</SectionLabel>
                <SectionHeadline>Six places it earns its keep.</SectionHeadline>
                <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] max-w-[720px] mb-2">
                  Every one of these is the work that keeps you from the work
                  you got into real estate for.
                </p>
                {/* Client component: capability cards with icons */}
                <CapabilityCards />
              </div>
            </div>

            {/* ── 03 Agentic ── */}
            <div className="relative py-12 md:py-16 border-t border-[var(--color-hairline)]">
              <span
                aria-hidden="true"
                className="hidden md:block absolute -top-2 -left-6 xl:-left-16 font-sans font-black select-none pointer-events-none leading-none"
                style={{
                  fontSize: "clamp(7rem, 12vw, 12rem)",
                  color: "transparent",
                  WebkitTextStroke: "1px var(--color-accent)",
                  opacity: 0.06,
                  letterSpacing: "-0.05em",
                  zIndex: 0,
                }}
              >
                03
              </span>
              <div className="relative z-10">
                <SectionLabel>03 / What &ldquo;agentic&rdquo; means</SectionLabel>
                <SectionHeadline>
                  An assistant answers. An agent acts.
                </SectionHeadline>
                <div className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] max-w-[720px]">
                  <p>
                    A chatbot waits for a prompt and forgets the goal between
                    messages. Agentic AI takes a goal, breaks it into steps,
                    uses your tools, and follows through, checking with you
                    before anything high-stakes.
                  </p>
                </div>
                {/* Client component: the animated flow diagram */}
                <AgentFlowDiagram />
                <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] max-w-[720px] mt-6">
                  For an agent, that is the difference between another app to
                  open and a piece of your week handed back.
                </p>
              </div>
            </div>

            {/* ── 04 Guardrails ── */}
            <div className="relative py-12 md:py-16 border-t border-[var(--color-hairline)]">
              <span
                aria-hidden="true"
                className="hidden md:block absolute -top-2 -left-6 xl:-left-16 font-sans font-black select-none pointer-events-none leading-none"
                style={{
                  fontSize: "clamp(7rem, 12vw, 12rem)",
                  color: "transparent",
                  WebkitTextStroke: "1px var(--color-accent)",
                  opacity: 0.06,
                  letterSpacing: "-0.05em",
                  zIndex: 0,
                }}
              >
                04
              </span>
              <div className="relative z-10">
                <SectionLabel>04 / The guardrails</SectionLabel>
                <SectionHeadline>
                  The risks worth taking seriously.
                </SectionHeadline>
                <div className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] max-w-[720px]">
                  {/* Guardrail list, visual treatment: left accent bar + stacked */}
                  <ul className="list-none m-0 p-0 flex flex-col gap-0">
                    {[
                      {
                        k: "Fair Housing",
                        v: "AI-written listing copy can wander into language that violates Fair Housing. A human signs off on every word.",
                      },
                      {
                        k: "Client data",
                        v: "Your clients trust you with private information. It should never get dumped into a random tool's servers. The systems worth using keep it where it belongs.",
                      },
                      {
                        k: "Disclosures and compliance",
                        v: "AI can research and flag, but it does not replace your judgment or your broker's. It drafts; you and the rules decide.",
                      },
                      {
                        k: "The trust itself",
                        v: "The relationship is the business. AI handles the busywork around it, never the human part clients pay you for.",
                      },
                    ].map(({ k, v }, i) => (
                      <li
                        key={k}
                        className="flex gap-5 py-5 border-b border-[var(--color-hairline)] last:border-b-0"
                      >
                        {/* Left accent numeral */}
                        <span
                          className="font-mono text-[11px] uppercase tracking-[0.2em] pt-[3px] shrink-0 w-5 text-right"
                          style={{ color: "var(--color-accent)", opacity: 0.6 }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {/* Vertical rule */}
                        <div
                          className="w-[1px] shrink-0 self-stretch"
                          style={{ backgroundColor: "var(--color-accent)", opacity: 0.25 }}
                        />
                        <div>
                          <span className="font-sans font-semibold text-[var(--color-heading)]">
                            {k}.{" "}
                          </span>
                          <span className="font-sans text-[var(--color-body)] leading-relaxed">
                            {v}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 max-w-[680px]">
                    Done right, AI makes you more careful, not less, because
                    the guardrails are built into how it runs.
                  </p>
                </div>
              </div>
            </div>

            {/* ── 05 Where to start ── */}
            <div className="relative py-12 md:py-16 border-t border-[var(--color-hairline)]">
              <span
                aria-hidden="true"
                className="hidden md:block absolute -top-2 -left-6 xl:-left-16 font-sans font-black select-none pointer-events-none leading-none"
                style={{
                  fontSize: "clamp(7rem, 12vw, 12rem)",
                  color: "transparent",
                  WebkitTextStroke: "1px var(--color-accent)",
                  opacity: 0.06,
                  letterSpacing: "-0.05em",
                  zIndex: 0,
                }}
              >
                05
              </span>
              <div className="relative z-10">
                <SectionLabel>05 / Where to start</SectionLabel>
                <SectionHeadline>
                  Start with the one thing that eats your week.
                </SectionHeadline>
                <div className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] flex flex-col gap-4 max-w-[720px]">
                  <p>
                    You do not need ten tools. You need the one workflow that is
                    costing you most, usually lead follow-up, running reliably,
                    then the next.
                  </p>
                  <p>
                    Pick tools that keep client data private. Skip anything that
                    is a chatbot with a new logo. And you do not have to build
                    it alone: we either build it with you or coach you to run it
                    yourself, whichever gets you there faster.
                  </p>
                </div>
              </div>
            </div>

            {/* ── 06 What's next ── */}
            <div className="relative py-12 md:py-16 border-t border-[var(--color-hairline)]">
              <span
                aria-hidden="true"
                className="hidden md:block absolute -top-2 -left-6 xl:-left-16 font-sans font-black select-none pointer-events-none leading-none"
                style={{
                  fontSize: "clamp(7rem, 12vw, 12rem)",
                  color: "transparent",
                  WebkitTextStroke: "1px var(--color-accent)",
                  opacity: 0.06,
                  letterSpacing: "-0.05em",
                  zIndex: 0,
                }}
              >
                06
              </span>
              <div className="relative z-10">
                <SectionLabel>06 / What&rsquo;s next</SectionLabel>
                <SectionHeadline>
                  The agents who adopt early get the edge.
                </SectionHeadline>
                <div className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] flex flex-col gap-4 max-w-[720px]">
                  <p>
                    Near term, these agents get better at working across your
                    whole stack, your CRM, your inbox, the MLS, with more
                    autonomy and the same approval step before anything risky.
                    This is not science fiction and it is not five years out. It
                    is happening now.
                  </p>
                  <p>
                    The agents who put it to work this year will out-list and
                    out-close the ones who wait. That is the whole opportunity,
                    and the whole risk of sitting still.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FaqBlock
        items={FAQ}
        eyebrow="The short answers"
        heading="AI in real estate, in plain terms."
        bg="bg-[var(--color-surface)]"
      />

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] py-24 md:py-32 border-t border-[var(--color-hairline)] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-20 bg-[var(--color-accent)]"
        />
        <Container size="prose">
          <div className="flex flex-col items-center text-center gap-8">
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.025em] leading-[1.02]"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              Want to put it to work in your business?
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] max-w-prose">
              We help agents find the one workflow worth starting with, then
              build it with you or coach you to run it. Start with a call.
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
