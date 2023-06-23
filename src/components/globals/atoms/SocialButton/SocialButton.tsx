import Link from 'next/link';
import type { Children, FC, ReactHTMLElementProps } from 'react';
import React from 'react';

import styles from './SocialButton.module.scss';

type ISocialButton = { href: string; rel?: string; target?: string; isIndexed?: boolean } & Children;

export const SocialButton: FC<ReactHTMLElementProps<HTMLAnchorElement> & ISocialButton> = ({ children, href, isIndexed, ...rest }) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <a className={styles['social-button']} tabIndex={isIndexed ? 0 : -1} target="_blank" rel="nofollow, noreferrer, noopener" {...rest}>
        {children}
      </a>
    </Link>
  );
};
