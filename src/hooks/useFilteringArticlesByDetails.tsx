import { useInfiniteQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { fetchAllArticlesListPagination } from '@libraries/fetchers/fetchAllArticlesListPagination';

import { useSearchBarStore } from '@stories/searchbar';
import { useTechnologiesStore } from '@stories/technologies';

import { useProgressYScroll } from '@hooks/useProgressYScroll';

export const useFilteringArticlesByDetails = () => {
  const [title] = useSearchBarStore((state) => [state.keywords, state.status]);
  const [tags] = useTechnologiesStore((state) => [state.technologies]);
  const { progressYScroll } = useProgressYScroll();
  const { locale } = useRouter();

  const {
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    data: articles,
  } = useInfiniteQuery({
    queryKey: ['articles', locale, title, tags],
    queryFn: ({ pageParam = 0 }) => fetchAllArticlesListPagination({ locale: locale ?? '', skip: pageParam ?? 0, title, tags }),
    getNextPageParam: ({ pageInfo }) => pageInfo?.hasNextPage ?? false,
  });

  useEffect(() => {
    if (progressYScroll > 65 && hasNextPage) fetchNextPage();
  }, [progressYScroll, hasNextPage, fetchNextPage]);

  const isNotFoundArticles = articles?.pages[0].edges.length === 0;
  const pageSize = articles?.pages[articles?.pages.length - 1].pageInfo.pageSize ?? 0;

  return { articles, pageSize, isLoading, isFetching, isNotFoundArticles };
};
