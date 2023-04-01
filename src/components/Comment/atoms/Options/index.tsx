import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import FocusLock from 'react-focus-lock';

import { Dot } from '@GlobalComponents/atoms/Dot';

import type { CommentProps } from '@components/Comment/templates/Comment';

import { vars } from '@animations/pop-up';

import { useCommentOptions } from '@hooks/useCommentOptions';

import { pageSize } from '@data/presets';

import styles from './Options.module.scss';

const dots = new Array(pageSize).fill(null);

export const Options: FC<Record<'user', Omit<CommentProps, 'email' | 'content'>>> = ({ user: { id, userId } }) => {
  const { ref, isOpen, options, toggleOpen } = useCommentOptions({ id, userId });

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
              {options.map(({ text, handler, Icon }, i) => (
                <button className={styles.button} onClick={handler} key={i}>
                  <Icon /> <span>{text}</span>
                </button>
              ))}
            </motion.div>
          </FocusLock>
        )}
      </AnimatePresence>
    </div>
  );
};
