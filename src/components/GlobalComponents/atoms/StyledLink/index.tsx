import Link from 'next/link';
import type { Children, FC } from 'react';
import React from 'react';

import styles from './StyledLink.module.scss';

type IStyledLink = { href: string; isIndexed?: boolean } & Children;

export const StyledLink: FC<IStyledLink> = ({ children, href, isIndexed }) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <a className={styles.link} tabIndex={isIndexed ? 0 : -1}>
        {children}
      </a>
    </Link>
  );
};
