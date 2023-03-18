import { useEffect } from 'react';

import { InputSearch } from '@components/SearchBar/molecules/InputSearch';
import { SelectTechnology } from '@components/SearchBar/organisms/SelectTechnology';

import { useArticlesStore } from '@stories/articles';
import { useSearchBarStore } from '@stories/searchbar';
import { useTechnologiesStore } from '@stories/technologies';

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
