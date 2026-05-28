import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SOLUTIONS } from "../_data";

interface SolutionLayoutProps {
  eyebrow: string;
  title: string;
  intro: string;
  forWho: string;
  whatYouGet: string[];
  currentSlug: string;
}

export function SolutionLayout({
  eyebrow,
  title,
  intro,
  forWho,
  whatYouGet,
  currentSlug,
}: SolutionLayoutProps) {
  const others = SOLUTIONS.filter((s) => s.slug !== currentSlug);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] pt-24 pb-16 md:pt-32 md:pb-20">
        <Container size="wide">
          <div className="max-w-[860px]">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-4">
              {eyebrow}
            </p>
            <h1
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.025em] leading-[1.02] mb-7"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
            >
              {title}
            </h1>
            <p
              className="font-sans text-[var(--color-body)] leading-relaxed mb-10 max-w-[720px]"
              style={{ fontSize: "clamp(1.0625rem, 1.35vw, 1.25rem)" }}
            >
              {intro}
            </p>
            <Button href="/contact" variant="filled" size="lg" arrow>
              Book a call
            </Button>
          </div>
        </Container>
      </section>

      {/* ── WHO / WHAT ────────────────────────────────── */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-16 max-w-[1080px]">
            <div className="md:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
                Who it&apos;s for
              </p>
              <p className="font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed">
                {forWho}
              </p>
            </div>
            <div className="md:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-4">
                What you get
              </p>
              <ul className="space-y-3.5 list-none m-0 p-0 font-sans text-[var(--color-body)] text-base leading-relaxed">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[var(--color-accent)] shrink-0 leading-tight">
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── OTHER SOLUTIONS ───────────────────────────── */}
      <section className="bg-[var(--color-bg)] py-12 md:py-16 border-t border-[var(--color-hairline)]">
        <Container size="wide">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-5">
            Other solutions
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="font-sans text-sm text-[var(--color-heading)] hover:text-[var(--color-accent)] transition-colors no-underline"
              >
                {s.label}
              </Link>
            ))}
            <Link
              href="/solutions"
              className="font-sans text-sm font-medium text-[var(--color-accent)] hover:opacity-80 transition-opacity no-underline ml-2"
            >
              See all →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
