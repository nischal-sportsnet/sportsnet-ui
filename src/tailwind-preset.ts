import type { Config } from 'tailwindcss';
import { colors } from './tokens/colors';
import { fontFamily } from './tokens/typography';
import { zIndex, boxShadow } from './tokens/spacing';

/**
 * Sportsnet Tailwind CSS preset
 *
 * Usage in your tailwind.config.js:
 * ```js
 * module.exports = {
 *   presets: [require('@sportsnet/ui/tailwind-preset')],
 *   content: [...],
 * }
 * ```
 */
const sportsnetPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        brand: colors.brand,
        surface: {
          page: colors.surface.page,
          card: colors.surface.card,
          muted: colors.surface.muted,
          hover: colors.surface.hover,
          selected: colors.surface.selected,
        },
      },
      fontFamily: {
        sans: fontFamily.sans as unknown as string[],
      },
      zIndex: {
        dropdown: String(zIndex.dropdown),
        sticky: String(zIndex.sticky),
        fixed: String(zIndex.fixed),
        'modal-backdrop': String(zIndex.modalBackdrop),
        modal: String(zIndex.modal),
        popover: String(zIndex.popover),
        tooltip: String(zIndex.tooltip),
        notification: String(zIndex.notification),
      },
      boxShadow: {
        card: boxShadow.sm,
        dropdown: boxShadow.lg,
        modal: boxShadow.xl,
      },
    },
  },
};

export default sportsnetPreset;
