# Theme System Documentation

This document explains how to use the new dynamic theme system in the nanobrowser Chrome extension.

## Overview

The extension now automatically adapts to the system's color scheme (light/dark mode) and uses colors that closely match the browser's UI. The theme system is built with CSS custom properties and provides both Tailwind utilities and React hooks for easy implementation.

## Features

- **Automatic Theme Detection**: Responds to system `prefers-color-scheme` changes
- **Browser-Matching Colors**: Uses colors that harmonize with Chrome's native UI
- **CSS Custom Properties**: Centralized theme management
- **Tailwind Integration**: Pre-built utility classes
- **React Hook**: Easy integration with React components

## Using the Theme System

### 1. React Hook (Recommended)

```tsx
import { useTheme } from '@extension/shared';

export function MyComponent() {
  const { isDarkMode, colors } = useTheme();
  
  return (
    <div style={{ backgroundColor: colors.bgPrimary }}>
      <h1 style={{ color: colors.textPrimary }}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </h1>
    </div>
  );
}
```

### 2. Tailwind CSS Classes

```tsx
export function MyComponent() {
  return (
    <div className="bg-theme-bg-primary text-theme-text-primary">
      <div className="border border-theme-border-primary bg-theme-bg-elevated p-4">
        <h1 className="text-theme-text-primary">Title</h1>
        <p className="text-theme-text-secondary">Subtitle</p>
        <button className="bg-theme-accent-primary text-white hover:bg-theme-accent-secondary">
          Action
        </button>
      </div>
    </div>
  );
}
```

### 3. CSS Custom Properties

```css
.my-component {
  background-color: rgb(var(--color-bg-primary));
  color: rgb(var(--color-text-primary));
  border: 1px solid rgb(var(--color-border-primary));
}

.my-button:hover {
  background-color: rgb(var(--color-hover-bg));
}
```

## Available Colors

### Background Colors
- `--color-bg-primary`: Main background color
- `--color-bg-secondary`: Secondary surfaces
- `--color-bg-tertiary`: Elevated surfaces
- `--color-bg-elevated`: Cards and modals

### Text Colors
- `--color-text-primary`: Primary text
- `--color-text-secondary`: Secondary text
- `--color-text-tertiary`: Muted text

### Border Colors
- `--color-border-primary`: Main borders
- `--color-border-secondary`: Subtle borders

### Accent Colors
- `--color-accent-primary`: Primary accent (Sky-500/Sky-400)
- `--color-accent-secondary`: Secondary accent
- `--color-accent-muted`: Muted accent

### Interactive States
- `--color-hover-bg`: Hover backgrounds
- `--color-active-bg`: Active/pressed backgrounds

### Semantic Colors
- `--color-success`: Success states (Green)
- `--color-warning`: Warning states (Amber)
- `--color-error`: Error states (Red)

## Tailwind Utility Classes

All colors are available as Tailwind utilities with the `theme-` prefix:

### Background Classes
- `bg-theme-bg-primary`
- `bg-theme-bg-secondary`
- `bg-theme-bg-tertiary`
- `bg-theme-bg-elevated`

### Text Classes
- `text-theme-text-primary`
- `text-theme-text-secondary`
- `text-theme-text-tertiary`

### Border Classes
- `border-theme-border-primary`
- `border-theme-border-secondary`

### Accent Classes
- `bg-theme-accent-primary`
- `text-theme-accent-primary`
- `hover:bg-theme-accent-secondary`

## Migration Guide

### From Manual Dark Mode Checks

**Before:**
```tsx
const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  setIsDarkMode(darkModeMediaQuery.matches);
  // ... event listeners
}, []);

return (
  <div className={isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-black'}>
    Content
  </div>
);
```

**After:**
```tsx
import { useTheme } from '@extension/shared';

const { isDarkMode } = useTheme();

return (
  <div className="bg-theme-bg-primary text-theme-text-primary">
    Content
  </div>
);
```

### From Hardcoded Colors

**Before:**
```tsx
<div className="bg-slate-800 border-slate-700 text-gray-200">
  <button className="bg-sky-600 hover:bg-sky-700">Click me</button>
</div>
```

**After:**
```tsx
<div className="bg-theme-bg-secondary border-theme-border-primary text-theme-text-primary">
  <button className="bg-theme-accent-primary hover:bg-theme-accent-secondary">Click me</button>
</div>
```

## Best Practices

1. **Use the React Hook**: For complex components that need theme awareness
2. **Prefer Tailwind Classes**: For simple styling, use `theme-*` utility classes
3. **Use CSS Custom Properties**: For custom CSS or complex animations
4. **Test Both Modes**: Always test your components in both light and dark modes
5. **Maintain Contrast**: Ensure sufficient contrast for accessibility

## Component Examples

### Card Component
```tsx
import { useTheme } from '@extension/shared';

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-theme-bg-elevated border border-theme-border-primary rounded-lg p-4 shadow-sm">
      {children}
    </div>
  );
}
```

### Button Component
```tsx
export function Button({ variant = 'primary', children, ...props }) {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors";
  
  const variantClasses = {
    primary: "bg-theme-accent-primary text-white hover:bg-theme-accent-secondary",
    secondary: "bg-theme-bg-tertiary text-theme-text-primary hover:bg-theme-hover-bg",
    ghost: "text-theme-text-secondary hover:bg-theme-hover-bg"
  };
  
  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
}
```

## Implementation Notes

- The theme system automatically detects system color scheme changes
- Colors are designed to harmonize with Chrome's native UI
- CSS custom properties enable smooth transitions between themes
- All colors maintain proper contrast ratios for accessibility
- The system is extensible for future color additions

## Troubleshooting

### Theme not updating
- Ensure you're using `useTheme()` hook or CSS custom properties
- Check that components are re-rendering when theme changes

### Colors not appearing
- Verify CSS custom properties are properly included in your build
- Make sure Tailwind is configured to include theme utility classes

### Build errors
- Ensure all CSS custom properties are properly defined
- Check that Tailwind configuration includes theme colors
