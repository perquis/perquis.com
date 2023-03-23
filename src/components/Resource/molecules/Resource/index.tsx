import type { Children, FC } from 'react';

import { StyledLink } from '@GlobalComponents/atoms/StyledLink';

import { Circle } from '@components/Resource/atoms/Circle';

import styles from './Resource.module.scss';

export const Resource: FC<Children & { link: string }> = ({ children, link }) => (
  <div className={styles.resource}>
    <Circle />
    <StyledLink href={link} isIndexed>
      {children}
    </StyledLink>
  </div>
);