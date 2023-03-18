import type { Children, FC } from 'react';

import { useFilteringArticlesByDetails } from '@hooks/useFilteringArticlesByDetails';

export const InfiniteScroll: FC<Children> = ({ children }) => {
  useFilteringArticlesByDetails();

  return <>{children}</>;
};
