import type { Children, FC } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { useTechnologiesStore } from 'src/stories/technologies';

import styles from './Technology.module.scss';

interface ITechnology {
  isSelected: boolean;
}

export const Technology: FC<Children & ITechnology> = ({ children, isSelected }) => {
  const [args, updateTechnologies, deleteTechnology] = useTechnologiesStore((state) => [state.args, state.updateTechnologies, state.deleteTechnology]);
  const handleUpdatingTechnologies = (technology: string) => (args.has(technology) ? deleteTechnology(technology) : updateTechnologies(technology));

  return (
    <button className={`${styles.button} ${isSelected ? styles.selected : ''}`} onClick={() => handleUpdatingTechnologies(children as string)}>
      <span className={styles.span}>{children}</span>
      {isSelected && <IoMdCheckmark />}
    </button>
  );
};
