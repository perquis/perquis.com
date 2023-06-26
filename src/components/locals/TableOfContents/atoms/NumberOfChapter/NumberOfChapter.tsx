import clsx from 'clsx';
import type { FC, ReactHTMLElementProps } from 'react';

import type { StatusChapter } from '@stories';

import styles from './NumberOfChapter.module.scss';

export const NumberOfChapter: FC<ReactHTMLElementProps<HTMLSpanElement> & { status: StatusChapter }> = ({ children, status }) => {
  return (
    <span
      className={clsx(
        styles['number-of-chapter'],
        status === 'hide' && styles['number-of-chapter-hidden'],
        status === 'visible' && styles['number-of-chapter-visible'],
        status === 'read' && styles['number-of-chapter-read']
      )}
    >
      {children}
    </span>
  );
};
