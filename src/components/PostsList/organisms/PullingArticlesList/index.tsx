import { Article } from '@components/Article';
import { ArticlesList } from '@components/PostsList/molecules/ArticlesList';
import { SearchedForArticlesList } from '@components/PostsList/molecules/SearchedForArticlesList';

import { useArticlesStore } from '@stories/articles';
import { useSearchBarStore } from '@stories/searchbar';
import { useTechnologiesStore } from '@stories/technologies';

import { useFilteringArticlesByDetails } from '@hooks/useFilteringArticlesByDetails';

export const PullingArticlesList = () => {
  const [isLoading, searchedForArticlesList] = useArticlesStore((state) => [state.isLoading, state.searchedForArticlesList]);
  const [technologies] = useTechnologiesStore((state) => [state.technologies]);
  const [keywords] = useSearchBarStore((state) => [state.keywords]);
  const { articles } = useFilteringArticlesByDetails();

  const isFoundArticles = technologies.length > 0 || keywords.length > 0;
  const isNotFoundArticles = isFoundArticles && !isLoading && searchedForArticlesList.length === 0;

  if (isNotFoundArticles) return <Article isNotFoundArticle />;
  if (isFoundArticles) return <SearchedForArticlesList />;

  return <ArticlesList articles={articles} />;
};
