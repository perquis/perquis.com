import clsx from 'clsx';
import Link from 'next/link';
import type { FC, ReactHTMLElementProps } from 'react';
import { BiCheck } from 'react-icons/bi';

import { NumberOfChapter } from '@components/TableOfContents/atoms/NumberOfChapter';

import type { Slug } from '@stories/toc';

import styles from './TocItem.module.scss';

export const TocItem: FC<ReactHTMLElementProps<HTMLAnchorElement> & { href: string; status: Slug['status']; index: number }> = ({ children, href, index, status, ...props }) => {
  return (
    <li>
      <Link href={href} legacyBehavior passHref>
        <a
          className={clsx(
            styles['toc-item-link'],
            status === 'hidden' && styles['toc-item-link-hidden'],
            status === 'visible' && styles['toc-item-link-visible'],
            status === 'read' && styles['toc-item-link-read']
          )}
          {...props}
        >
          <NumberOfChapter status={status}>{index + 1}</NumberOfChapter>
          <span className={clsx(styles.hidden, status === 'read' && styles['is-read'])}>{children}</span>
          {status === 'read' && <BiCheck />}
        </a>
      </Link>
    </li>
  );
};
