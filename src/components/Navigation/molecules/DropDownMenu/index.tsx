import { AnimatePresence, motion } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { Button } from '@components/global/atoms/Button';
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

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div className={styles['dropdown-menu']} variants={vars} initial="initial" animate="animate" exit="exit">
          {session ? (
            <div className={styles['profile-user']}>
              <SmallAvatar image={session.user?.image ?? ''} />
              <b>{session?.user?.name}</b>
            </div>
          ) : null}
          <Button isSecondary onClick={() => push(asPath, asPath, { locale: locale === 'en' ? 'pl' : 'en' })}>
            Change Language to{' '}
            {languages
              .filter((lng) => lng !== locale)
              .map((lng) => (
                <b key={lng}>{lng}</b>
              ))}
          </Button>
          {session ? (
            <Button isSecondary onClick={() => signOut()}>
              Log Out
            </Button>
          ) : (
            <Button isSecondary onClick={() => signIn('github')}>
              Sign In
            </Button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
