import clsx from 'clsx';
import type { MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC, ReactHTMLElementProps } from 'react';

import { firaCode } from '@fonts/FiraCode';

import styles from './LanguageSelector.module.scss';

export const LanguageSelector: FC<Omit<ReactHTMLElementProps<HTMLButtonElement>, 'ref'> & { isActive: boolean } & MotionProps> = ({ children, isActive, ...props }) => {
  const animation = (isActive: boolean) => ({ bottom: isActive ? -6 : 0 });

  return (
    <motion.button
      className={clsx(styles['pick-programming-language'], isActive && styles['is-active'], !isActive && styles['is-not-active'], firaCode.className, 'pick-language')}
      animate={animation(!isActive)}
      whileHover={animation(isActive)}
      whileFocus={animation(isActive)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
