import type { Children, FC } from 'react';

import styles from './TagsList.module.scss';

export const TagsList: FC<Children> = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};
