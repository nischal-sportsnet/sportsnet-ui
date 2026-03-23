/**
 * Sportsnet Tailwind CSS preset
 *
 * Usage in tailwind.config.js (CJS):
 *   const sportsnetPreset = require('@sportsnet/ui/tailwind-preset');
 *   module.exports = { presets: [sportsnetPreset], ... }
 *
 * Usage in tailwind.config.ts (ESM):
 *   import sportsnetPreset from '@sportsnet/ui/tailwind-preset';
 *   export default { presets: [sportsnetPreset], ... }
 */

const sportsnetPreset = {
  theme: {
    extend: {
      colors: {
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
        surface: {
          page: '#f9fafb',
          card: '#ffffff',
          muted: '#f3f4f6',
          hover: '#f3f4f6',
          selected: '#eff6ff',
        },
      },
      fontFamily: {
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
      },
      zIndex: {
        dropdown: '10',
        sticky: '20',
        fixed: '30',
        'modal-backdrop': '40',
        modal: '50',
        popover: '60',
        tooltip: '70',
        notification: '80',
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        dropdown: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        modal: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
    },
  },
};

export default sportsnetPreset;
