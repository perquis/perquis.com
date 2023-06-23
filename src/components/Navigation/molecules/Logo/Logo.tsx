import Link from 'next/link';

import { LogoIcon } from '@icons/index';
import { useNavigationStore } from '@stories';

import styles from './Logo.module.scss';

export const Logo = () => {
  const [toggleHomePage, updateToggleHomePage] = useNavigationStore((state) => [state.toggleHomePage, state.updateToggleHomePage]);
  const handleToggleHomePage = () => updateToggleHomePage(!toggleHomePage);

  return (
    <Link href="/" className={styles.logo} onClick={handleToggleHomePage}>
      <LogoIcon />
      <span>perquis.com</span>
    </Link>
  );
};
