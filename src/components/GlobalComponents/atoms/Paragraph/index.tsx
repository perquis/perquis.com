import type { FC, ReactHTMLElementProps } from 'react';

import styles from './Paragraph.module.scss';

type ParagraphType = FC<ReactHTMLElementProps<HTMLParagraphElement>>;

export const Paragraph: ParagraphType = ({ children, ...props }) => {
  return (
    <p className={styles.paragraph} {...props}>
      {children}
    </p>
  );
};
