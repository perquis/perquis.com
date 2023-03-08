import { InputSearch } from '@components/PostsList/molecules/InputSearch';
import { SelectTechnology } from '@components/PostsList/organisms/SelectTechnology';

import styles from './SearchBar.module.scss';

export const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <InputSearch />
      <SelectTechnology />
    </div>
  );
};
