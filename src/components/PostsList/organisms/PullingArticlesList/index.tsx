import { Article } from '@components/Article';
import { LoadingArticlesList } from '@components/Loader/organisms/LoadingArticlesList';
import { ArticlesList } from '@components/PostsList/molecules/ArticlesList';

import { useFilteringArticlesByDetails } from '@hooks/useFilteringArticlesByDetails';

export const PullingArticlesList = () => {
  const { articles, pageSize, isLoading, isFetching, isNotFoundArticles } = useFilteringArticlesByDetails();

  if (isNotFoundArticles) return <Article isNotFoundArticle />;
  if (isLoading) return <LoadingArticlesList pageSize={1} />;

  return (
    <>
      <ArticlesList articles={articles} />
      {isFetching && <LoadingArticlesList pageSize={pageSize} />}
    </>
  );
};
