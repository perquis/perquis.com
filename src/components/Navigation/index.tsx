import { Logo } from '@components/Navigation/molecules/Logo';
import { Actions } from '@components/Navigation/templates/Actions';

import styles from './styles/Menu.module.scss';

const Navigation = () => {
  return (
    <menu className={styles.menu}>
      <Logo />
      <Actions />
    </menu>
  );
};

export default Navigation;
