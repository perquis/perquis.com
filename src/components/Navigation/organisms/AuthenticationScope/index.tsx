import { signIn, useSession } from 'next-auth/react';

import { Button } from '@components/global/atoms/Button';
import { ChangeLocales } from '@components/Navigation/molecules/ChangeLocales';
import { UserProfile } from '@components/Navigation/molecules/UserProfile';

import styles from './AuthenticationScope.module.scss';

export const AuthenticationScope = () => {
  const { data: session } = useSession();

  return session ? (
    <UserProfile session={session} />
  ) : (
    <div className={styles.wrapper}>
      <ChangeLocales />
      <Button onClick={() => signIn('github')}>Log in</Button>
    </div>
  );
};
