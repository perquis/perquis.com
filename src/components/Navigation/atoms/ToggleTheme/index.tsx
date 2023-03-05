import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import styles from './ToggleTheme.module.scss';

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const isActive = theme === 'dark';
  const toggleTheme = () => setTheme(isActive ? 'light' : 'dark');

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return <button className={`${styles['theme-mode']} ${isActive ? styles.active : ''}`} onClick={toggleTheme} aria-label="Toggle theme" />;
};
