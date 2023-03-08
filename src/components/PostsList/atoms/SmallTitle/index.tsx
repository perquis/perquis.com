import type { Children, FC } from 'react';

import styles from './SmallTitle.module.scss';

export const Title: FC<Children> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};
