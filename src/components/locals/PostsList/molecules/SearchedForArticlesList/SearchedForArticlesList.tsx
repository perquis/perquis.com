import { Article } from '@components/locals/Article';
import type { Articles } from '@graphql/databases/client';
import { useArticlesStore } from '@stories';
import { isNotFourteenDaysAgo } from '@utils';

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
