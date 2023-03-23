import type { MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { Children, FC } from 'react';
import { createPortal } from 'react-dom';

import { vars } from '@animations/pop-up';

import { useBlurStore } from '@stories/blur';

import styles from './Modal.module.scss';

export const Modal: FC<Children & { id: `#${string}` } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & MotionProps> = ({ children, id, ...props }) => {
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
          {children}
        </motion.div>,
        ref.current
      )
    : null;
};
