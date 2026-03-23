/**
 * Sportsnet brand color palette
 * Derived from the SIMS platform design system
 */
export const colors = {
  /** Brand red used in logo and accent elements */
  brand: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#E31E24',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },

  /** Primary UI color - gray-900 based for buttons, text, focus rings */
  primary: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },

  /** Status colors */
  status: {
    success: {
      light: '#dcfce7',
      DEFAULT: '#16a34a',
      dark: '#166534',
      bg: '#f0fdf4',
      text: '#166534',
      badge: { bg: '#dcfce7', text: '#166534' },
    },
    warning: {
      light: '#fef9c3',
      DEFAULT: '#ca8a04',
      dark: '#854d0e',
      bg: '#fefce8',
      text: '#854d0e',
      badge: { bg: '#fef9c3', text: '#854d0e' },
    },
    error: {
      light: '#fee2e2',
      DEFAULT: '#dc2626',
      dark: '#991b1b',
      bg: '#fef2f2',
      text: '#991b1b',
      badge: { bg: '#fee2e2', text: '#991b1b' },
    },
    info: {
      light: '#dbeafe',
      DEFAULT: '#2563eb',
      dark: '#1e40af',
      bg: '#eff6ff',
      text: '#1e40af',
      badge: { bg: '#dbeafe', text: '#1e40af' },
    },
  },

  /** Semantic surface colors */
  surface: {
    page: '#f9fafb',
    card: '#ffffff',
    muted: '#f3f4f6',
    hover: '#f3f4f6',
    selected: '#eff6ff',
    overlay: 'rgba(107, 114, 128, 0.75)',
  },

  /** Semantic border colors */
  border: {
    DEFAULT: '#e5e7eb',
    light: '#f3f4f6',
    dark: '#d1d5db',
    focus: '#111827',
  },

  /** Semantic text colors */
  text: {
    primary: '#111827',
    secondary: '#6b7280',
    tertiary: '#9ca3af',
    muted: '#d1d5db',
    inverse: '#ffffff',
    link: '#2563eb',
  },
} as const;

/** Margin indicator color thresholds */
export const marginColors = {
  excellent: { min: 30, class: 'text-green-600' },
  good: { min: 20, class: 'text-blue-600' },
  acceptable: { min: 15, class: 'text-yellow-600' },
  low: { min: 10, class: 'text-orange-600' },
  poor: { min: 0, class: 'text-red-600' },
} as const;

/** Status badge color mappings (Tailwind class strings) */
export const statusBadgeColors = {
  rfp: {
    DRAFT: 'bg-gray-100 text-gray-800',
    SENT: 'bg-blue-100 text-blue-800',
    PENDING: 'bg-yellow-100 text-yellow-800',
    RECEIVED: 'bg-purple-100 text-purple-800',
    REVIEWING: 'bg-orange-100 text-orange-800',
    APPROVED: 'bg-green-100 text-green-800',
    REJECTED: 'bg-red-100 text-red-800',
    CANCELLED: 'bg-gray-100 text-gray-800',
  },
  ticket: {
    AVAILABLE: 'bg-green-100 text-green-800',
    BLOCKED: 'bg-orange-100 text-orange-800',
    SOLD: 'bg-blue-100 text-blue-800',
    CANCELLED: 'bg-gray-100 text-gray-800',
  },
  collection: {
    DRAFT: 'bg-gray-100 text-gray-800',
    PUBLISHED: 'bg-green-100 text-green-800',
    ARCHIVED: 'bg-orange-100 text-orange-800',
  },
} as const;
