import { useEffect, useState } from 'react';

export interface ThemeColors {
  isDarkMode: boolean;
  colors: {
    bgPrimary: string;
    bgSecondary: string;
    bgTertiary: string;
    bgElevated: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    borderPrimary: string;
    borderSecondary: string;
    accentPrimary: string;
    accentSecondary: string;
    accentMuted: string;
    hoverBg: string;
    activeBg: string;
    success: string;
    warning: string;
    error: string;
  };
}

/**
 * Custom hook to manage theme state and provide consistent colors across the extension
 */
export function useTheme(): ThemeColors {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Get colors based on current theme
  const colors = {
    // Background colors using CSS custom properties
    bgPrimary: 'rgb(var(--color-bg-primary))',
    bgSecondary: 'rgb(var(--color-bg-secondary))',
    bgTertiary: 'rgb(var(--color-bg-tertiary))',
    bgElevated: 'rgb(var(--color-bg-elevated))',

    // Text colors
    textPrimary: 'rgb(var(--color-text-primary))',
    textSecondary: 'rgb(var(--color-text-secondary))',
    textTertiary: 'rgb(var(--color-text-tertiary))',

    // Border colors
    borderPrimary: 'rgb(var(--color-border-primary))',
    borderSecondary: 'rgb(var(--color-border-secondary))',

    // Accent colors
    accentPrimary: 'rgb(var(--color-accent-primary))',
    accentSecondary: 'rgb(var(--color-accent-secondary))',
    accentMuted: 'rgb(var(--color-accent-muted))',

    // Interactive states
    hoverBg: 'rgb(var(--color-hover-bg))',
    activeBg: 'rgb(var(--color-active-bg))',

    // Semantic colors
    success: 'rgb(var(--color-success))',
    warning: 'rgb(var(--color-warning))',
    error: 'rgb(var(--color-error))',
  };

  return {
    isDarkMode,
    colors,
  };
}

/**
 * Helper function to get CSS custom property value
 */
export function getCSSCustomProperty(property: string): string {
  return `rgb(var(${property}))`;
}

/**
 * Helper function to create Tailwind classes that use CSS custom properties
 */
export function getThemeClasses() {
  return {
    // Background classes
    bgPrimary: 'bg-[rgb(var(--color-bg-primary))]',
    bgSecondary: 'bg-[rgb(var(--color-bg-secondary))]',
    bgTertiary: 'bg-[rgb(var(--color-bg-tertiary))]',
    bgElevated: 'bg-[rgb(var(--color-bg-elevated))]',

    // Text classes
    textPrimary: 'text-[rgb(var(--color-text-primary))]',
    textSecondary: 'text-[rgb(var(--color-text-secondary))]',
    textTertiary: 'text-[rgb(var(--color-text-tertiary))]',

    // Border classes
    borderPrimary: 'border-[rgb(var(--color-border-primary))]',
    borderSecondary: 'border-[rgb(var(--color-border-secondary))]',

    // Accent classes
    accentPrimary: 'text-[rgb(var(--color-accent-primary))]',
    accentSecondary: 'text-[rgb(var(--color-accent-secondary))]',
    accentMuted: 'text-[rgb(var(--color-accent-muted))]',

    // Background accent classes
    bgAccentPrimary: 'bg-[rgb(var(--color-accent-primary))]',
    bgAccentSecondary: 'bg-[rgb(var(--color-accent-secondary))]',
    bgAccentMuted: 'bg-[rgb(var(--color-accent-muted))]',

    // Interactive states
    hoverBg: 'hover:bg-[rgb(var(--color-hover-bg))]',
    activeBg: 'active:bg-[rgb(var(--color-active-bg))]',

    // Semantic classes
    textSuccess: 'text-[rgb(var(--color-success))]',
    textWarning: 'text-[rgb(var(--color-warning))]',
    textError: 'text-[rgb(var(--color-error))]',
    bgSuccess: 'bg-[rgb(var(--color-success))]',
    bgWarning: 'bg-[rgb(var(--color-warning))]',
    bgError: 'bg-[rgb(var(--color-error))]',
  };
}
