import { Article } from '@components/Article';
import { ArticlesList } from '@components/PostsList/molecules/ArticlesList';
import { SearchedForArticlesList } from '@components/PostsList/molecules/SearchedForArticlesList';

import { useArticlesStore } from '@stories/articles';
import { useSearchBarStore } from '@stories/searchbar';
import { useTechnologiesStore } from '@stories/technologies';

export const PullingArticlesList = () => {
  const [keywords] = useSearchBarStore((state) => [state.keywords]);
  const [technologies] = useTechnologiesStore((state) => [state.technologies]);
  const [isLoading, searchedForArticlesList] = useArticlesStore((state) => [state.isLoading, state.searchedForArticlesList]);

  const isFoundArticles = technologies.length > 0 || keywords.length > 0;
  const isNotFoundArticles = isFoundArticles && !isLoading && searchedForArticlesList.length === 0;

  return isNotFoundArticles ? <Article isNotFoundArticle /> : isFoundArticles ? <SearchedForArticlesList /> : <ArticlesList />;
};
