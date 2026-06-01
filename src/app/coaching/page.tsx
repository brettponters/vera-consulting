import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FaqBlock, buildFaqJsonLd, type FaqItem } from "@/components/ui/FaqBlock";

const COACHING_FAQ: FaqItem[] = [
  {
    q: "What is 1:1 AI coaching?",
    a: "Private weekly sessions where we build AI into your actual practice, not a course and not a generic curriculum. We take the parts of your week that eat hours, follow-ups, listing prep, buyer research, contract admin, and design the workflows that handle them with you, on your real work.",
  },
  {
    q: "Who is it for?",
    a: "Real estate agents, teams, and brokers who want personal fluency in AI applied to how they actually run their business. Residential agents, listing specialists, buyer's agents, luxury agents, commercial brokers, and investor-focused agents. Not a team-wide rollout, just you and the work you do.",
  },
  {
    q: "Is it remote or in person?",
    a: "Remote, over Google Meet, with real responses between sessions. If you are near Boca Raton we can meet in person for the first session and the parts that go faster face to face.",
  },
  {
    q: "What does it cost?",
    a: "A monthly retainer, covered on the intro call once we know what you are trying to do. The call is twenty minutes and there is no pressure.",
  },
  {
    q: "How long is the commitment?",
    a: "Three months to start, then ongoing if it is working. By the end you are running the workflows yourself.",
  },
];

const faqJsonLd = buildFaqJsonLd(COACHING_FAQ);

export const metadata: Metadata = {
  title: "1:1 AI Coaching for Real Estate Agents | VERA",
  description:
    "Private weekly 1:1 AI coaching for real estate agents, teams, and brokers. Custom workflows built around listings, follow-ups, buyer research, and contract admin. Remote and South Florida in person.",
  alternates: {
    canonical: "/coaching",
  },
  openGraph: {
    title: "1:1 AI Coaching for Real Estate Agents | VERA",
    description:
      "Private weekly 1:1 AI coaching for real estate agents and brokers. Custom workflows around the real work of running your practice.",
    type: "website",
    url: "https://veraconsulting.co/coaching",
  },
  twitter: {
    card: "summary_large_image",
    title: "1:1 AI Coaching for Real Estate Agents | VERA",
    description:
      "Private weekly 1:1 AI coaching for real estate agents, teams, and brokers.",
  },
};

export default function CoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* HERO */}
      <section className="bg-[var(--color-bg)] relative overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32">
        <div
          aria-hidden="true"
          className="absolute -top-4 right-0 md:right-6 select-none pointer-events-none font-sans font-semibold text-[var(--color-hairline)] tracking-tighter leading-none"
          style={{ fontSize: "clamp(8rem, 22vw, 18rem)" }}
        >
          1:1
        </div>

        <Container size="wide">
          <div className="relative z-10 max-w-[960px] space-y-10">
            <div className="flex items-center gap-3">
              <span className="block h-[2px] w-8 bg-[var(--color-accent)]" />
              <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)] font-semibold">
                1:1 Coaching
              </span>
            </div>

            <h1
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.03em] leading-[0.98]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              1:1 AI coaching for real estate agents, teams, and brokers.
            </h1>

            <p
              className="font-sans text-[var(--color-body)] leading-relaxed max-w-[680px]"
              style={{ fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)" }}
            >
              Private weekly sessions, 1:1 with the founder, no handoff to
              anyone else. Built around how you specifically run your
              business. We design the AI workflows for the parts of your week
              that take hours, follow-ups, listing prep, buyer research,
              contract admin, and you keep them.
            </p>

            <div>
              <Button href="/contact" variant="filled" size="lg" arrow>
                Book an intro call
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-[var(--color-bg)] py-20 md:py-24 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-16 items-start max-w-[1080px]">
            <div className="md:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold">
                Who this is for
              </p>
            </div>
            <div className="md:col-span-8 space-y-5">
              <h2
                className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
              >
                Real estate agents who want personal AI coaching, not a team-wide rollout.
              </h2>
              <p className="font-sans text-[var(--color-body)] text-base md:text-[17px] leading-relaxed max-w-[640px]">
                Residential agents, listing specialists, buyer&rsquo;s agents,
                luxury agents, commercial brokers, and investor-focused agents.
                Personal fluency in AI applied to your actual practice, not a
                generic curriculum. We design the workflows for you. You
                don&rsquo;t configure tools.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* PROGRAM FACTS */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24">
        <Container size="wide">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            {[
              { k: "Cadence", v: "Weekly 60-minute 1:1 sessions" },
              { k: "Between", v: "Async support, real responses" },
              { k: "Commitment", v: "Three months, then ongoing" },
              {
                k: "Investment",
                v: "Monthly retainer, covered on the intro call",
              },
            ].map((row) => (
              <div key={row.k} className="space-y-2">
                <dt className="font-sans text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)] font-semibold">
                  {row.k}
                </dt>
                <dd className="font-sans text-[var(--color-heading)] text-base md:text-lg leading-snug font-medium">
                  {row.v}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* RELATED */}
      <section className="bg-[var(--color-bg)] py-16 md:py-20 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <p className="font-sans text-[var(--color-muted)] text-sm md:text-[15px] leading-relaxed max-w-[760px]">
            For workflows specific to your line of work, see the{" "}
            <Link
              href="/for"
              className="text-[var(--color-accent)] no-underline hover:underline"
            >
              vertical pages
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <FaqBlock
        items={COACHING_FAQ}
        eyebrow="Common questions"
        heading="What people ask before the first call."
        bg="bg-[var(--color-surface)]"
      />

      {/* CTA */}
      <section className="bg-[var(--color-bg)] py-28 md:py-36 relative overflow-hidden border-t border-[var(--color-hairline)]">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-20 bg-[var(--color-accent)]"
        />
        <Container size="prose">
          <div className="flex flex-col items-center text-center gap-10">
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.03em] leading-[0.98]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
            >
              Start with a conversation.
            </h2>
            <p className="font-sans text-[var(--color-body)] text-lg leading-relaxed max-w-prose">
              Twenty minutes, no pressure. We figure out together whether
              the program is right for what you're trying to do.
            </p>
            <Button href="/contact" variant="filled" size="lg" arrow>
              Book an intro call
            </Button>
            <p className="font-sans text-[var(--color-muted)] text-sm">
              Or write to{" "}
              <Link
                href="mailto:brett@veraconsulting.co"
                className="text-[var(--color-accent)] no-underline hover:underline"
              >
                brett@veraconsulting.co
              </Link>
            </p>
            <div className="pt-8 flex flex-col items-center gap-2">
              <span className="h-px w-10 bg-[var(--color-hairline)]" />
              <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-[var(--color-muted)] font-semibold">
                VERA
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
