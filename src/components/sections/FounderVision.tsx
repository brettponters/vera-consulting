import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Homepage vision block. "Our vision" quote with founder photo + name.
 */
export function FounderVision({ outbound = false }: { outbound?: boolean }) {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-surface)]">
      <Container size="wide">
        <div className="max-w-[820px] mx-auto">
          <Reveal>
            <Eyebrow className="mb-6">Our vision</Eyebrow>
            <div className="flex gap-5 items-stretch">
              <div className="w-[3px] bg-[var(--color-navy)] rounded-sm shrink-0" />
              <div>
                <p className="font-sans italic text-xl md:text-2xl text-[var(--color-heading)] leading-relaxed mb-6">
                  &ldquo;{outbound
                    ? "We built VERA around a simple idea: agencies that do excellent work should not have to rely on referrals or spend their week chasing new business. We combine good judgment with modern automation, run the system ourselves, and stay accountable to the conversations it creates."
                    : "We started VERA because the best AI moves faster than any real estate business can keep up with on its own, and the edge it creates, finding off-market deals, reading a market early, going to the right seller first, goes to whoever has it working in their deals today. We stay at the frontier, put what we find to work, and only make money when our partners close."}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="/founder.jpg"
                      alt="Brett Ponters, founder of VERA"
                      fill
                      sizes="48px"
                      className="object-cover"
                      style={{ objectPosition: "50% 22%" }}
                    />
                  </div>
                  <div>
                    <div className="font-sans text-sm font-semibold text-[var(--color-heading)]">
                      Brett Ponters
                    </div>
                    <div className="font-sans text-xs text-[var(--color-muted)] mt-0.5">
                      Founder, VERA Solutions
                    </div>
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
