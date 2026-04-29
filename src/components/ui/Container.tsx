import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  /**
   * "prose" — ~720px, for essay-feel sections (About, Reading, body copy)
   * "wide"  — ~1200px, for hero, work grids, calendar showpiece
   */
  size?: "prose" | "wide";
  className?: string;
}

/**
 * Max-width wrapper with consistent horizontal padding.
 * Use "prose" for long-form reading sections; "wide" for full-bleed layouts.
 */
export function Container({
  children,
  size = "wide",
  className = "",
}: ContainerProps) {
  const maxWidth =
    size === "prose" ? "max-w-[720px]" : "max-w-[1200px]";

  return (
    <div
      className={`mx-auto w-full px-6 md:px-10 lg:px-12 ${maxWidth} ${className}`}
    >
      {children}
    </div>
  );
}
