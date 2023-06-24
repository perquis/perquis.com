import { Article } from '@components/locals/Article';
import { LoadingArticlesList } from '@components/locals/Loader';
import { ArticlesList } from '@components/locals/PostsList/molecules/ArticlesList/ArticlesList';
import { useFilteringArticlesByDetails } from '@hooks';

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
