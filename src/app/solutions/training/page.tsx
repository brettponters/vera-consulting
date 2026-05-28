import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { SolutionLayout } from "../_components/SolutionLayout";

export const metadata: Metadata = {
  title: "AI Training for Teams in South Florida | VERA",
  description:
    "Cohort AI training for businesses of 5 to 50. Eight weeks, real workflows, shared prompts. For real estate, law, healthcare, and finance teams in South Florida.",
  alternates: { canonical: "/solutions/training" },
  openGraph: {
    title: "AI Training for Teams | VERA",
    description:
      "Cohort training for businesses where AI adoption needs to be coordinated, not scattered. Shared workflows, shared prompts, shared standards.",
    type: "website",
    url: "https://veraconsulting.co/solutions/training",
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How long is the program?",
    a: "Eight weeks total. Four to six live group sessions across that window, plus office hours in between, plus a 90-day follow-up after the program ends to check what stuck and adjust what didn't.",
  },
  {
    q: "How much of the content is customized to our industry?",
    a: "Most of it. We use a shared spine for fundamentals (how the tools work, where they fail, how to write prompts that hold up), then build the workflow examples, prompt library, and case studies around the real work your team does. A brokerage cohort and a law firm cohort look quite different by week three.",
  },
  {
    q: "Is the program remote or in-person?",
    a: "Both options are available. For South Florida businesses (Boca Raton, Delray Beach, Boynton Beach, Deerfield Beach, Fort Lauderdale, Palm Beach County, Broward County), in-person kickoff plus remote working sessions is the default. Fully remote works well for distributed teams or when scheduling makes in-person difficult.",
  },
  {
    q: "What outcomes do you actually measure?",
    a: "Three things. Active usage across the team (not just the early adopters), time saved on the workflows we built together, and a short qualitative read from leadership on whether the work coming out has changed. We report on these at the 30, 60, and 90 day marks.",
  },
  {
    q: "How is this different from LinkedIn Learning, Udemy for Business, or a one-day workshop?",
    a: "Self-serve platforms give your team a library. They don't give the team shared standards, workflows built around your actual work, or accountability. A one-day workshop creates energy that fades inside a month. The cohort format gives you both the structure and the follow-through, so the team actually changes how it works.",
  },
];

