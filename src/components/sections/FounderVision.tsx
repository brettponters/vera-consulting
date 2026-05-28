import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Homepage founder vision block. Photo on the left, "Our vision" quote on the right.
 * Photo file expected at /public/brett.jpg.
 */
export function FounderVision() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-surface)]">
      <Container size="wide">
        <div className="max-w-[960px] mx-auto">
          <Reveal>
            <Eyebrow className="mb-6">Our vision</Eyebrow>
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
              {/* Photo column. Frame stays upright; the image inside
                  is rotated for editorial energy. */}
              <div
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shrink-0 ring-1 ring-[var(--color-hairline)] bg-[var(--color-bg)]"
                role="img"
                aria-label="Brett Ponters, Founder of VERA Consulting"
              >
                <div
                  aria-hidden="true"
                  className="absolute"
                  style={{
                    top: "-1%",
                    left: "-7%",
                    width: "114%",
                    height: "114%",
                    backgroundImage: "url('/brett.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center 22%",
                    transform: "rotate(2deg)",
                    transformOrigin: "center center",
                  }}
                />
              </div>

              {/* Quote + attribution column */}
              <div className="flex gap-5 items-stretch flex-1 min-w-0">
                <div className="w-[3px] bg-[var(--color-accent)] rounded-sm shrink-0" />
                <div>
                  <p className="font-sans italic text-lg md:text-xl text-[var(--color-heading)] leading-relaxed mb-6">
                    &ldquo;I started VERA because AI is going to change the
                    workforce at an unprecedented pace, and many companies are
                    not prepared for it. We believe in using AI to strengthen
                    human capabilities and being transparent about both the
                    risks and the opportunities ahead.&rdquo;
                  </p>
                  <div className="font-sans text-sm font-semibold text-[var(--color-heading)]">
                    Brett Ponters
                  </div>
                  <div className="font-sans text-xs text-[var(--color-muted)] mt-0.5">
                    Founder, VERA Consulting
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
