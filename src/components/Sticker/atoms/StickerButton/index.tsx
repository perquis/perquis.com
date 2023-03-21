import type { Children, DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { roboto } from '@fonts/index';

import styles from './StickerButton.module.scss';

export const StickerButton: FC<Children & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({ children, ...props }) => (
  <button className={`${styles.button} ${roboto.style}`} {...props}>
    {children}
  </button>
);
