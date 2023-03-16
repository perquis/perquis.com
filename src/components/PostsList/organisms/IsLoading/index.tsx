import { Article } from '@components/PostsList/templates/Article';

import { useArticlesStore } from '@stories/articles';
import type { PickedArticleProps } from '@stories/articles';

const loaders = new Array(6).fill(null).map((_, i) => i);

export const IsLoading = () => {
  const [isLoading] = useArticlesStore((state) => [state.isLoading]);
  if (!isLoading) return null;

  return (
    <>
      {loaders.map((_, i) => (
        <Article key={i} article={{} as unknown as PickedArticleProps} isLoadingAnimation />
      ))}
    </>
  );
};
