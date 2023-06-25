import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { useThemeService } from '@providers';

import styles from './ToggleTheme.module.scss';

export const ToggleTheme = () => {
  const { setTheme } = useTheme();
  const { isPreferenceSystem } = useThemeService();
  const toggleTheme = () => setTheme(isPreferenceSystem ? 'light' : 'dark');

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return <button className={clsx(styles['theme-mode'], !isPreferenceSystem && styles.active)} onClick={toggleTheme} aria-label="Toggle theme" />;
};
