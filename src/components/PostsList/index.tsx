import { Title } from '@components/PostsList/atoms/SmallTitle';

import styles from './styles/PostsList.module.scss';
import { SearchBar } from './templates/SearchBar';

const PostsList = () => {
  return (
    <div className={styles.posts}>
      <Title>My Articles</Title>
      <SearchBar />
    </div>
  );
};

export default PostsList;
