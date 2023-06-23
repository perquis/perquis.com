import type { FC, ReactHTMLElementProps } from 'react';

import styles from './StickyContainer.module.scss';

export const StickyContainer: FC<ReactHTMLElementProps<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div className={styles['sticky-container']} {...props}>
      {children}
    </div>
  );
};
