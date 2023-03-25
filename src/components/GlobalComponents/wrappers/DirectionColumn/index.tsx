/* eslint-disable */
import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import styles from './DirectionColumn.module.scss';

interface DirectionColumnProps {
  children?: ReactNode;
  isTop?: boolean;
  className?: string;
  props?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export const DirectionColumn = forwardRef<HTMLDivElement, DirectionColumnProps>(({ children, isTop, className = '', ...props }, ref) => {
  return (
    <div className={`${styles.container} ${isTop ? styles.top : ''} ${className}`} {...props} ref={ref}>
      {children}
    </div>
  );
});
