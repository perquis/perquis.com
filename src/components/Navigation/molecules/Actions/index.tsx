import { ChangeLocales } from '@components/Navigation/atoms/ChangeLocales';
import { ToggleTheme } from '@components/Navigation/atoms/ToggleTheme';

import { AuthenticationScope } from '../AuthenticationScope';
import styles from './Actions.module.scss';

export const Actions = () => {
  return (
    <div className={styles['actions-wrapper']}>
      <ToggleTheme />
      <ChangeLocales />
      <AuthenticationScope />
    </div>
  );
};
