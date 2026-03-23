/**
 * Sportsnet spacing & layout tokens
 */

/** Z-index layers */
export const zIndex = {
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  notification: 80,
} as const;

/** Breakpoints (px) */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/** Border radius tokens */
export const borderRadius = {
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  full: '9999px',
} as const;

/** Box shadow tokens */
export const boxShadow = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

/** Animation durations (ms) */
export const animationDuration = {
  instant: 0,
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

/** Icon sizes (Tailwind classes) */
export const iconSize = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'h-10 w-10',
} as const;

/** Modal sizes (Tailwind classes) */
export const modalSize = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-7xl',
} as const;

/** Table configuration */
export const tableConfig = {
  defaultPageSize: 20,
  pageSizeOptions: [20, 50, 100],
  mobileBreakpoint: 768,
  checkboxWidth: 'w-12',
  actionsWidth: 'w-32',
} as const;

/** Form configuration */
export const formConfig = {
  debounceDelay: 300,
  autosaveDelay: 1000,
  maxFileSize: 10 * 1024 * 1024,
  textareaMinRows: 3,
  textareaMaxRows: 10,
} as const;
