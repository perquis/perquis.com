import type { Children, FC } from 'react';

import { StyledLink } from '@components/globals/atoms';
import { Circle } from '@components/Resource/atoms';

import styles from './Resource.module.scss';

export const Resource: FC<Children & { link: string }> = ({ children, link }) => (
  <div className={styles.resource}>
    <Circle />
    <StyledLink href={link} isIndexed target="_blank" rel="nofollow, noreferrer, noopener">
      {children}
    </StyledLink>
  </div>
);
