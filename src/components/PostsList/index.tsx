import { SmallTitle } from '@components/PostsList/atoms/SmallTitle';

import styles from './styles/PostsList.module.scss';
import { Article } from './templates/Article';
import { SearchBar } from './templates/SearchBar';

const PostsList = () => {
  return (
    <div className={styles.posts}>
      <SmallTitle>My Articles</SmallTitle>
      <SearchBar />
      <Article isNewArticle />
    </div>
  );
};

export default PostsList;
