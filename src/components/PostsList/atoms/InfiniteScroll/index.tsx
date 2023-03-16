import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import type { Children, FC } from 'react';

import { useArticlesStore } from '@stories/articles';

export const InfiniteScroll: FC<Children> = ({ children }) => {
  const { locale } = useRouter();
  const [isLoading, hasNextPage, updateHasNextPage, addArticlesToList, updateIsLoading] = useArticlesStore((state) => [
    state.isLoading,
    state.hasNextPage,
    state.updateHasNextPage,
    state.addArticlesToList,
    state.updateIsLoading,
  ]);
  const [progressYScroll, setProgressYScroll] = useState(0);
  const wasScrolledToDeterminedPosition = progressYScroll > 65;

  // Getting scroll position while scrolling to bottom
  useScrollPosition(({ currPos }) => {
    const scrollHeight = document.body.offsetHeight - window.innerHeight;
    const progressYScroll = (currPos.y * -100) / scrollHeight;

    setProgressYScroll(Math.floor(progressYScroll));
  });

  // The hasNextPage value is reset to its initial state when changing the locale.
  useEffect(() => updateHasNextPage(true), [locale, updateHasNextPage]);

  useEffect(() => {
    if (wasScrolledToDeterminedPosition && hasNextPage && !isLoading) {
      // set isLoading to true while fetching data
      updateIsLoading(true);

      fetch(`/api/articles?locale=${locale}&skip=2`)
        .then((res) => res.json())
        .then((res) => {
          // When the data from the API is fetched, the isLoading value changes to false.
          updateIsLoading(false);

          // When there are no more data to fetch from the API, the hasNextPage value changes to false.
          if (!res.hasNextPage) updateHasNextPage(false);
          addArticlesToList(res.articles);
        });
    }
  }, [locale, isLoading, hasNextPage, wasScrolledToDeterminedPosition, addArticlesToList, updateHasNextPage, updateIsLoading]);

  return <>{children}</>;
};
