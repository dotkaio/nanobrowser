import React from 'react';
import { useTheme } from './hooks/useTheme';

/**
 * Demo component showing different ways to use the theme system
 */
export function ThemeDemo() {
  const { isDarkMode, colors } = useTheme();

  return (
    <div className="bg-theme-bg-primary p-6 space-y-4">
      <h1 className="text-theme-text-primary text-2xl font-bold">Theme System Demo</h1>

      <p className="text-theme-text-secondary">Current mode: {isDarkMode ? 'Dark' : 'Light'}</p>

      {/* Card using Tailwind classes */}
      <div className="bg-theme-bg-elevated border border-theme-border-primary rounded-lg p-4">
        <h2 className="text-theme-text-primary text-lg font-semibold mb-2">Card with Tailwind Classes</h2>
        <p className="text-theme-text-secondary">
          This card uses Tailwind utility classes like <code>bg-theme-bg-elevated</code> and{' '}
          <code>border-theme-border-primary</code>.
        </p>
      </div>

      {/* Card using inline styles with colors from hook */}
      <div
        style={{
          backgroundColor: colors.bgElevated,
          border: `1px solid ${colors.borderPrimary}`,
          borderRadius: '0.5rem',
          padding: '1rem',
        }}>
        <h2 style={{ color: colors.textPrimary, fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
          Card with Inline Styles
        </h2>
        <p style={{ color: colors.textSecondary }}>This card uses inline styles with colors from the useTheme hook.</p>
      </div>

      {/* Buttons demonstrating different states */}
      <div className="space-x-2">
        <button className="bg-theme-accent-primary text-white px-4 py-2 rounded-lg hover:bg-theme-accent-secondary transition-colors">
          Primary Button
        </button>
        <button className="bg-theme-bg-tertiary text-theme-text-primary px-4 py-2 rounded-lg hover:bg-theme-hover-bg transition-colors">
          Secondary Button
        </button>
        <button className="text-theme-accent-primary px-4 py-2 rounded-lg hover:bg-theme-hover-bg transition-colors">
          Ghost Button
        </button>
      </div>

      {/* Semantic colors */}
      <div className="space-y-2">
        <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-theme-success">✅ Success message</p>
        </div>
        <div className="p-3 rounded-lg bg-amber-100 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <p className="text-theme-warning">⚠️ Warning message</p>
        </div>
        <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <p className="text-theme-error">❌ Error message</p>
        </div>
      </div>

      {/* CSS Custom Properties example */}
      <div className="theme-demo-custom">
        <h3 className="text-theme-text-primary text-lg font-semibold">CSS Custom Properties</h3>
        <p className="text-theme-text-secondary">This section uses CSS custom properties directly in a stylesheet.</p>
      </div>

      <style>{`
        .theme-demo-custom {
          background: rgb(var(--color-bg-tertiary));
          border: 1px solid rgb(var(--color-border-secondary));
          border-radius: 0.5rem;
          padding: 1rem;
          margin-top: 1rem;
        }
        
        .theme-demo-custom:hover {
          background: rgb(var(--color-hover-bg));
        }
      `}</style>
    </div>
  );
}
