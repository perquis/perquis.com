import { signIn, useSession } from 'next-auth/react';

import { Button } from '@GlobalComponents/atoms/Button';

import { UserProfile } from '@components/Navigation/molecules/UserProfile';

import { useHasMounted } from '@hooks/useHasMounted';
import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './AuthenticationScope.module.scss';

export const AuthenticationScope = () => {
  const { data: session } = useSession();
  const isSession = typeof session === 'undefined';

  const { hasMounted } = useHasMounted();

  const { userProfileSignIn } = useInternationalizedRouting('global');

  if ((!hasMounted && isSession) || (hasMounted && isSession)) return null;
  if (session && hasMounted) return <UserProfile session={session} />;

  return (
    <div className={styles.wrapper}>
      <Button onClick={() => signIn('github')}>{userProfileSignIn}</Button>
    </div>
  );
};
