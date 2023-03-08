import type { ExtendedRefs, ReferenceType } from '@floating-ui/react';
import { motion } from 'framer-motion';
import type { FC, HTMLProps } from 'react';
import FocusLock from 'react-focus-lock';

import { Technology } from '@components/PostsList/atoms/Technology';

import { vars } from '@animations/pop-up';

import { technologies } from '@data/technologies';

import styles from './SelectOptions.module.scss';

interface ISelectOptions {
  x: number | null;
  y: number | null;
  refs: ExtendedRefs<ReferenceType>;
  getFloatingProps: (userProps?: HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
}

export const SelectOptions: FC<Record<'options', ISelectOptions>> = ({ options: { x, y, refs, getFloatingProps } }) => {
  const top = y ?? 0;
  const left = typeof x === 'number' ? x + 8 : 0;

  return (
    <FocusLock>
      <motion.div ref={refs.setFloating} {...getFloatingProps()} style={{ top, left }} className={styles['pop-up']} variants={vars} initial="initial" animate="animate" exit="exit">
        {technologies.map((technology) => (
          <Technology key={technology}>{technology}</Technology>
        ))}
      </motion.div>
    </FocusLock>
  );
};
