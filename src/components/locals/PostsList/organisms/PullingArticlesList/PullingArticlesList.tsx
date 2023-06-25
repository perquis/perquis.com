import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

import { Article } from '@components/locals/Article';
import { LoadingArticlesList } from '@components/locals/Loader';
import { ArticlesList } from '@components/locals/PostsList/molecules/ArticlesList/ArticlesList';
import { useScroll } from '@hooks';
import { fetchAllArticlesListPagination } from '@libraries/fetchers';
import { useGlobalStore } from '@stories';
import { useInfiniteQuery } from '@tanstack/react-query';

export const PullingArticlesList = () => {
  const { locale } = useRouter(),
    { progressYScroll } = useScroll(),
    [tags, title] = useGlobalStore(({ selected, keywords }) => [selected, keywords]);

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

  const isAddArticles = useMemo(() => progressYScroll > 65 && (hasNextPage ?? false), [progressYScroll, hasNextPage]);

  useEffect(() => {
    if (isAddArticles) fetchNextPage();
  }, [isAddArticles, fetchNextPage]);

  const isNotFoundArticles = useMemo(() => articles?.pages[0].edges.length === 0, [articles?.pages]);
  const pageSize = useMemo(() => articles?.pages[articles?.pages.length - 1].pageInfo.pageSize ?? 0, [articles?.pages]);

  if (isNotFoundArticles) return <Article isNotFoundArticle />;
  if (isLoading) return <LoadingArticlesList pageSize={1} />;

  return (
    <>
      <ArticlesList articles={articles} />
      {isFetching && <LoadingArticlesList pageSize={pageSize} />}
    </>
  );
};
