import Link from 'next/link';
import type { Children, FC, ReactHTMLElementProps } from 'react';
import React from 'react';

import styles from './StyledLink.module.scss';

type IStyledLink = { href: string; rel?: string; target?: string; isIndexed?: boolean } & Children;

export const StyledLink: FC<ReactHTMLElementProps<HTMLAnchorElement> & IStyledLink> = ({ children, href, isIndexed, ...rest }) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <a className={styles.link} tabIndex={isIndexed ? 0 : -1} {...rest}>
        {children}
      </a>
    </Link>
  );
};
