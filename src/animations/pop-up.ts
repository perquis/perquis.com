import type { Variants } from 'framer-motion';

export const vars: Variants = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 60,
    opacity: 0,
  },
  mirror: {
    y: -60,
    opacity: 0,
  },
};
