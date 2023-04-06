import { Article } from '@components/Article';

import { useArticlesStore } from '@stories/articles';

import type { Articles } from '@graphql/databases/client';

export const LoadingArticlesList = () => {
  const [pageSize, isLoading] = useArticlesStore((state) => [state.pageSize, state.isLoading]);
  if (!isLoading) return null;

  const loaders = new Array(pageSize).fill(null).map((_, i) => i);

  return (
    <>
      {loaders.map((_, i) => (
        <Article key={i} article={{} as unknown as Articles} isLoadingAnimation />
      ))}
    </>
  );
};
