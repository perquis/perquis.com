import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

import { useProgressYScroll } from '@hooks';
import { fetchAllArticlesListPagination } from '@libraries/fetchers';
import { useGlobalStore } from '@stories';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useFilteringArticlesByDetails = () => {
  const [tags, title] = useGlobalStore(({ selected, keywords }) => [selected, keywords]);
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

  const isNotFoundArticles = useMemo(() => articles?.pages[0].edges.length === 0, [articles?.pages]);
  const pageSize = useMemo(() => articles?.pages[articles?.pages.length - 1].pageInfo.pageSize ?? 0, [articles?.pages]);

  return { articles, pageSize, isLoading, isFetching, isNotFoundArticles };
};
