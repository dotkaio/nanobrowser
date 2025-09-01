import type { Config } from 'tailwindcss/types/config';

export default {
  theme: {
    extend: {
      colors: {
        // Theme colors using CSS custom properties
        'theme-bg-primary': 'rgb(var(--color-bg-primary))',
        'theme-bg-secondary': 'rgb(var(--color-bg-secondary))',
        'theme-bg-tertiary': 'rgb(var(--color-bg-tertiary))',
        'theme-bg-elevated': 'rgb(var(--color-bg-elevated))',
        'theme-text-primary': 'rgb(var(--color-text-primary))',
        'theme-text-secondary': 'rgb(var(--color-text-secondary))',
        'theme-text-tertiary': 'rgb(var(--color-text-tertiary))',
        'theme-border-primary': 'rgb(var(--color-border-primary))',
        'theme-border-secondary': 'rgb(var(--color-border-secondary))',
        'theme-accent-primary': 'rgb(var(--color-accent-primary))',
        'theme-accent-secondary': 'rgb(var(--color-accent-secondary))',
        'theme-accent-muted': 'rgb(var(--color-accent-muted))',
        'theme-hover-bg': 'rgb(var(--color-hover-bg))',
        'theme-active-bg': 'rgb(var(--color-active-bg))',
        'theme-success': 'rgb(var(--color-success))',
        'theme-warning': 'rgb(var(--color-warning))',
        'theme-error': 'rgb(var(--color-error))',
      },
    },
  },
  plugins: [],
} as Omit<Config, 'content'>;
