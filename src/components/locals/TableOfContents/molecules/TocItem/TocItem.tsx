import clsx from 'clsx';
import Link from 'next/link';
import type { FC, ReactHTMLElementProps } from 'react';
import { useEffect, useState } from 'react';
import { BiCheck } from 'react-icons/bi';

import { NumberOfChapter } from '@components/locals/TableOfContents/atoms';

import styles from './TocItem.module.scss';

export type Status = 'hidden' | 'visible' | 'read';
export const isReadStatus = (status: Status, compareStatus: Status) => status === compareStatus;

export const TocItem: FC<ReactHTMLElementProps<HTMLAnchorElement> & { href: string; status: Status; chapter: string }> = ({ children, href, chapter, status, ...props }) => {
  const [isCompletedChapter, setCompletedChapter] = useState(false);

  useEffect(() => {
    if (status === 'read') setCompletedChapter(true);
  }, [status]);

  return (
    <li style={{ marginLeft: chapter.includes('.') ? 20 : 0 }}>
      <Link href={href} legacyBehavior passHref>
        <a
          className={clsx(
            styles['toc-item-link'],
            isReadStatus(status, 'hidden') && !isCompletedChapter && styles['toc-item-link-hidden'],
            isReadStatus(status, 'visible') && !isCompletedChapter && styles['toc-item-link-visible'],
            isReadStatus(status, 'read') && !isCompletedChapter && styles['toc-item-link-read'],
            isCompletedChapter && styles['toc-item-link-read']
          )}
          {...props}
        >
          <NumberOfChapter status={status} isCompletedChapter={isCompletedChapter}>
            {chapter}
          </NumberOfChapter>
          <div>
            <span className={clsx(styles.default, ((isReadStatus(status, 'read') && !isCompletedChapter) || isCompletedChapter) && styles.active)}>{children}</span>
          </div>
          {((isReadStatus(status, 'read') && !isCompletedChapter) || isCompletedChapter) && <BiCheck />}
        </a>
      </Link>
    </li>
  );
};
