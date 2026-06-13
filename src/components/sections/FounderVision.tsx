import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Homepage vision block. "Our vision" quote, presented without a founder
 * photo or name for now (de-personalized at the owner's request).
 */
export function FounderVision() {
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
                  &ldquo;We started VERA because the best AI moves faster than
                  any real estate business can keep up with on its own, and the
                  edge it creates, finding off-market deals, reading a market
                  early, going to the right seller first, goes to whoever has it
                  working in their deals today. We stay at the frontier, put
                  what we find to work, and only make money when our partners
                  close.&rdquo;
                </p>
                <div className="font-sans text-sm font-semibold text-[var(--color-heading)]">
                  VERA Solutions
                </div>
                <div className="font-sans text-xs text-[var(--color-muted)] mt-0.5">
                  Public Benefit Corporation
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
