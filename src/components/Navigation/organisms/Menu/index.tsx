import { Actions } from '@components/Navigation/molecules/Actions';
import { Logo } from '@components/Navigation/molecules/Logo';

import styles from './Menu.module.scss';

export const Menu = () => {
  return (
    <menu className={styles.menu}>
      <Logo />
      <Actions />
    </menu>
  );
};
