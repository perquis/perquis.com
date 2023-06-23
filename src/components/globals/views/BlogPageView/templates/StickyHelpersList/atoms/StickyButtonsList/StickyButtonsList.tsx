import type { Children, FC } from 'react';

import { codeVars } from '@animations';
import { DirectionColumn } from '@components/globals/wrappers/DirectionColumn/DirectionColumn';

import styles from './StickyButtonsList.module.scss';

export const StickyButtonsList: FC<Children> = ({ children }) => {
  return (
    <DirectionColumn className={styles.sticky} variants={codeVars} initial="initial" animate="animate" exit="exit">
      {children}
    </DirectionColumn>
  );
};
