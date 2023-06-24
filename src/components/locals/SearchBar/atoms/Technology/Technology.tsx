import clsx from 'clsx';
import type { Children, FC } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

import { useGlobalStore } from '@stories';

import styles from './Technology.module.scss';

interface ITechnology {
  isSelected: boolean;
}

export const Technology: FC<Children & ITechnology> = ({ children, isSelected }) => {
  const [updateIsLoading, updateSelected] = useGlobalStore(({ updateIsLoading, updateSelected }) => [updateIsLoading, updateSelected]);

  return (
    <button
      className={clsx(styles.button, isSelected && styles.selected)}
      onClick={() => {
        updateIsLoading(true);
        updateSelected(String(children));
      }}
    >
      <span className={styles.span}>{children}</span>
      {isSelected && <IoMdCheckmark />}
    </button>
  );
};
