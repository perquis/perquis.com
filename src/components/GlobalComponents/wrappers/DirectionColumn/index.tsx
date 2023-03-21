import type { Children, FC } from 'react';

import styles from './DirectionColumn.module.scss';

export const DirectionColumn: FC<Children & { isTop?: boolean }> = ({ children, isTop }) => {
  return <div className={`${styles.container} ${isTop ? styles.top : ''}`}>{children}</div>;
};
