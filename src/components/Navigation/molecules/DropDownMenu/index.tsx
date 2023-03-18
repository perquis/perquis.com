import { AnimatePresence, motion } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import FocusLock from 'react-focus-lock';

import { Button } from '@GlobalComponents/atoms/Button';

import { SmallAvatar } from '@components/Navigation/atoms/SmallAvatar';

import { vars } from '@animations/pop-up';

import { languages } from '@data/languages';

import styles from './DropDownMenu.module.scss';

interface IDropDownMenu {
  isActive: boolean;
}

export const DropDownMenu = ({ isActive }: IDropDownMenu) => {
  const { asPath, push, locale } = useRouter();
  const { data: session } = useSession();

  const { t } = useTranslation('home');
  const signOutText = t('user-profile.sign-out'),
    signInText = t('user-profile.sign-in'),
    changeLocationText = t('user-profile.change-location');

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div className={styles['dropdown-menu']} variants={vars} initial="initial" animate="animate" exit="exit">
          <FocusLock>
            {session ? (
              <div className={styles['profile-user']}>
                <SmallAvatar image={session.user?.image ?? ''} />
                <b>{session?.user?.name}</b>
              </div>
            ) : null}
            <Button isSecondary onClick={() => push(asPath, asPath, { locale: locale === 'en' ? 'pl' : 'en' })}>
              {changeLocationText}{' '}
              {languages
                .filter((lng) => lng !== locale)
                .map((lng) => (
                  <b key={lng}>{lng === 'en' ? 'angielski' : 'polish'}</b>
                ))}
            </Button>
            {session ? (
              <Button isSecondary onClick={() => signOut()}>
                {signOutText}
              </Button>
            ) : (
              <Button isSecondary onClick={() => signIn('github')}>
                {signInText}
              </Button>
            )}
          </FocusLock>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
