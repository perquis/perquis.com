import type { Children, FC } from 'react';

import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { codeVars } from '@animations/code-motion';

import styles from './StickyButtonsList.module.scss';

export const StickyButtonsList: FC<Children> = ({ children }) => {
  return (
    <DirectionColumn className={styles.sticky} variants={codeVars} initial="initial" animate="animate" exit="exit">
      {children}
    </DirectionColumn>
  );
};
