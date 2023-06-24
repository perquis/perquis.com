import { useMemo } from 'react';

import { useGlobalStore } from '@stories';

export const useSearchingForArticles = () => {
  const [technologies] = useGlobalStore(({ selected }) => [selected]);
  const isTechnologies = useMemo(() => technologies.length > 0, [technologies]);

  return { isTechnologies };
};
