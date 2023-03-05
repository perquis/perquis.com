import { Button } from '@components/global/atoms/Button';

import styles from './AuthenticationScope.module.scss';

export const AuthenticationScope = () => {
  return (
    <div className={styles.wrapper}>
      <Button>Sign up</Button>
      <Button isSecondary>Log in</Button>
    </div>
  );
};
