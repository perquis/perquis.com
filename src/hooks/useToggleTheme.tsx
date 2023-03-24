import { useTheme } from 'next-themes';

export const useToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const dataTheme = typeof document !== 'undefined' ? document.querySelector('html')?.getAttribute('data-theme') ?? '' : '';
  const isActive = theme === 'system' ? dataTheme === 'dark' : theme === 'dark';
  const toggleTheme = () => setTheme(isActive ? 'light' : 'dark');

  return { isActive, toggleTheme };
};
