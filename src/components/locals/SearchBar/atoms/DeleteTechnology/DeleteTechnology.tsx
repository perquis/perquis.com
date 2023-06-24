import type { Children, FC } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import { useArticlesStore, useTechnologiesStore } from '@stories';

import styles from './DeleteTechnology.module.scss';

export const DeleteTechnology: FC<Children> = ({ children }) => {
  const [deleteTechnology] = useTechnologiesStore((state) => [state.deleteTechnology]);
  const [updateSearchedForArticlesList] = useArticlesStore((state) => [state.updateSearchedForArticlesList]);

  return (
    <button
      className={styles.delete}
      onClick={() => {
        updateSearchedForArticlesList([]);
        deleteTechnology(children as string);
      }}
    >
      <span>{children}</span>
      <IoCloseOutline size={18} />
    </button>
  );
};
