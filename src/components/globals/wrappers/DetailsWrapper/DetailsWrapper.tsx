import type { Children, FC } from 'react';

import styles from './DetailsWrapper.module.scss';

export const DetailsWrapper: FC<Children> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
