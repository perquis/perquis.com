import type { ExtendedRefs, ReferenceType } from '@floating-ui/react';
import { motion } from 'framer-motion';
import type { FC, HTMLProps } from 'react';
import FocusLock from 'react-focus-lock';
import { useTechnologiesStore } from 'src/stories/technologies';

import { Technology } from '@components/SearchBar/atoms/Technology';

import { vars } from '@animations/pop-up';

import styles from './SelectOptions.module.scss';

interface ISelectOptions {
  y: number | null;
  refs: ExtendedRefs<ReferenceType>;
  getFloatingProps: (userProps?: HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
}

export const SelectOptions: FC<Record<'options', ISelectOptions>> = ({ options: { y, refs, getFloatingProps } }) => {
  const top = y ?? 0;
  const positionCond = top > 0;
  const [compareTechnologies, technologies] = useTechnologiesStore((state) => [state.technologies, state.getAllTechnologiesList]);

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
        {technologies.map((technology) => (
          <Technology key={technology} isSelected={compareTechnologies.includes(technology)}>
            {technology}
          </Technology>
        ))}
      </motion.div>
    </FocusLock>
  );
};
