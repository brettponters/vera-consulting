interface HairlineProps {
  /**
   * "full"      — extends edge-to-edge (inside its parent's padding)
   * "contained" — respects parent padding; default
   */
  variant?: "full" | "contained";
  className?: string;
}

/**
 * Thin horizontal rule styled to the hairline/divider color (#E2D8C6).
 * Use between sections, inside cards, or under the header.
 */
export function Hairline({ variant = "contained", className = "" }: HairlineProps) {
  const bleed = variant === "full" ? "-mx-6 md:-mx-10 lg:-mx-12" : "";
  return (
    <hr
      className={`border-0 border-t border-[var(--color-hairline)] ${bleed} ${className}`}
    />
  );
}
