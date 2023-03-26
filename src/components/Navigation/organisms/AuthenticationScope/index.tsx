import { signIn, useSession } from 'next-auth/react';

import { Button } from '@GlobalComponents/atoms/Button';

import { ChangeLocales } from '@components/Navigation/molecules/ChangeLocales';
import { UserProfile } from '@components/Navigation/molecules/UserProfile';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './AuthenticationScope.module.scss';

export const AuthenticationScope = () => {
  const { data: session } = useSession();
  const { userProfileSignIn } = useInternationalizedRouting('global');

  return session ? (
    <UserProfile session={session} />
  ) : (
    <div className={styles.wrapper}>
      <ChangeLocales />
      <Button onClick={() => signIn('github')}>{userProfileSignIn}</Button>
    </div>
  );
};
