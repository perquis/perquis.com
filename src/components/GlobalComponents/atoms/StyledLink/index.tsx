import Link from 'next/link';
import type { Children, FC } from 'react';
import React from 'react';

import styles from './StyledLink.module.scss';

type IStyledLink = { href: string } & Children;

export const StyledLink: FC<IStyledLink> = ({ href, children }) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <a className={styles.link} tabIndex={-1}>
        {children}
      </a>
    </Link>
  );
};
