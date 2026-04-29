/**
 * Palette tokens for non-CSS contexts (framer-motion inline styles,
 * canvas drawing, SVG stroke values, etc.)
 *
 * These values are the single source of truth alongside globals.css.
 * If a hex value changes here, it must also change in globals.css.
 */
export const palette = {
  bg:       "#F5EDE0",
  surface:  "#FAF6EC",
  body:     "#1A1818",
  heading:  "#131314",
  muted:    "#6B6359",
  hairline: "#E2D8C6",
  accent:   "#C97B3F",
  sage:     "#6B8775",
} as const;

export type PaletteKey = keyof typeof palette;
