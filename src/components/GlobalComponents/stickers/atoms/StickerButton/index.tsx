import clsx from 'clsx';
import type { FC, ReactHTMLElementProps } from 'react';

import { roboto } from '@fonts/index';

import styles from './StickerButton.module.scss';

export const StickerButton: FC<ReactHTMLElementProps<HTMLButtonElement>> = ({ children, ...props }) => (
  <button className={clsx(styles.button, roboto.className)} {...props}>
    {children}
  </button>
);
