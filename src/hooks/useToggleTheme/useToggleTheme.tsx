import { useTheme } from 'next-themes';

import { useThemeCondition } from '../useThemeCondition/useThemeCondition';

export const useToggleTheme = () => {
  const { setTheme } = useTheme();
  const isActive = useThemeCondition();
  const toggleTheme = () => setTheme(isActive ? 'light' : 'dark');

  return { isActive, toggleTheme };
};
