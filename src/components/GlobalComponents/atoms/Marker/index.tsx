import type { FC, ReactHTMLElementProps } from 'react';

import styles from './Marker.module.scss';

export const Marker: FC<ReactHTMLElementProps<HTMLSpanElement>> = ({ children }) => {
  return <span className={styles.marker}>{children}</span>;
};
