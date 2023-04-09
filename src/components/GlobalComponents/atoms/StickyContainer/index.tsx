import type { Children, FC } from 'react';

import styles from './StickyContainer.module.scss';

export const StickyContainer: FC<Children> = ({ children }) => {
  return <div className={styles['sticky-container']}>{children}</div>;
};
