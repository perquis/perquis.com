import { Logo } from '@components/locals/Navigation/molecules';
import { Actions } from '@components/locals/Navigation/templates';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <menu className={styles.menu}>
      <Logo />
      <Actions />
    </menu>
  );
};
