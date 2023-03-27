import type { Children, DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './Paragraph.module.scss';

type ParagraphType = FC<Children & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>>;

export const Paragraph: ParagraphType = ({ children, ...props }) => {
  return (
    <p className={styles.paragraph} {...props}>
      {children}
    </p>
  );
};
