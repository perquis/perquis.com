import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useArticlesStore } from '@stories/articles';

import type { ArticlesListWithPagesQuery } from '@graphql/databases/client';

import { useProgressYScroll } from '@hooks/useProgressYScroll';

import { pageSize } from '@data/presets';

const fetchArticlesList = async (locale: string, skip: number): Promise<ArticlesListWithPagesQuery['page']> => {
  const { data } = await axios(`/api/articles?locale=${locale}&skip=${skip}`);
  return data;
};

export const useFilteringArticlesByDetails = () => {
  const [updateIsLoading] = useArticlesStore((state) => [state.updateIsLoading]);
  const [isPullData, setPullData] = useState(false);
  const { progressYScroll } = useProgressYScroll();
  const [skipPage, setSkipPage] = useState(0);
  const { locale } = useRouter();

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['articles', locale],
    queryFn: ({ pageParam = 0 }) => fetchArticlesList(locale ?? '', pageParam),
    getNextPageParam: ({ pageInfo }) => (pageInfo.hasNextPage ? skipPage : null),
  });

  useEffect(() => {
    if (skipPage !== 0) fetchNextPage();
  }, [fetchNextPage, skipPage]);

  useEffect(() => {
    if (isPullData && hasNextPage) setSkipPage((prev) => prev + pageSize);
  }, [isPullData, hasNextPage]);

  useEffect(() => setSkipPage(0), [locale]);
  useEffect(() => updateIsLoading(isLoading), [isLoading, updateIsLoading]);
  useEffect(() => (progressYScroll > 80 && hasNextPage ? setPullData(true) : setPullData(false)), [progressYScroll, hasNextPage]);

  return { articles: data, isLoading, hasNextPage, fetchNextPage };
};
