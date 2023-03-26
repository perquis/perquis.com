import { AnimatePresence, motion } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import FocusLock from 'react-focus-lock';

import { Button } from '@GlobalComponents/atoms/Button';
import { SmallAvatar } from '@GlobalComponents/atoms/SmallAvatar';

import { vars } from '@animations/pop-up';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';
import { useChangeLocalesOnBlogPage } from '@hooks/usePushOnBlogPage';

import { languages } from '@data/languages';

import styles from './DropDownMenu.module.scss';

interface IDropDownMenu {
  isActive: boolean;
}

export const DropDownMenu = ({ isActive }: IDropDownMenu) => {
  const { userProfileSignIn, userProfileSignOut, userProfileChangeLocation } = useInternationalizedRouting('global');
  const { handleChangeLocalesOnBlogPage } = useChangeLocalesOnBlogPage();
  const { data: session } = useSession();
  const { locale } = useRouter();

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
            <Button isSecondary onClick={handleChangeLocalesOnBlogPage}>
              {userProfileChangeLocation}{' '}
              {languages
                .filter((lng) => lng !== locale)
                .map((lng) => (
                  <b key={lng}>{lng === 'en' ? 'angielski' : 'polish'}</b>
                ))}
            </Button>
            {session ? (
              <Button isSecondary onClick={() => signOut()}>
                {userProfileSignOut}
              </Button>
            ) : (
              <Button isSecondary onClick={() => signIn('github')}>
                {userProfileSignIn}
              </Button>
            )}
          </FocusLock>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
