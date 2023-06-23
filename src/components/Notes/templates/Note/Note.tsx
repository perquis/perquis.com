import clsx from 'clsx';
import { Children, type Children as ChildrenProps, type FC, useState } from 'react';

import { ShowMoreButton } from '@components/Notes/atoms/ShowMoreButton/ShowMoreButton';

import styles from './Note.module.scss';

type Status = 'positive' | 'negative' | 'normal';

interface INote {
  status: Status;
}

export const Note: FC<ChildrenProps & INote> = ({ children, status = 'normal' }) => {
  const [isOpen, setOpen] = useState(false);

  const childrenLength = Children.count(children);

  return (
    <div
      className={clsx(
        styles['note-wrapper'],
        !isOpen && styles['is-hide'],
        status === 'normal' && styles['note-normal'],
        status === 'positive' && styles['note-positive'],
        status === 'negative' && styles['note-negative'],
        'note'
      )}
    >
      <div className={clsx(styles.note)}>
        {children}
        {childrenLength > 3 && !isOpen ? <ShowMoreButton onClick={() => setOpen(true)} /> : null}
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
    </div>
  );
};
