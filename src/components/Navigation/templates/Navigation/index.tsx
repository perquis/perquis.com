import { Logo } from '@components/Navigation/molecules';
import { Actions } from '@components/Navigation/templates';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <menu className={styles.menu}>
      <Logo />
      <Actions />
    </menu>
  );
};
