import { AnimatePresence, motion } from 'framer-motion';
import type { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import type { FC, MutableRefObject } from 'react';
import { useRef, useState } from 'react';
import { IoMdArrowDropleft } from 'react-icons/io';

import { vars } from '@animations';
import { SmallAvatar } from '@components/globals/atoms';
import { useDropdownMenu, useInternationalizedRouting } from '@hooks';

import styles from './UserProfile.module.scss';

interface IUserProfile {
  session: Session;
}

export const UserProfile: FC<IUserProfile> = ({ session }) => {
  const { userProfileSignOut } = useInternationalizedRouting('global');
  const ref = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;
  const [isActive, setActive] = useState(false);
  const toggleOptions = () => setActive(!isActive);
  useDropdownMenu(toggleOptions, { ref, state: { isActive } });

  return (
    <div className={styles.wrapper}>
      <SmallAvatar image={session.user?.image ?? ''} />
      <div className={styles['user-wrapper']} ref={ref}>
        <button className={styles.options} onClick={toggleOptions}>
          <b>{session.user?.name}</b>
          <motion.div className={styles.icon} animate={isActive ? { rotate: -90 } : { rotate: 0 }}>
            <IoMdArrowDropleft size={19} />
          </motion.div>
        </button>
        <AnimatePresence>
          {isActive && (
            <motion.div className={styles['log-out']} variants={vars} initial="initial" animate="animate" exit="exit">
              <button onClick={() => signOut()}>{userProfileSignOut}</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
