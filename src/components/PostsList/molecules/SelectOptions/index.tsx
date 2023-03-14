import type { ExtendedRefs, ReferenceType } from '@floating-ui/react';
import { motion } from 'framer-motion';
import type { FC, HTMLProps } from 'react';
import FocusLock from 'react-focus-lock';
import { useTechnologiesStore } from 'src/stories/technologies';

import { Technology } from '@components/PostsList/atoms/Technology';

import { vars } from '@animations/pop-up';

import styles from './SelectOptions.module.scss';

interface ISelectOptions {
  y: number | null;
  refs: ExtendedRefs<ReferenceType>;
  getFloatingProps: (userProps?: HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
}

export const SelectOptions: FC<Record<'options', ISelectOptions>> = ({ options: { y, refs, getFloatingProps } }) => {
  const [compareTechnologies, technologies] = useTechnologiesStore((state) => [state.technologies, state.getAllTechnologiesList]);
  const top = y ?? 0;
  const positionCond = top > 0;

  return (
    <FocusLock>
      <motion.div
        ref={refs.setFloating}
        {...getFloatingProps()}
        style={{ top }}
        className={styles['pop-up']}
        variants={vars}
        initial={positionCond ? 'initial' : 'mirror'}
        animate="animate"
        exit={positionCond ? 'exit' : 'mirror'}
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
