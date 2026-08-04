import { type ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/**
 * Small uppercase label used above section headings.
 * Examples: "Selected work" / "Research-backed" / "AI consulting"
 */
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`font-sans text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)] ${className}`}
    >
      {children}
    </p>
  );
}
