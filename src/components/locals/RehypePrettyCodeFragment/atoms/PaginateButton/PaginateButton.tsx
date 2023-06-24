import type { MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC, ReactHTMLElementProps } from 'react';

import styles from './PaginateButton.module.scss';

interface IPaginateButton {
  disabled?: boolean;
}

export const PaginateButton: FC<Omit<ReactHTMLElementProps<HTMLButtonElement>, 'ref'> & MotionProps & IPaginateButton> = ({ children, disabled, ...props }) => {
  return (
    <motion.button className={styles['paginate-button']} {...props} disabled={disabled} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.button>
  );
};
