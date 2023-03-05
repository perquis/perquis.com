import Link from 'next/link';

import { LogoIcon } from '@icons/LogoIcon';

import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <LogoIcon />
      <span>PerQuis&apos;s Blog</span>
    </Link>
  );
};
