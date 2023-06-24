import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import FocusLock from 'react-focus-lock';

import { vars } from '@animations';
import { Dot } from '@components/globals/atoms';
import type { CommentProps } from '@components/locals/Comment/templates';
import { pageSize } from '@data/presets/presets';
import { useCommentOptions } from '@hooks';

import styles from './Options.module.scss';

const dots = new Array(pageSize).fill(null);

export const Options: FC<Record<'comment', CommentProps>> = ({ comment: { ...rest } }) => {
  const { ref, isOpen, options, toggleOpen } = useCommentOptions({ commentId: rest.id, ...rest });

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
