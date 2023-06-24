import Link from 'next/link';

import { LogoIcon } from '@icons/index';

import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <LogoIcon />
      <span>perquis.com</span>
    </Link>
  );
};
