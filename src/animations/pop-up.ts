import type { Variants } from 'framer-motion';

export const vars: Variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 40,
    opacity: 0,
  },
};
