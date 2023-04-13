import type { InfiniteData } from '@tanstack/react-query';
import type { FC } from 'react';

import { Article } from '@components/Article';

import type { ArticlesListPaginationQuery } from '@graphql/databases/client';

import { isNotFourteenDaysAgo } from '@utils/isNotFourteenDaysAgo';

interface IArticlesListProps {
  articles?: InfiniteData<ArticlesListPaginationQuery['page']>;
}

export const ArticlesList: FC<IArticlesListProps> = ({ articles }) => {
  // @ts-ignore
  return <>{articles?.pages?.map(({ edges }) => edges?.map((article, i) => <Article key={i} article={article} isNewArticle={isNotFourteenDaysAgo(article.createdAt)} />))}</>;
};
