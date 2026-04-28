/**
 * Design tokens — single source of truth for JS/TS consumers.
 * Tailwind reads the same values from globals.css @theme block.
 */
export const colors = {
  bg: {
    base: '#0c0b0a',
    subtle: '#11100e',
    deep: '#080706',
    elevated: '#15130f',
  },
  fg: {
    base: '#efece6',
    muted: '#8a8680',
  },
  accent: {
    DEFAULT: '#e8693a',
  },
} as const;
