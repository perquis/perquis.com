import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useArticlesStore } from '@stories/articles';
import { useNavigationStore } from '@stories/navigation';

import { useProgressYScroll } from '@hooks/useProgressYScroll';

export const useFilteringArticlesByDetails = () => {
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
  const { progressYScroll } = useProgressYScroll();
  const wasScrolledToDeterminedPosition = progressYScroll > 65;
  const isSearched = searchedForArticlesList.length < 1;

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
};
