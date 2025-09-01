import { useState, useEffect } from 'react';

interface ThemeColors {
  textPrimary: string;
  textSecondary: string;
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;
  bgElevated: string;
  borderPrimary: string;
  borderSecondary: string;
  accentPrimary: string;
  accentSecondary: string;
  hoverBg: string;
  success: string;
  warning: string;
  error: string;
}

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const colors: ThemeColors = {
    textPrimary: isDarkMode ? '#ffffff' : '#111827',
    textSecondary: isDarkMode ? '#9ca3af' : '#4b5563',
    bgPrimary: isDarkMode ? '#111827' : '#ffffff',
    bgSecondary: isDarkMode ? '#1f2937' : '#f3f4f6',
    bgTertiary: isDarkMode ? '#374151' : '#e5e7eb',
    bgElevated: isDarkMode ? '#1f2937' : '#ffffff',
    borderPrimary: isDarkMode ? '#374151' : '#e5e7eb',
    borderSecondary: isDarkMode ? '#4b5563' : '#d1d5db',
    accentPrimary: '#3b82f6',
    accentSecondary: '#2563eb',
    hoverBg: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
    success: isDarkMode ? '#10b981' : '#047857',
    warning: isDarkMode ? '#f59e0b' : '#b45309',
    error: isDarkMode ? '#ef4444' : '#b91c1c',
  };

  return { isDarkMode, colors };
}
