import clsx from 'clsx';
import Link from 'next/link';
import type { FC, ReactHTMLElementProps } from 'react';
import { BiCheck } from 'react-icons/bi';

import { NumberOfChapter } from '@components/locals/TableOfContents/atoms';
import type { Item } from '@stories';

import styles from './TocItem.module.scss';

export const TocItem: FC<ReactHTMLElementProps<HTMLAnchorElement> & { chapter: number } & Omit<Item, 'textContent'>> = ({ children, chapter, status, href, ...props }) => {
  return (
    <li>
      <Link href={href} legacyBehavior passHref>
        <a
          className={clsx(
            styles['toc-item-link'],
            status === 'hide' && styles['toc-item-link-hidden'],
            status === 'visible' && styles['toc-item-link-visible'],
            status === 'read' && styles['toc-item-link-read']
          )}
          {...props}
        >
          <NumberOfChapter status={status}>{chapter}</NumberOfChapter>
          <div>
            <span className={clsx(styles.default, status === 'read' && styles.active)}>{children}</span>
          </div>
          {status === 'read' && <BiCheck />}
        </a>
      </Link>
    </li>
  );
};
