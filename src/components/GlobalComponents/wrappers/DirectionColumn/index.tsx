/* eslint-disable */
import type { ReactHTMLElementProps } from 'react';
import { forwardRef } from 'react';

import styles from './DirectionColumn.module.scss';

interface DirectionColumnProps extends ReactHTMLElementProps<HTMLDivElement> {
  isTop?: boolean;
  className?: string;
}

export const DirectionColumn = forwardRef<HTMLDivElement, DirectionColumnProps>(({ children, isTop, className = '', ...props }, ref) => {
  return (
    <div className={`${styles.container} ${isTop ? styles.top : ''} ${className}`} {...props} ref={ref}>
      {children}
    </div>
  );
});
