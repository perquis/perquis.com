import { ToggleTheme } from '@components/Navigation/atoms/ToggleTheme';
import { ChangeLocales } from '@components/Navigation/molecules/ChangeLocales';
import { AuthenticationScope } from '@components/Navigation/organisms/AuthenticationScope';
import { HamburgerMenu } from '@components/Navigation/organisms/HamburgerMenu';

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
