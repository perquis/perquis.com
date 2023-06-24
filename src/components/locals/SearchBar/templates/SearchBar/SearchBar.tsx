import { useEffect } from 'react';

import { InputSearch } from '@components/locals/SearchBar/molecules';
import { SelectTechnology } from '@components/locals/SearchBar/organisms';
import { useGlobalStore } from '@stories';

import styles from './SearchBar.module.scss';

export const SearchBar = () => {
  const [technologies, keywords, updatePosts, updateStatus] = useGlobalStore(({ selected, keywords, updatePosts, updateStatus }) => [
    selected,
    keywords,
    updatePosts,
    updateStatus,
  ]);

  useEffect(() => {
    if (keywords.length === 0 && technologies.length > 0) updateStatus('tags');
    else if (keywords.length > 0 && technologies.length === 0) updateStatus('search');
    else if (keywords.length > 0 && technologies.length > 0) updateStatus('search-tags');
    else {
      updateStatus('');
      updatePosts([]);
    }
  }, [keywords, technologies, updateStatus, updatePosts]);

  return (
    <div className={styles.wrapper}>
      <InputSearch />
      <SelectTechnology />
    </div>
  );
};
