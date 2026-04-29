"use client";

import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/content/about";

/**
 * About — founder-forward section on the home page.
 *
 * This is NOT the /about route. It is a short, warm section that makes
 * the page become a person. The /about route is a separate concern.
 *
 * Layout: wide container. At md+, photo column ~40% (2fr), text ~60% (3fr).
 */
export default function About() {
  return (
    <section
      id="about"
      aria-label="About RAIN"
      className="py-28 md:py-36"
    >
      <Container size="wide">
        <Hairline className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-start">
          {/* ── Founder photo ──────────────────────────────────────────── */}
          <Reveal delay={0} className="mx-auto md:mx-0 w-full max-w-[320px] md:max-w-none">
            {/* TODO: founder photo — replace src with real path once provided */}
            {/* Intentionally renders as a shaped placeholder if the src 404s */}
            {/* 4:5 portrait aspect ratio */}
            <img
              src={about.founderPhotoSrc}
              alt={about.founderName}
              width={400}
              height={500}
              className="w-full aspect-[4/5] object-cover object-top bg-[var(--color-surface)] border border-[var(--color-hairline)]"
              style={{ display: "block" }}
            />
          </Reveal>

          {/* ── Text ───────────────────────────────────────────────────── */}
          <div>
            <Reveal delay={0.1}>
              {/*
               * Founder paragraph — first-person, ~90 words.
               * Bracketed items are placeholders for founder to confirm.
               * Do NOT fabricate biographical specifics.
               */}
              <p className="font-sans text-[var(--color-body)] text-base leading-relaxed mb-5">
                {about.paragraph}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              {/* PBC statement — stated as fact, not marketing */}
              <p className="font-sans text-[var(--color-muted)] text-sm leading-relaxed mb-7">
                {about.pbcStatement}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href={about.moreLink.href}
                className="font-sans text-sm text-[var(--color-accent)] underline underline-offset-4 decoration-[var(--color-accent)] hover:opacity-75 transition-opacity duration-200"
              >
                {about.moreLink.label}
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
