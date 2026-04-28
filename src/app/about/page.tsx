import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ABOUT_PAGE } from '@/config/copy';
import Link from 'next/link';

export const metadata = {
  title: 'About — RAIN',
  description:
    'RAIN is a Public Benefit Corporation and AI consulting studio. Studio, structure, commitment, and contact.',
};

export default function AboutPage() {
  const { studio, structure, commitment, advisors, contact } = ABOUT_PAGE;

  return (
    <main className="bg-bg-base min-h-screen">

      {/* §5.1 Studio */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <Container narrow>
          <Reveal>
            <Eyebrow className="mb-6">{studio.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-fg-base mb-8">
              {studio.heading}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="font-sans text-lg leading-relaxed text-fg-muted">
              {studio.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* §5.2 Structure */}
      <section className="py-16 md:py-20 border-t border-black/[0.06]">
        <Container narrow>
          <Reveal>
            <Eyebrow className="mb-6">{structure.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base mb-8">
              {structure.heading}
            </h2>
          </Reveal>
          <div className="space-y-5">
            {structure.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.06}>
                <p className="font-sans text-lg leading-relaxed text-fg-muted">{p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* §5.3 The commitment */}
      <section className="py-16 md:py-20 border-t border-black/[0.06]">
        <Container narrow>
          <Reveal>
            <Eyebrow className="mb-6">{commitment.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base mb-8">
              {commitment.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="font-sans text-lg leading-relaxed text-fg-muted">
              {commitment.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* §5.4 Advisors */}
      <section className="py-16 md:py-20 border-t border-black/[0.06]">
        <Container narrow>
          <Reveal>
            <Eyebrow className="mb-6">{advisors.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base mb-8">
              {advisors.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="font-sans text-lg leading-relaxed text-fg-muted italic">
              {advisors.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* §5.5 Contact link */}
      <section className="py-16 md:py-20 border-t border-black/[0.06]">
        <Container narrow>
          <Reveal>
            <Eyebrow className="mb-6">{contact.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base mb-4">
              {contact.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="font-sans text-lg leading-relaxed text-fg-muted mb-8">
              {contact.body}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href={contact.ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-accent text-bg-base font-sans font-medium px-8 py-3.5 text-sm tracking-wide transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {contact.ctaLabel}
            </Link>
          </Reveal>
        </Container>
      </section>

    </main>
  );
}
