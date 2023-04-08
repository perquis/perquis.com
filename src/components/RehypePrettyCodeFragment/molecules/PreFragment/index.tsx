/* eslint-disable */
import { forwardRef } from 'react';
import type { ReactHTMLElementProps } from 'react';

import styles from './PreFragment.module.scss';

export const PreFragment = forwardRef<HTMLDivElement, ReactHTMLElementProps<HTMLPreElement>>(({ children, ...props }, ref) => {
  return (
    <pre {...props} className={styles.pre}>
      <div ref={ref} className="code">
        {children}
      </div>
    </pre>
  );
});
