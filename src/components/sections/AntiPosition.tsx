import { Container } from '@/components/layout/Container';
import { ANTI_POSITION } from '@/config/copy';

export function AntiPosition() {
  return (
    <div className="border-y border-fg-base/10 bg-bg-subtle">
      <Container>
        <p className="py-4 text-center font-sans text-xs font-medium uppercase tracking-[0.18em] text-fg-muted">
          {ANTI_POSITION.line}
        </p>
      </Container>
    </div>
  );
}
