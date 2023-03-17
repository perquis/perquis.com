import { InfiniteScroll } from '@components/PostsList/atoms/InfiniteScroll';
import { Heading } from '@components/PostsList/molecules/Heading';
import { ChosenTags } from '@components/PostsList/organisms/ChosenTags';
import { IsLoading } from '@components/PostsList/organisms/IsLoading';
import styles from '@components/PostsList/styles/PostsList.module.scss';
import { Article } from '@components/PostsList/templates/Article';
import { SearchBar } from '@components/PostsList/templates/SearchBar';

import { useArticlesStore } from '@stories/articles';
import { useTechnologiesStore } from '@stories/technologies';

import { isNotFourteenDaysAgo } from '@utils/isNotFourteenDaysAgo';

const PostsList = () => {
  const [articles, searchedForArticlesList] = useArticlesStore((state) => [state.articles, state.searchedForArticlesList]);
  const [technologies] = useTechnologiesStore((state) => [state.technologies]);
  const filteredArticles =
    searchedForArticlesList.length > 0 ? (
      <>
        {searchedForArticlesList.map((article, i) => (
          <Article key={i} article={article} isNewArticle={isNotFourteenDaysAgo(article.createdAt)} />
        ))}
      </>
    ) : null;

  return (
    <div className={styles.posts}>
      <Heading />
      <SearchBar />
      <ChosenTags />
      <InfiniteScroll>
        {technologies.length > 0 ? filteredArticles : articles.map((article, i) => <Article key={i} article={article} isNewArticle={isNotFourteenDaysAgo(article.createdAt)} />)}
      </InfiniteScroll>
      <IsLoading />
    </div>
  );
};

export default PostsList;
