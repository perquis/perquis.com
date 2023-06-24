import type { MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC, ReactHTMLElementProps } from 'react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';

import { vars } from '@animations';
import { useBlurStore } from '@stories';

import styles from './Modal.module.scss';

export const Modal: FC<{ id: ModalId } & Omit<ReactHTMLElementProps<HTMLDivElement>, 'ref'> & MotionProps> = ({ children, id, ...props }) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<Element | null>(null);
  const [_isBlur, _updateIsBlur] = useBlurStore((state) => [state.isBlur, state.updateIsBlur]);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>(id);
    setMounted(true);
  }, [id]);

  return mounted && ref.current
    ? createPortal(
        <motion.div variants={vars} className={styles.overlay} initial="initial" animate="animate" exit="exit" {...props}>
          <FocusLock>{children}</FocusLock>
        </motion.div>,
        ref.current
      )
    : null;
};
