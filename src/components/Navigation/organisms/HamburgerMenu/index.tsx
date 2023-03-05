import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import useWindowSize from '@rooks/use-window-size';
import { AnimatePresence, motion } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import type { MutableRefObject } from 'react';

import { Button } from '@components/global/atoms/Button';
import { Avatar } from '@components/Navigation/atoms/Avatar';

import { vars } from '@animations/pop-up';

import { languages } from '@data/languages';

import styles from './HamburgerMenu.module.scss';

export const HamburgerMenu = () => {
  const { innerWidth } = useWindowSize();
  const { data: session } = useSession();
  const [isActive, setActive] = useState(false);
  const toggleActive = () => setActive(!isActive);
  const { locale, push, asPath } = useRouter();

  const [mounted, setMounted] = useState(false);
  const ref = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;

  const toggleOptions = () => setActive(!isActive);

  useKey('Escape', toggleOptions, { when: isActive });
  useOutsideClick(ref, toggleOptions, isActive && !!mounted);

  useEffect(() => {
    if (innerWidth ? innerWidth > 768 : false) setActive(false);
  }, [innerWidth]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={`${styles['hamburger-menu']} ${isActive ? styles.active : ''}`} onClick={toggleActive} />
      <AnimatePresence>
        {isActive && (
          <motion.div className={styles['dropdown-menu']} variants={vars} initial="initial" animate="animate" exit="exit">
            {session ? (
              <div className={styles['profile-user']}>
                <Avatar image={session.user?.image ?? ''} />
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
    </div>
  );
};
