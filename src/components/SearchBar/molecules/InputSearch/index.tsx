import debounce from 'lodash.debounce';
import { IoIosSearch } from 'react-icons/io';

import { useSearchBarStore } from '@stories/searchbar';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './InputSearch.module.scss';

export const InputSearch = () => {
  const { postsListPlaceholder } = useInternationalizedRouting('home');
  const [updateKeywords] = useSearchBarStore((state) => [state.updateKeywords]);

  return (
    <>
      <IoIosSearch size={24} className={styles.icon} />
      <input type="search" placeholder={postsListPlaceholder} className={styles.search} onChange={debounce((e) => updateKeywords(e.target.value), 500)} />
    </>
  );
};
