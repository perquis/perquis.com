import { Article } from '@components/Article';

import { useArticlesStore } from '@stories/articles';
import type { PickedArticleProps } from '@stories/articles';

export const LoadingArticlesList = () => {
  const [pageSize, isLoading] = useArticlesStore((state) => [state.pageSize, state.isLoading]);
  if (!isLoading) return null;

  const loaders = new Array(pageSize).fill(null).map((_, i) => i);

  return (
    <>
      {loaders.map((_, i) => (
        <Article key={i} article={{} as unknown as PickedArticleProps} isLoadingAnimation />
      ))}
    </>
  );
};
