import { signIn, useSession } from 'next-auth/react';

import { Button } from '@components/globals/atoms';
import { UserProfile } from '@components/Navigation/molecules';
import { useHasMounted, useInternationalizedRouting } from '@hooks';

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
