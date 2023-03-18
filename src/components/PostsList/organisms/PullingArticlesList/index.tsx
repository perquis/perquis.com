import { ArticlesList } from '@components/PostsList/molecules/ArticlesList';
import { SearchedForArticlesList } from '@components/PostsList/molecules/SearchedForArticlesList';

import { useTechnologiesStore } from '@stories/technologies';

export const PullingArticlesList = () => {
  const [technologies] = useTechnologiesStore((state) => [state.technologies]);

  return technologies.length > 0 ? <SearchedForArticlesList /> : <ArticlesList />;
};
