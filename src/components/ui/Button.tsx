import { type ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "filled" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Append a right-pointing chevron after the label */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

interface ButtonAsButton extends BaseButtonProps {
  href?: undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
  onClick?: undefined;
  type?: undefined;
  disabled?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  filled:
    "bg-[var(--color-accent)] text-white shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_-8px_rgba(201,123,63,0.55)] hover:-translate-y-px active:translate-y-0 active:opacity-90",
  ghost:
    "bg-transparent text-[var(--color-body)] border border-[var(--color-hairline)] hover:border-[var(--color-body)] hover:bg-[var(--color-surface)] active:opacity-80",
};

const BASE =
  "group inline-flex items-center gap-1.5 rounded-full font-sans font-medium no-underline transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:opacity-40 disabled:pointer-events-none";

/**
 * Button primitive — filled (terracotta) + ghost variants, rounded-full.
 *
 * Renders a <button> when no href is provided, a Next.js <Link> otherwise.
 *
 * Props:
 * - variant: "filled" (default) | "ghost"
 * - size: "sm" | "md" (default) | "lg"
 * - arrow: boolean — appends a › chevron
 * - href: string — render as Link
 * - onClick, type, disabled: standard button props (when no href)
 */
export function Button({
  variant = "filled",
  size = "md",
  arrow = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${BASE} ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`;

  const inner = (
    <>
      {children}
      {arrow && (
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
        >
          <path d="M2 7h10M8 3l4 4-4 4" />
        </svg>
      )}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <Link href={rest.href} className={classes} onClick={rest.onClick}>
        {inner}
      </Link>
    );
  }

  const { href: _href, ...buttonRest } = rest as ButtonAsButton & { href?: undefined };
  return (
    <button className={classes} {...buttonRest}>
      {inner}
    </button>
  );
}
