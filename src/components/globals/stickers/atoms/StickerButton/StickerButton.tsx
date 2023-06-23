import clsx from 'clsx';
import type { MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC, ReactHTMLElementProps } from 'react';

import { roboto } from '@fonts/index';

import styles from './StickerButton.module.scss';

export const StickerButton: FC<Omit<ReactHTMLElementProps<HTMLButtonElement>, 'ref'> & MotionProps> = ({ children, ...props }) => (
  <motion.button className={clsx(styles.button, roboto.className)} {...props} whileTap={{ scale: 1.05 }} transition={{ duration: 0.05 }}>
    {children}
  </motion.button>
);
