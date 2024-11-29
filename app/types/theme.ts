export type ThemeType = 'default' | 'sunset' | 'forest' | 'ocean';

export interface Theme {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
}

export const themes: Record<ThemeType, Theme> = {
  default: {
    background: '#0a0a0a',
    foreground: '#ededed',
    primary: '#3b82f6',
    secondary: '#1f2937',
    accent: '#6366f1'
  },
  sunset: {
    background: '#18181b',
    foreground: '#fafafa',
    primary: '#f97316',
    secondary: '#3f3f46',
    accent: '#ec4899'
  },
  forest: {
    background: '#064e3b',
    foreground: '#ecfdf5',
    primary: '#10b981',
    secondary: '#065f46',
    accent: '#34d399'
  },
  ocean: {
    background: '#0c4a6e',
    foreground: '#f0f9ff',
    primary: '#0ea5e9',
    secondary: '#0369a1',
    accent: '#38bdf8'
  }
}; 