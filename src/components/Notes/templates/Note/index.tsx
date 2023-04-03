import clsx from 'clsx';
import { Children, Fragment, useRef, useState } from 'react';
import type { Children as ChildrenProps, FC } from 'react';

import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { ShowMoreButton } from '@components/Notes/atoms/ShowMoreButton';

import styles from './Note.module.scss';

type Status = 'positive' | 'negative' | 'normal';

interface INote {
  size?: number;
  status: Status;
}

export const Note: FC<ChildrenProps & INote> = ({ children, size = 3, status = 'normal' }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const elements = Children.toArray(children).splice(0, size);
  const count = Children.count(children);

  return (
    <div
      className={clsx(
        styles.note,
        status === 'normal' && styles['note-normal'],
        status === 'positive' && styles['note-positive'],
        status === 'negative' && styles['note-negative']
      )}
    >
      <div
        className={clsx(
          styles['hero-pattern'],
          status === 'normal' && styles['hero-pattern-normal'],
          status === 'positive' && styles['hero-pattern-positive'],
          status === 'negative' && styles['hero-pattern-negative']
        )}
      >
        <DirectionColumn ref={ref} className={styles['not-padding']}>
          {isOpen ? <>{children}</> : elements.map((child, i) => <Fragment key={i}>{child}</Fragment>)}
        </DirectionColumn>
        {count > 3 && !isOpen ? <ShowMoreButton onClick={() => setOpen(true)} /> : null}
      </div>
    </div>
  );
};
