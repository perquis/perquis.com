import { InfiniteScroll } from '@components/PostsList/atoms/InfiniteScroll';
import { Heading } from '@components/PostsList/molecules/Heading';
import { ChosenTags } from '@components/PostsList/organisms/ChosenTags';
import { IsLoading } from '@components/PostsList/organisms/IsLoading';
import styles from '@components/PostsList/styles/PostsList.module.scss';
import { Article } from '@components/PostsList/templates/Article';
import { SearchBar } from '@components/PostsList/templates/SearchBar';

import { useArticlesStore } from '@stories/articles';

import { isNotFourteenDaysAgo } from '@utils/isNotFourteenDaysAgo';

const PostsList = () => {
  const [articles] = useArticlesStore((state) => [state.articles]);

  return (
    <div className={styles.posts}>
      <Heading />
      <SearchBar />
      <ChosenTags />
      <InfiniteScroll>
        {articles.map((article, i) => (
          <Article key={i} article={article} isNewArticle={isNotFourteenDaysAgo(article.published)} />
        ))}
      </InfiniteScroll>
      <IsLoading />
    </div>
  );
};

export default PostsList;
