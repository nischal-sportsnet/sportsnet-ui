/**
 * Sportsnet typography tokens
 */

/** System font stack - performance-first, no external font loading */
export const fontFamily = {
  sans: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ],
} as const;

/** Base font size: 14px for compact, information-dense UIs */
export const baseFontSize = '14px';

/** Font size scale */
export const fontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }],
  sm: ['0.875rem', { lineHeight: '1.25rem' }],
  base: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.125rem', { lineHeight: '1.75rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
} as const;

/** Font weight scale */
export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

/** Common typography class patterns */
export const typographyPatterns = {
  pageTitle: 'text-2xl font-semibold text-gray-900',
  sectionHeader: 'text-lg font-semibold text-gray-900',
  formLabel: 'text-sm font-medium text-gray-700',
  body: 'text-sm text-gray-700',
  secondary: 'text-sm text-gray-500',
  tertiary: 'text-xs text-gray-400',
  caption: 'text-xs text-gray-500',
} as const;
