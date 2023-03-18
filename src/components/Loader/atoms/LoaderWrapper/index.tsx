import type { Children, FC } from 'react';

import styles from './LoaderWrapper.module.scss';

export const LoaderWrapper: FC<Children> = ({ children }) => {
  return <div className={styles.loader}>{children}</div>;
};
