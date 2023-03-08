import type { Children, FC } from 'react';

import styles from './Technology.module.scss';

export const Technology: FC<Children> = ({ children }) => {
  return (
    <button className={styles.button}>
      <span className={styles.span}>{children}</span>
    </button>
  );
};
