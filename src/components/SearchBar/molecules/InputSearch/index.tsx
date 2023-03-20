import useTranslation from 'next-translate/useTranslation';
import { IoIosSearch } from 'react-icons/io';

import { useSearchBarStore } from '@stories/searchbar';

import styles from './InputSearch.module.scss';

export const InputSearch = () => {
  const { t } = useTranslation('home');
  const placeholder = t('posts-list.search-placeholder');
  const [updateKeywords] = useSearchBarStore((state) => [state.updateKeywords]);

  return (
    <>
      <IoIosSearch size={24} className={styles.icon} />
      <input type="search" placeholder={placeholder} className={styles.search} onChange={(e) => setTimeout(() => updateKeywords(e.target.value), 500)} />
    </>
  );
};
