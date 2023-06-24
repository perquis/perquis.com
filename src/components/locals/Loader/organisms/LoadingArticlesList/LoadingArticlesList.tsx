import { Article } from '@components/locals/Article';
import type { Articles } from '@graphql/databases/client';

export const LoadingArticlesList = ({ pageSize = 0 }) => {
  const loaders = new Array(pageSize).fill(null).map((_, i) => i);

  return (
    <>
      {loaders.map((_, i) => (
        <Article key={i} article={{} as unknown as Articles} isLoadingAnimation />
      ))}
    </>
  );
};
