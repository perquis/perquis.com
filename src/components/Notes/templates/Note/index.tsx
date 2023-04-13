import clsx from 'clsx';
import { LayoutGroup, motion } from 'framer-motion';
import { Children, Fragment, useRef, useState } from 'react';
import type { Children as ChildrenProps, FC } from 'react';

import { ShowMoreButton } from '@components/Notes/atoms/ShowMoreButton';

import styles from './Note.module.scss';

type Status = 'positive' | 'negative' | 'normal';

interface INote {
  size?: number;
  status: Status;
}

export const Note: FC<ChildrenProps & INote> = ({ children, size = 3, status = 'normal' }) => {
  const container = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);

  const elements = Children.toArray(children).splice(0, size);
  const count = Children.count(children);

  const height = container.current?.offsetHeight ?? 0;

  return (
    <LayoutGroup>
      <motion.div
        className={clsx(
          styles['note-wrapper'],
          status === 'normal' && styles['note-normal'],
          status === 'positive' && styles['note-positive'],
          status === 'negative' && styles['note-negative']
        )}
        layout
        animate={{ height: isOpen ? 'auto' : height }}
        ref={container}
      >
        <div className={clsx(styles.note)}>
          {isOpen ? <>{children}</> : elements.map((child, i) => <Fragment key={i}>{child}</Fragment>)}
          {count > 3 && !isOpen ? <ShowMoreButton onClick={() => setOpen(true)} /> : null}
        </div>
        <div
          className={clsx(
            styles['hero-pattern'],
            status === 'normal' && styles['hero-pattern-normal'],
            status === 'positive' && styles['hero-pattern-positive'],
            status === 'negative' && styles['hero-pattern-negative'],
            isOpen ? styles['hero-pattern-active'] : styles['hero-pattern-is-not-active']
          )}
        />
      </motion.div>
    </LayoutGroup>
  );
};
