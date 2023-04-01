import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import type { FC, MutableRefObject } from 'react';
import { useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';

import { Dot } from '@GlobalComponents/atoms/Dot';

import type { CommentProps } from '@components/Comment/templates/Comment';

import { vars } from '@animations/pop-up';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './Options.module.scss';

const dots = new Array(3).fill(null);

export const Options: FC<Record<'user', Omit<CommentProps, 'email' | 'content'>>> = ({ user: { id } }) => {
  const { data: session } = useSession();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, toggleOpen] = useState(false);
  const { commentOptionsEdit, commentOptionsDelete } = useInternationalizedRouting('global');
  const options = [
    { text: commentOptionsEdit, handler: () => null },
    { text: commentOptionsDelete, handler: () => axios.delete('/api/comments', { data: { id, userId: session?.user.id } }) },
  ];

  const handleCloseOptions = () => toggleOpen(false);

  useKey('Escape', handleCloseOptions, { when: isOpen });
  useOutsideClick(ref as MutableRefObject<HTMLElement>, handleCloseOptions, isOpen);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={styles.options} onClick={() => toggleOpen(!isOpen)}>
        {dots.map((_, i) => (
          <Dot key={i} />
        ))}
      </button>
      <AnimatePresence>
        {isOpen && (
          <FocusLock>
            <motion.div className={styles['options-list']} variants={vars} initial="initial" animate="animate" exit="exit">
              {options.map(({ text, handler }, i) => (
                <button className={styles.button} onClick={handler} key={i}>
                  <span>{text}</span>
                </button>
              ))}
            </motion.div>
          </FocusLock>
        )}
      </AnimatePresence>
    </div>
  );
};