const SCHEDULE: { week: string; focus: string; detail: string }[] = [
  {
    week: "Week 1",
    focus: "Kickoff and baseline",
    detail:
      "Leadership alignment, current-state read of how AI is (and isn't) being used, set the target outcomes for the program.",
  },
  {
    week: "Week 2",
    focus: "Foundations the whole team shares",
    detail:
      "How the tools actually work, where they break, what 'good' output looks like, how to write prompts that hold up across team members.",
  },
  {
    week: "Week 3",
    focus: "First workflows, the highest-frequency tasks",
    detail:
      "Build the three or four workflows your team runs most often. Listing copy, intake summaries, follow-ups, meeting notes, status updates, whatever yours are.",
  },
  {
    week: "Week 4",
    focus: "Office hours and refinement",
    detail:
      "Live working session for the team to bring real work, get unstuck, and tighten the prompts that aren't quite landing yet.",
  },
  {
    week: "Week 5",
    focus: "Second workflow set, the bigger-impact tasks",
    detail:
      "Move beyond the daily tasks into work that takes longer but matters more. Market briefs, client memos, longer-form drafts, internal analysis.",
  },
  {
    week: "Week 6",
    focus: "Voice, review, and quality",
    detail:
      "Calibrating output so it sounds like your business, not like AI. Setting up the review step so quality stays consistent across the team.",
  },
  {
    week: "Week 7",
    focus: "Standards and the prompt library",
    detail:
      "Lock the shared prompt library, document the team's working standards, hand off the materials your team will keep using after the program ends.",
  },
  {
    week: "Week 8",
    focus: "Close-out and measurement plan",
    detail:
      "Review what's working, what isn't, set the 30/60/90 day measurement plan, schedule the follow-up checkpoints.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function TrainingPage() {
  return (
    <>
      <Script
        id="training-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SolutionLayout
        currentSlug="training"
        eyebrow="Solution · AI Training"
        title="Get your whole team using AI the same way."
        intro="A cohort AI training program for businesses of 5 to 50, built so the whole team moves together rather than a handful of early adopters carrying the rest. Two to three sessions per month over eight weeks, built around the actual work your team does, with workflows and prompts they can use the next day. For South Florida real estate brokerages, law firms, financial advisors, healthcare practices, and marketing agencies that want consistency across people, not just individual hero use."
        forWho="Businesses of 5 to 50 people in South Florida (Boca Raton, Delray Beach, Boynton Beach, Deerfield Beach, Fort Lauderdale, and across Palm Beach and Broward Counties) where leadership wants AI adoption to be coordinated rather than scattered. Real estate brokerages, law firms, financial advisors, healthcare practices, marketing agencies."
        whatYouGet={[
          "Onboarding session with leadership to set the rollout target and success metrics",
          "Four to six live group training sessions across eight weeks, remote or in-person",
          "Shared prompt library and workflow templates the team keeps and maintains",
          "Office hours during the rollout so the team can bring real work and get unstuck",
          "90-day follow-up to measure adoption, see what stuck, and adjust what didn't",
        ]}
      />

      {/* ── SAMPLE 8-WEEK SCHEDULE ─────────────────────── */}
      <section
        id="schedule"
        className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]"
      >
        <Container size="wide">
          <div className="max-w-[1080px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-4">
              Sample 8-week schedule
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1] mb-5"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              What a cohort actually looks like, week by week.
            </h2>
            <p className="font-sans text-[var(--color-body)] leading-relaxed mb-12 max-w-[680px]">
              This is the spine, not the script. The exact mix of sessions, office hours, and workflows is set in week one with your leadership team.
            </p>

            <ol className="list-none m-0 p-0 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {SCHEDULE.map(({ week, focus, detail }) => (
                <li key={week} className="flex flex-col gap-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold">
                    {week}
                  </p>
                  <h3 className="font-sans font-semibold text-[var(--color-heading)] text-lg leading-snug m-0">
                    {focus}
                  </h3>
                  <p className="font-sans text-[var(--color-body)] text-base leading-relaxed m-0">
                    {detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ── TRAINING VS COACHING ───────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24">
        <Container size="wide">
          <div className="max-w-[1080px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-4">
              Training vs Coaching
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1] mb-10"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Which one actually fits your business?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="border border-[var(--color-hairline)] bg-[var(--color-bg)] p-7 md:p-9">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-3">
                  Training (this page)
                </p>
                <h3 className="font-sans font-semibold text-[var(--color-heading)] text-xl leading-snug mb-4 m-0">
                  The whole team moves together.
                </h3>
                <ul className="list-none m-0 p-0 space-y-2.5 font-sans text-[var(--color-body)] text-base leading-relaxed">
                  <li>Cohort of 5 to 50 people</li>
                  <li>Shared workflows, shared prompts, shared standards</li>
                  <li>Eight weeks, then a 90-day follow-up</li>
                  <li>Best when adoption needs to be coordinated across the business</li>
                </ul>
              </div>

              <div className="border border-[var(--color-hairline)] bg-[var(--color-bg)] p-7 md:p-9">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-3">
                  Coaching
                </p>
                <h3 className="font-sans font-semibold text-[var(--color-heading)] text-xl leading-snug mb-4 m-0">
                  One person gets very good, very fast.
                </h3>
                <ul className="list-none m-0 p-0 space-y-2.5 font-sans text-[var(--color-body)] text-base leading-relaxed">
                  <li>Weekly 1:1 with a senior partner</li>
                  <li>Custom workflows built around one person's actual work</li>
                  <li>Monthly retainer, three-month minimum</li>
                  <li>Best for top performers, solo practitioners, or the person who will lead the rest</li>
                </ul>
                <Link
                  href="/solutions/coaching"
                  className="inline-block mt-5 font-sans text-sm font-medium text-[var(--color-accent)] hover:opacity-80 transition-opacity no-underline"
                >
                  See 1:1 Coaching →
                </Link>
              </div>
            </div>

            <p className="font-sans text-[var(--color-body)] text-base leading-relaxed mt-10 max-w-[760px]">
              Some businesses run both. Coaching for the owner or operator who will champion the work, then training for the team they need to bring along. If you also want governance and approval rules sitting alongside the training, see{" "}
              <Link
                href="/solutions/policy"
                className="text-[var(--color-accent)] hover:opacity-80 transition-opacity"
              >
                AI Policy
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section
        id="faq"
        className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]"
      >
        <Container size="wide">
          <div className="max-w-[860px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-4">
              Common questions
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-[1.1] mb-10"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Frequently asked questions.
            </h2>

            <dl className="m-0 p-0">
              {FAQS.map(({ q, a }, idx) => (
                <div
                  key={q}
                  className={`py-7 ${idx === 0 ? "border-t border-[var(--color-hairline)]" : ""} border-b border-[var(--color-hairline)]`}
                >
                  <dt className="font-sans font-semibold text-[var(--color-heading)] text-lg leading-snug mb-3 m-0">
                    {q}
                  </dt>
                  <dd className="font-sans text-[var(--color-body)] text-base leading-relaxed m-0">
                    {a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>
    </>
  );
}
