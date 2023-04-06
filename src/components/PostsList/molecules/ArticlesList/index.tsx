import type { InfiniteData } from '@tanstack/react-query';
import type { FC } from 'react';

import { Article } from '@components/Article';

import type { ArticlesListWithPagesQuery } from '@graphql/databases/client';

import { isNotFourteenDaysAgo } from '@utils/isNotFourteenDaysAgo';

interface IArticlesListProps {
  articles?: InfiniteData<ArticlesListWithPagesQuery['page']>;
}

export const ArticlesList: FC<IArticlesListProps> = ({ articles }) => {
  if (!articles) return <Article isLoadingAnimation />;

  // @ts-ignore
  return <>{articles.pages.map(({ edges }) => edges.map((article, i) => <Article key={i} article={article} isNewArticle={isNotFourteenDaysAgo(article.createdAt)} />))}</>;
};
