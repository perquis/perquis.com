import type { Children, FC } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import { useGlobalStore } from '@stories';

import styles from './DeleteTechnology.module.scss';

export const DeleteTechnology: FC<Children> = ({ children }) => {
  const [updatePosts, deleteTechnology] = useGlobalStore(({ updatePosts, updateSelected }) => [updatePosts, updateSelected]);

  return (
    <button
      className={styles.delete}
      onClick={() => {
        updatePosts([]);
        deleteTechnology(String(children));
      }}
    >
      <span>{children}</span>
      <IoCloseOutline size={18} />
    </button>
  );
};
