import clsx from 'clsx';
import type { FC, ReactHTMLElementProps } from 'react';

import styles from './NumberOfChapter.module.scss';

export const NumberOfChapter: FC<ReactHTMLElementProps<HTMLSpanElement> & { status: string }> = ({ children, status }) => {
  return (
    <span
      className={clsx(
        styles['number-of-chapter'],
        status === 'hidden' && styles['number-of-chapter-hidden'],
        status === 'visible' && styles['number-of-chapter-visible'],
        status === 'read' && styles['number-of-chapter-read']
      )}
    >
      {children}
    </span>
  );
};
