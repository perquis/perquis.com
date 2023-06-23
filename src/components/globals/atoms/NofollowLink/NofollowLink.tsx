import clsx from 'clsx';
import type { FC, ReactHTMLElementProps } from 'react';

import styles from './NofollowLink.module.scss';

export const NofollowLink: FC<ReactHTMLElementProps<HTMLAnchorElement> & { href: string; state?: 'sky' | 'pink' | 'indigo' }> = ({ children, href, state = 'sky' }) => {
  return (
    <a href={href} rel="noreferrer, nofollow" className={clsx(styles.link, state === 'sky' && styles.sky, state === 'pink' && styles.pink, state === 'indigo' && styles.indigo)}>
      {children}
    </a>
  );
};
