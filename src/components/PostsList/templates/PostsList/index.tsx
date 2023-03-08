import { Title } from '@components/PostsList/atoms/SmallTitle';
import { SearchBar } from '@components/PostsList/organisms/SearchBar';

import styles from './PostsList.module.scss';

export const PostsList = () => {
  return (
    <div className={styles.posts}>
      <Title>My Articles</Title>
      <SearchBar />
    </div>
  );
};
