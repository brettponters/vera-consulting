/**
 * LinkedIn banner artifact.
 *
 * Renders a 4:1 banner preview followed by a "variants" strip, three
 * miniature renders the user could swap in. This matches how a real
 * AI canvas would offer alternates.
 */
export function BannerArtifact() {
  return (
    <div className="space-y-6">
      <BannerPreview variant="editorial" large />

      <div className="flex items-center justify-between">
        <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold">
          Variants
        </p>
        <p className="font-mono text-[10.5px] text-[var(--color-muted)]">
          1584 × 396 px · sRGB
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <VariantChip variant="editorial" label="V mark + tagline" active />
        <VariantChip variant="compositional" label="Wordmark block" />
        <VariantChip variant="minimal" label="Wordmark only" />
      </div>

      <FilePathRow path="deliverables/banners/linkedin-cover.png" />
    </div>
  );
}

type VariantKind = "editorial" | "compositional" | "minimal";

function BannerPreview({
  variant,
  large = false,
}: {
  variant: VariantKind;
  large?: boolean;
}) {
  return (
    <div
      className={[
        "aspect-[4/1] w-full rounded-md border border-[var(--color-hairline)] bg-[var(--color-bg)] relative overflow-hidden",
        large ? "shadow-[0_4px_22px_rgba(15,15,16,0.06)]" : "",
      ].join(" ")}
    >
      {variant === "editorial" && <EditorialContent large={large} />}
      {variant === "compositional" && <CompositionalContent />}
      {variant === "minimal" && <MinimalContent />}
    </div>
  );
}

function EditorialContent({ large }: { large: boolean }) {
  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-[var(--color-accent)]" />
      <div className="absolute inset-0 flex items-center px-6 md:px-10">
        <div className="flex items-center gap-5">
          <VMark size={large ? 56 : 26} />
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span
                className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-none"
                style={{ fontSize: large ? "clamp(1.6rem, 3vw, 2.6rem)" : "0.9rem" }}
              >
                VERA
              </span>
              <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            </div>
            {large && (
              <p className="font-sans text-xs md:text-sm text-[var(--color-muted)] tracking-wide">
                AI strategy for operators in regulated work
              </p>
            )}
          </div>
        </div>
      </div>
      {large && (
        <div className="absolute bottom-2.5 right-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          1584 × 396
        </div>
      )}
    </>
  );
}

function CompositionalContent() {
  return (
    <div className="absolute inset-0 grid grid-cols-5 gap-1 p-1.5">
      <div className="col-span-2 bg-[var(--color-accent)]/90 rounded-sm flex items-center justify-center">
        <VMark size={26} stroke="#FAFAF7" />
      </div>
      <div className="col-span-3 bg-[var(--color-surface)] rounded-sm flex items-center px-3">
        <div className="space-y-0.5">
          <p className="font-sans font-semibold text-[var(--color-heading)] tracking-tight text-[11px]">
            VERA
          </p>
          <p className="font-sans text-[8px] text-[var(--color-muted)] tracking-wide">
            veraconsulting.co
          </p>
        </div>
      </div>
    </div>
  );
}

function MinimalContent() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex items-baseline gap-1.5">
        <span className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.04em] text-base">
          VERA
        </span>
        <span className="block h-1 w-1 rounded-full bg-[var(--color-accent)]" />
      </div>
    </div>
  );
}

function VariantChip({
  variant,
  label,
  active = false,
}: {
  variant: VariantKind;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-md border bg-[var(--color-bg)] overflow-hidden transition-colors",
        active
          ? "border-[var(--color-accent)]/60 ring-[1px] ring-[var(--color-accent)]/30"
          : "border-[var(--color-hairline)]",
      ].join(" ")}
    >
      <BannerPreview variant={variant} />
      <div className="flex items-center justify-between px-2 py-1.5 border-t border-[var(--color-hairline)]">
        <span
          className={[
            "font-sans text-[10px] uppercase tracking-[0.2em] font-semibold",
            active ? "text-[var(--color-accent)]" : "text-[var(--color-muted)]",
          ].join(" ")}
        >
          {label}
        </span>
        {active && (
          <span className="font-mono text-[9px] text-[var(--color-muted)]">
            selected
          </span>
        )}
      </div>
    </div>
  );
}

function VMark({ size, stroke = "#C97B3F" }: { size: number; stroke?: string }) {
  return (
    <svg
      viewBox="0 0 360 540"
      style={{ height: size, width: "auto" }}
      aria-hidden="true"
    >
      <path
        d="M 0 0 L 180 540 L 360 0"
        stroke={stroke}
        strokeWidth="72"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function FilePathRow({ path }: { path: string }) {
  return (
    <div className="flex items-center gap-2 pt-3 border-t border-[var(--color-hairline)]">
      <svg viewBox="0 0 12 12" className="h-3 w-3 text-[var(--color-muted)]" aria-hidden="true">
        <path
          d="M2 3.5h3l1 1h4v4.5H2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-mono text-[10.5px] text-[var(--color-muted)]">{path}</span>
    </div>
  );
}
