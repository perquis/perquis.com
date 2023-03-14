import type { Children, FC } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useTechnologiesStore } from 'src/stories/technologies';

import styles from './DeleteTechnology.module.scss';

export const DeleteTechnology: FC<Children> = ({ children }) => {
  const [deleteTechnology] = useTechnologiesStore((state) => [state.deleteTechnology]);

  return (
    <button className={styles.delete} onClick={() => deleteTechnology(children as string)}>
      <span>{children}</span>
      <IoCloseOutline size={18} />
    </button>
  );
};
