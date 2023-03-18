import type { Children, FC } from 'react';

import styles from './Paragraph.module.scss';

export const Paragraph: FC<Children> = ({ children }) => {
  return <p className={styles.paragraph}>{children}</p>;
};
