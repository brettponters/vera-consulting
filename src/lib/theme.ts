/**
 * Palette tokens for non-CSS contexts (framer-motion inline styles,
 * canvas drawing, SVG stroke values, etc.)
 *
 * These values are the single source of truth alongside globals.css.
 * If a hex value changes here, it must also change in globals.css.
 */
export const palette = {
  bg:       "#FFFFFF",
  surface:  "#FAFAF7",
  body:     "#0F0F10",
  heading:  "#050507",
  muted:    "#5C5C66",
  hairline: "#E6E6EA",
  accent:   "#C97B3F",
  sage:     "#6B8775",
} as const;

export type PaletteKey = keyof typeof palette;
