import clsx from 'clsx';
import type { Children, DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { roboto } from '@fonts/index';

import styles from './StickerButton.module.scss';

export const StickerButton: FC<Children & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({ children, ...props }) => (
  <button className={clsx(styles.button, roboto.className)} {...props}>
    {children}
  </button>
);
