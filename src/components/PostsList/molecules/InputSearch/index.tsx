import useTranslation from 'next-translate/useTranslation';
import { IoIosSearch } from 'react-icons/io';

import styles from './InputSearch.module.scss';

export const InputSearch = () => {
  const { t } = useTranslation('home');
  const placeholder = t('posts-list.search-placeholder');

  return (
    <>
      <IoIosSearch size={24} className={styles.icon} />
      <input type="search" placeholder={placeholder} className={styles.search} />
    </>
  );
};
