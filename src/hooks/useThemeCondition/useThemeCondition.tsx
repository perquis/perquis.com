import { useTheme } from 'next-themes';

export const useThemeCondition = () => {
  const { theme } = useTheme();
  const dataTheme = typeof document !== 'undefined' ? document.querySelector('html')?.getAttribute('data-theme') ?? '' : '';

  const condition = theme === 'system' ? dataTheme === 'dark' : theme === 'dark';
  return condition;
};
