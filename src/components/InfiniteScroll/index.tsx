import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import type { Children, FC } from 'react';

import { useArticlesStore } from '@stories/articles';
import { useNavigationStore } from '@stories/navigation';

export const InfiniteScroll: FC<Children> = ({ children }) => {
  const { locale } = useRouter();
  const [page, setPage] = useState(1);
  const [toggleHomePage] = useNavigationStore((state) => [state.toggleHomePage]);
  const [pageSize, isLoading, hasNextPage, updateIsLoading, updateHasNextPage, addArticlesToList, searchedForArticlesList] = useArticlesStore((state) => [
    state.pageSize,
    state.isLoading,
    state.hasNextPage,
    state.updateIsLoading,
    state.updateHasNextPage,
    state.addArticlesToList,
    state.searchedForArticlesList,
  ]);
  const [progressYScroll, setProgressYScroll] = useState(0);
  const wasScrolledToDeterminedPosition = progressYScroll > 65;
  const isSearched = searchedForArticlesList.length < 1;

  // Getting scroll position while scrolling to bottom
  useScrollPosition(({ currPos }) => {
    const scrollHeight = document.body.offsetHeight - window.innerHeight;
    const progressYScroll = (currPos.y * -100) / scrollHeight;

    setProgressYScroll(Math.floor(progressYScroll));
  });

  // The hasNextPage value is reset to its initial state when changing the locale and clicking on logo.
  useEffect(() => {
    setPage(1);
    updateHasNextPage(true);
  }, [locale, updateHasNextPage, toggleHomePage]);

  useEffect(() => {
    if (wasScrolledToDeterminedPosition && hasNextPage && !isLoading && isSearched) {
      // set isLoading to true while fetching data
      updateIsLoading(true);

      fetch(`/api/articles?locale=${locale}&first=${pageSize}&skip=${pageSize * page}`)
        .then((res) => res.json())
        .then((res) => {
          // When the data from the API is fetched, the isLoading value changes to false.
          updateIsLoading(false);

          setPage(page + 1);

          // When there are no more data to fetch from the API, the hasNextPage value changes to false.
          if (!res.hasNextPage) updateHasNextPage(false);
          addArticlesToList(res.articles);
        });
    }
  }, [locale, page, pageSize, isSearched, isLoading, hasNextPage, wasScrolledToDeterminedPosition, addArticlesToList, updateHasNextPage, updateIsLoading]);

  return <>{children}</>;
};
