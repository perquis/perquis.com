import { IoIosSearch } from 'react-icons/io';

import styles from './InputSearch.module.scss';

export const InputSearch = () => {
  return (
    <>
      <IoIosSearch size={24} className={styles.icon} />
      <input type="search" placeholder="Search" className={styles.search} />
    </>
  );
};
