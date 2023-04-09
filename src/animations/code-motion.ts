import type { Variants } from 'framer-motion';

export const preVars: Variants = {
  initial: { height: 0 },
  animate: { height: 'auto' },
  exit: { height: 0 },
};

export const codeVars: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
