import type { ExtendedRefs, ReferenceType } from '@floating-ui/react';
import { motion } from 'framer-motion';
import type { FC, HTMLProps } from 'react';
import FocusLock from 'react-focus-lock';

import { Technology } from '@components/PostsList/atoms/Technology';

import { vars } from '@animations/pop-up';

import { useTechnologiesStore } from '@store/technologies';

import styles from './SelectOptions.module.scss';

interface ISelectOptions {
  y: number | null;
  refs: ExtendedRefs<ReferenceType>;
  getFloatingProps: (userProps?: HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
}

export const SelectOptions: FC<Record<'options', ISelectOptions>> = ({ options: { y, refs, getFloatingProps } }) => {
  const [compareTechnologies, technologies] = useTechnologiesStore((state) => [state.technologies, state.getAllTechnologiesList]);
  const top = y ?? 0;

  return (
    <FocusLock>
      <motion.div ref={refs.setFloating} {...getFloatingProps()} style={{ top }} className={styles['pop-up']} variants={vars} initial="initial" animate="animate" exit="exit">
        {technologies.map((technology) => (
          <Technology key={technology} isSelected={compareTechnologies.includes(technology)}>
            {technology}
          </Technology>
        ))}
      </motion.div>
    </FocusLock>
  );
};
