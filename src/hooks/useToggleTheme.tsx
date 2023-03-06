import { useTheme } from 'next-themes';

export const useToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const isActive = theme === 'dark';
  const toggleTheme = () => setTheme(isActive ? 'light' : 'dark');

  return { isActive, toggleTheme };
};
