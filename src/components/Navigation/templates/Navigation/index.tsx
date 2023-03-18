import { Logo } from '@components/Navigation/molecules/Logo';
import { Actions } from '@components/Navigation/templates/Actions';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <menu className={styles.menu}>
      <Logo />
      <Actions />
    </menu>
  );
};
