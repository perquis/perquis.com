import { useTheme } from 'next-themes';
import { type Children, createContext, useContext, useMemo } from 'react';

interface Color {
  backgroundColor: string;
  foregroundColor: string;
}

type ThemeServiceContext = {
  isPreferenceSystem: boolean;
  colors: Color;
};

const ThemeService = createContext<ThemeServiceContext>({
  isPreferenceSystem: false,
  colors: {
    backgroundColor: '',
    foregroundColor: '',
  },
});

export const ThemeServiceProvider = ({ children }: Children) => {
  const { theme } = useTheme();
  const dataTheme = typeof document !== 'undefined' ? document.querySelector('html')?.getAttribute('data-theme') ?? '' : '';

  const isPreferenceSystem = theme === 'system' ? dataTheme === 'dark' : theme === 'dark';

  const backgroundColor = useMemo(() => (isPreferenceSystem ? '#233243' : '#dee5ed'), [isPreferenceSystem]);
  const foregroundColor = useMemo(() => (isPreferenceSystem ? '#1a2532' : '#cdd8e5'), [isPreferenceSystem]);

  const colors = { backgroundColor, foregroundColor };

  return <ThemeService.Provider value={{ isPreferenceSystem, colors }}>{children}</ThemeService.Provider>;
};

export const useThemeService = () => useContext(ThemeService);
