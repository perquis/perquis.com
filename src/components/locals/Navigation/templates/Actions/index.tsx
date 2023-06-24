import { ToggleTheme } from '@components/locals/Navigation/atoms';
import { ChangeLocales } from '@components/locals/Navigation/molecules';
import { AuthenticationScope, HamburgerMenu } from '@components/locals/Navigation/organisms';

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
