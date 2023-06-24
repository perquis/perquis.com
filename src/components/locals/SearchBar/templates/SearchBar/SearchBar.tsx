import { useEffect } from 'react';

import { InputSearch } from '@components/locals/SearchBar/molecules';
import { SelectTechnology } from '@components/locals/SearchBar/organisms';
import { useArticlesStore, useSearchBarStore, useTechnologiesStore } from '@stories';

import styles from './SearchBar.module.scss';

export const SearchBar = () => {
  const [technologies] = useTechnologiesStore((state) => [state.technologies]);
  const [keywords, updateStatus] = useSearchBarStore((state) => [state.keywords, state.updateStatus]);
  const [updateSearchedForArticlesList] = useArticlesStore((state) => [state.updateSearchedForArticlesList]);

  useEffect(() => {
    if (keywords.length === 0 && technologies.length > 0) updateStatus('tags');
    else if (keywords.length > 0 && technologies.length === 0) updateStatus('search');
    else if (keywords.length > 0 && technologies.length > 0) updateStatus('search-tags');
    else {
      updateStatus('');
      updateSearchedForArticlesList([]);
    }
  }, [keywords, technologies, updateStatus, updateSearchedForArticlesList]);

  return (
    <div className={styles.wrapper}>
      <InputSearch />
      <SelectTechnology />
    </div>
  );
};
