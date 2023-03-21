import type { Children, FC } from 'react';

import styles from './FullWidthContainer.module.scss';

export const FullWidthContainer: FC<Children> = ({ children }) => {
  return <article className={styles.ctn}>{children}</article>;
};
