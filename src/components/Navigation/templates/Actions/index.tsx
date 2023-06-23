import { ToggleTheme } from '@components/Navigation/atoms';
import { ChangeLocales } from '@components/Navigation/molecules';
import { AuthenticationScope, HamburgerMenu } from '@components/Navigation/organisms';

import styles from './Actions.module.scss';

export const Actions = () => {
  return (
    <div className={styles['actions-wrapper']}>
      <ToggleTheme />
      <ChangeLocales />
      <AuthenticationScope />
      <HamburgerMenu />
    </div>
  );
};
