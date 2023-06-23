import clsx from 'clsx';
import type { FC, ReactHTMLElementProps } from 'react';

import type { Status } from '@components/TableOfContents/molecules/TocItem/TocItem';
import { isReadStatus } from '@components/TableOfContents/molecules/TocItem/TocItem';

import styles from './NumberOfChapter.module.scss';

export const NumberOfChapter: FC<ReactHTMLElementProps<HTMLSpanElement> & { status: Status; isCompletedChapter: boolean }> = ({ children, status, isCompletedChapter }) => {
  return (
    <span
      className={clsx(
        styles['number-of-chapter'],
        isReadStatus(status, 'hidden') && !isCompletedChapter && styles['number-of-chapter-hidden'],
        isReadStatus(status, 'visible') && !isCompletedChapter && styles['number-of-chapter-visible'],
        isReadStatus(status, 'read') && !isCompletedChapter && styles['number-of-chapter-read'],
        isCompletedChapter && styles['number-of-chapter-read']
      )}
    >
      {children}
    </span>
  );
};
