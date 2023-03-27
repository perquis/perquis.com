import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { useToggleTheme } from '@hooks/useToggleTheme';

import styles from './ToggleTheme.module.scss';

export const ToggleTheme = () => {
  const { isActive, toggleTheme } = useToggleTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return <button className={clsx(styles['theme-mode'], isActive && styles.active)} onClick={toggleTheme} aria-label="Toggle theme" />;
};
