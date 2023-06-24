import debounce from 'lodash.debounce';
import { IoIosSearch } from 'react-icons/io';

import { useInternationalizedRouting } from '@hooks';
import { useGlobalStore } from '@stories';

import styles from './InputSearch.module.scss';

export const InputSearch = () => {
  const { postsListPlaceholder } = useInternationalizedRouting('home');
  const [keywords, updateKeywords] = useGlobalStore(({ keywords, updateKeywords }) => [keywords, updateKeywords]);

  return (
    <>
      <IoIosSearch size={24} className={styles.icon} />
      <input type="search" placeholder={postsListPlaceholder} className={styles.search} defaultValue={keywords} onChange={debounce((e) => updateKeywords(e.target.value), 500)} />
    </>
  );
};
