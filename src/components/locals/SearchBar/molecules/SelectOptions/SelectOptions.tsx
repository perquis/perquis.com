import { motion } from 'framer-motion';
import { type FC, type HTMLProps, useMemo } from 'react';
import FocusLock from 'react-focus-lock';

import { vars } from '@animations';
import { Technology } from '@components/locals/SearchBar/atoms';
import type { ExtendedRefs, ReferenceType } from '@floating-ui/react';
import { useGlobalStore } from '@stories';

import styles from './SelectOptions.module.scss';

interface ISelectOptions {
  y: number | null;
  refs: ExtendedRefs<ReferenceType>;
  getFloatingProps: (userProps?: HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
}

export const SelectOptions: FC<Record<'options', ISelectOptions>> = ({ options: { y, refs, getFloatingProps } }) => {
  const top = useMemo(() => y ?? 0, [y]);
  const positionCond = useMemo(() => top > 0, [top]);
  const [selected, allItems] = useGlobalStore(({ selected, allItems }) => [selected, allItems]);

  return (
    <FocusLock>
      <motion.div
        style={{ top }}
        variants={vars}
        animate="animate"
        ref={refs.setFloating}
        {...getFloatingProps()}
        className={styles['pop-up']}
        exit={positionCond ? 'exit' : 'mirror'}
        initial={positionCond ? 'initial' : 'mirror'}
      >
        {allItems.map((technology) => (
          <Technology key={technology} isSelected={selected.includes(technology)}>
            {technology}
          </Technology>
        ))}
      </motion.div>
    </FocusLock>
  );
};
