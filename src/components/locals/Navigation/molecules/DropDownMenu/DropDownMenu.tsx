import { AnimatePresence, motion } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import FocusLock from 'react-focus-lock';

import { vars } from '@animations';
import { Button, SmallAvatar } from '@components/globals/atoms';
import { languages } from '@data/languages/languages';
import { useInternationalizedRouting, useRedirectToAlternatePage } from '@hooks';

import styles from './DropDownMenu.module.scss';

interface IDropDownMenu {
  isActive: boolean;
}

export const DropDownMenu = ({ isActive }: IDropDownMenu) => {
  const { userProfileSignIn, userProfileSignOut, userProfileChangeLocation } = useInternationalizedRouting('global');
  const { redirectToAlternatePage } = useRedirectToAlternatePage();
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
            <Button isSecondary onClick={redirectToAlternatePage}>
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
