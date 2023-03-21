import { signIn, useSession } from 'next-auth/react';
import useTranslation from 'next-translate/useTranslation';

import { Button } from '@GlobalComponents/atoms/Button';

import { ChangeLocales } from '@components/Navigation/molecules/ChangeLocales';
import { UserProfile } from '@components/Navigation/molecules/UserProfile';

import styles from './AuthenticationScope.module.scss';

export const AuthenticationScope = () => {
  const { data: session } = useSession();
  const { t } = useTranslation('global');
  const text = t('user-profile.sign-in');

  return session ? (
    <UserProfile session={session} />
  ) : (
    <div className={styles.wrapper}>
      <ChangeLocales />
      <Button onClick={() => signIn('github')}>{text}</Button>
    </div>
  );
};
