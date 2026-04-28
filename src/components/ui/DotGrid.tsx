'use client';

export function DotGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(237,237,237,0.12) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage:
          'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
      }}
    />
  );
}
