import type { Children, FC } from 'react';

import styles from './Tag.module.scss';

export const Tag: FC<Children> = ({ children }) => {
  return <span className={styles.tag}>{children}</span>;
};
