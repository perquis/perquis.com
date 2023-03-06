import { AnimatePresence, motion } from 'framer-motion';
import type { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import type { FC, MutableRefObject } from 'react';
import { useRef, useState } from 'react';
import { IoMdArrowDropleft } from 'react-icons/io';

import { Avatar } from '@components/Navigation/atoms/Avatar';
import { ChangeLocales } from '@components/Navigation/molecules/ChangeLocales';

import { vars } from '@animations/pop-up';

import { useDropdownMenu } from '@hooks/useDropdownMenu';

import styles from './UserProfile.module.scss';

interface IUserProfile {
  session: Session;
}

export const UserProfile: FC<IUserProfile> = ({ session }) => {
  const [isActive, setActive] = useState(false);
  const ref = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;

  const toggleOptions = () => setActive(!isActive);

  useDropdownMenu(toggleOptions, { ref, state: { isActive, setActive } });

  return (
    <div className={styles.wrapper}>
      <ChangeLocales />
      <Avatar image={session.user?.image ?? ''} />
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
              <button onClick={() => signOut()}>Log out</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
