import { InputSearch } from '@components/SearchBar/molecules/InputSearch';
import { SelectTechnology } from '@components/SearchBar/organisms/SelectTechnology';

import styles from './SearchBar.module.scss';

export const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <InputSearch />
      <SelectTechnology />
    </div>
  );
};
