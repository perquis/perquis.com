import { Article } from '@components/Article';

import { useArticlesStore } from '@stories/articles';

import type { Articles } from '@graphql/databases/client';

import { isNotFourteenDaysAgo } from '@utils/isNotFourteenDaysAgo';

export const SearchedForArticlesList = () => {
  const [searchedForArticlesList] = useArticlesStore((state) => [state.searchedForArticlesList]);

  return searchedForArticlesList.length > 0 ? (
    <>
      {searchedForArticlesList.map((article, i) => (
        <Article key={i} article={article as Articles} isNewArticle={isNotFourteenDaysAgo(article.createdAt)} />
      ))}
    </>
  ) : null;
};
