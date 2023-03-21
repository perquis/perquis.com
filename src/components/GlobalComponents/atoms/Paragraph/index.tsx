import type { Children, DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './Paragraph.module.scss';

export const Paragraph: FC<Children & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> = ({ children, ...props }) => {
  return (
    <p className={styles.paragraph} {...props}>
      {children}
    </p>
  );
};
