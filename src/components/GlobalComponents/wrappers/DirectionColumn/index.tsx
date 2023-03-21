import type { Children, FC } from 'react';

import styles from './DirectionColumn.module.scss';

export const DirectionColumn: FC<Children> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
