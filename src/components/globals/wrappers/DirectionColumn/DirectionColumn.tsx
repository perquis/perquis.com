/* eslint-disable */
import { motion, type MotionProps } from 'framer-motion';
import type { ReactHTMLElementProps } from 'react';
import { forwardRef } from 'react';

import styles from './DirectionColumn.module.scss';

interface DirectionColumnProps extends Omit<ReactHTMLElementProps<HTMLDivElement>, 'ref'> {
  isTop?: boolean;
  className?: string;
}

export const DirectionColumn = forwardRef<HTMLDivElement, DirectionColumnProps & MotionProps>(({ children, isTop, className = '', ...props }, ref) => {
  return (
    <motion.div className={`${styles.container} ${isTop ? styles.top : ''} ${className}`} {...props} ref={ref}>
      {children}
    </motion.div>
  );
});
