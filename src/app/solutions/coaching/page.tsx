import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SolutionLayout } from "../_components/SolutionLayout";

export const metadata: Metadata = {
  title: "1:1 AI Coaching, South Florida",
  description:
    "Private weekly AI coaching with a senior partner. Custom workflows around your real work. Boca Raton, Palm Beach, Broward, remote across South Florida.",
  alternates: { canonical: "/solutions/coaching" },
  openGraph: {
    title: "1:1 AI Coaching with a Senior Partner | VERA",
    description:
      "Private weekly AI coaching. Custom workflows built around your real work, not a generic course. South Florida and remote.",
    type: "website",
    url: "https://veraconsulting.co/solutions/coaching",
  },
  twitter: {
    card: "summary_large_image",
    title: "1:1 AI Coaching with a Senior Partner | VERA",
    description:
      "Private weekly AI coaching, custom workflows around your real work.",
  },
};

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "How is 1:1 coaching different from AI training?",
    a: "Training is a cohort. Same material, same pace, built for a team. Coaching is one person, your work, your voice, your sessions. If you want to bring AI into a whole team consistently, training is the right shape. If you're the one person who's going to lead the rest, or you run a small practice, coaching fits better.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. Most people who come to coaching have never written a prompt that did real work before they start. Sessions are screen-share, plain English, no jargon. By month two you'll be building workflows on your own.",
  },
  {
    q: "What does a typical weekly session look like?",
    a: "Sixty minutes. We pick one part of your week that scales badly, build the workflow live, you use it on a real task before we end the call, and you walk away with something that works. Between sessions you have async support over email or text for questions and quick builds.",
  },
  {
    q: "How much does it cost?",
    a: "Monthly retainer, three-month minimum, then month to month. Number depends on the depth of work and is covered on the intro call. No contracts past the initial three months.",
  },
  {
    q: "Do you work in person in South Florida?",
    a: "Yes. Most sessions are remote because it's faster to share a screen and build live, but in-person works for clients in Boca Raton, Delray Beach, Boynton Beach, Deerfield Beach, Fort Lauderdale, and the rest of Palm Beach and Broward County.",
  },
];

const EXAMPLE_WORKFLOWS = [
  "Proposals, pitches, and listing copy in your voice, drafted in under a minute",
  "Client research and meeting briefs in five minutes, not an afternoon",
  "Personalized follow-ups that reference what each person actually said",
  "Past-client and lead touch sequences for birthdays, anniversaries, milestones",
  "Intake and discovery summaries for new prospects",
  "Status updates to clients the same hour, not three days later",
  "Internal SOPs and playbooks written from a single voice memo",
  "Inbox triage and reply drafting in your tone, not the AI's",
];

export default function CoachingPage() {
  return (
    <>
      <SolutionLayout
        currentSlug="coaching"
        eyebrow="Solution · 1:1 AI Coaching"
        title="1:1 AI coaching for business leaders and entrepreneurs."
        intro="Private weekly sessions with a senior partner, built around how you specifically run your business. We design the AI workflows for the parts of your week that take hours, proposals, briefs, follow-ups, status updates, intake notes, whatever your real work is, and you keep them. For owners and operators in South Florida who want personal AI fluency, not a company-wide rollout."
        forWho="Business leaders, entrepreneurs, founders, and owner-operators across South Florida. Real estate agents and brokerage owners, solo attorneys and managing partners, financial advisors, healthcare practice owners, marketing agency principals, and the operator on a larger team who's going to lead the rest of the company through AI."
        whatYouGet={[
          "Weekly 60-minute private session for the length of the engagement",
          "Async support between sessions for questions and quick builds",
          "Six to ten custom workflows built around how you actually work",
          "Voice and context calibration so the output sounds like you, not like AI",
          "Monthly retainer, three-month minimum, then month to month",
        ]}
      />

      {/* COACHING VS TRAINING ────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="max-w-[820px] mb-12 md:mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-3">
              Coaching vs Training
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)" }}
            >
              Which one do you actually need?
            </h2>
            <p className="mt-4 font-sans text-[var(--color-body)] text-base md:text-[17px] leading-relaxed">
              Both bring AI into a business. They solve different problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-2xl border-2 border-[var(--color-accent)] bg-[var(--color-surface)] p-7 md:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-3">
                1:1 Coaching, this page
              </p>
              <h3 className="font-sans text-[19px] md:text-[21px] font-semibold text-[var(--color-heading)] leading-snug tracking-[-0.015em] mb-4">
                One person, weekly, deep.
              </h3>
              <ul className="space-y-2.5 list-none m-0 p-0 font-sans text-[var(--color-body)] text-[15px] leading-relaxed">
                <li>One client, custom workflows around their real work</li>
                <li>Weekly 1:1 sessions, async between</li>
                <li>Voice and context tuned to you specifically</li>
                <li>Best for business leaders, entrepreneurs, and owner-operators</li>
                <li>Monthly retainer, three-month minimum</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 md:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-3">
                Team Training
              </p>
              <h3 className="font-sans text-[19px] md:text-[21px] font-semibold text-[var(--color-heading)] leading-snug tracking-[-0.015em] mb-4">
                A team, cohort, shared playbook.
              </h3>
              <ul className="space-y-2.5 list-none m-0 p-0 font-sans text-[var(--color-body)] text-[15px] leading-relaxed">
                <li>Whole team learns the same workflows together</li>
                <li>Structured sessions over a defined window</li>
                <li>Shared playbook the team keeps using after</li>
                <li>Best for businesses, brokerages, agencies of 5 to 50 people</li>
                <li>
                  See{" "}
                  <Link
                    href="/solutions/training"
                    className="text-[var(--color-accent)] no-underline hover:underline"
                  >
                    /solutions/training
                  </Link>{" "}
                  for the team version
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* REAL WORKFLOWS ───────────────────────────────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24">
        <Container size="wide">
          <div className="max-w-[820px] mb-10 md:mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-3">
              Workflows we build with you
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)" }}
            >
              Examples of what a session can produce.
            </h2>
            <p className="mt-4 font-sans text-[var(--color-body)] text-base md:text-[17px] leading-relaxed">
              Yours depends on what eats your week. A short sample of the
              workflows we build together in coaching:
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 list-none m-0 p-0 font-sans text-[var(--color-body)] text-[15.5px] leading-relaxed max-w-[1080px]">
            {EXAMPLE_WORKFLOWS.map((w) => (
              <li key={w} className="flex gap-3">
                <span className="text-[var(--color-accent)] shrink-0 leading-tight">
                  ·
                </span>
                <span>{w}</span>
              </li>
            ))}
          </ul>

          <p className="mt-10 font-sans text-[var(--color-muted)] text-sm md:text-[15px] leading-relaxed max-w-[680px]">
            For a longer read on how the coaching engagement runs, see the{" "}
            <Link
              href="/coaching"
              className="text-[var(--color-accent)] no-underline hover:underline"
            >
              coaching overview
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-16">
            <div className="md:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-3">
                FAQ
              </p>
              <h2
                className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
              >
                Questions people ask before they book.
              </h2>
            </div>
            <div className="md:col-span-8">
              <dl className="space-y-8">
                {FAQS.map((f) => (
                  <div key={f.q}>
                    <dt className="font-sans font-semibold text-[var(--color-heading)] text-base md:text-[17px] leading-snug tracking-[-0.01em] mb-2">
                      {f.q}
                    </dt>
                    <dd className="font-sans text-[var(--color-body)] text-[15px] md:text-base leading-relaxed">
                      {f.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
