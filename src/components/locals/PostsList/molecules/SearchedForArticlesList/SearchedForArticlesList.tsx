import { Article } from '@components/locals/Article';
import type { Articles } from '@graphql/databases/client';
import { useGlobalStore } from '@stories';
import { isNotFourteenDaysAgo } from '@utils';

export const SearchedForArticlesList = () => {
  const [posts] = useGlobalStore(({ posts }) => [posts]);

  return posts.length > 0 ? (
    <>
      {posts.map((article, i) => (
        <Article key={i} article={article as Articles} isNewArticle={isNotFourteenDaysAgo(article.createdAt)} />
      ))}
    </>
  ) : null;
};
