import type { FC, ReactHTMLElementProps } from 'react';

import styles from './WavyBold.module.scss';

export const WavyBold: FC<ReactHTMLElementProps<HTMLBaseElement>> = ({ children, ...props }) => {
  return (
    <b className={styles['wavy-bold']} {...props}>
      {children}
    </b>
  );
};
