"use client";

import { useTheme } from '../context/ThemeContext';
import { Palette } from 'lucide-react';
import { ThemeType } from '../types/theme';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const themes: ThemeType[] = ['default', 'sunset', 'forest', 'ocean'];

  return (
    <div className="flex items-center gap-2">
      <Palette className="w-5 h-5 text-gray-400" />
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as ThemeType)}
        className="bg-secondary/50 text-foreground rounded-lg px-3 py-1 outline-none 
                 border border-gray-700/50 focus:border-primary/50"
      >
        {themes.map((t) => (
          <option key={t} value={t}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
} 