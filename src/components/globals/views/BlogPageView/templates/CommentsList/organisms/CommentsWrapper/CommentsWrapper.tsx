import { useRouter } from 'next/router';

import { Comment, LoadComment } from '@components/Comment';
import { Button } from '@components/globals/atoms';
import { useInternationalizedRouting } from '@hooks';
import { Dashed } from '@icons/Dashed';
import { fetchAllCommentsList } from '@libraries/fetchers';
import { usePostsListStore, useRefetchStore } from '@stories';
import { useInfiniteQuery } from '@tanstack/react-query';

export const CommentsWrapper = () => {
  const [isRefetch] = useRefetchStore((state) => [state.isRefetch]);
  const [postId] = usePostsListStore((state) => [state.postId]);
  const { locale } = useRouter();

  const { data, isLoading, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['comments', postId, locale, isRefetch],
    queryFn: ({ pageParam = 0 }) => fetchAllCommentsList(postId.length > 0 ? postId : 'default', pageParam),
    getNextPageParam: ({ skipPage }) => skipPage,
  });

  const { hasNextPageButton } = useInternationalizedRouting('global');

  if (!data) return null;

  const isDashed = data.pages[0].comments.length > 0 || isLoading;
  const loaders = new Array(data.pages[data.pages.length - 1].pageSize).fill(null).map((_, i) => i);

  return (
    <>
      {isDashed && <Dashed />}
      {data && data.pages.map(({ comments }) => comments.map(({ user, ...rest }, key) => <Comment key={key} props={{ ...user, ...rest }} />))}
      {(isLoading || isFetching) && loaders.map((_, i) => <LoadComment key={i} />)}
      {hasNextPage && <Button onClick={() => fetchNextPage()}>{hasNextPageButton}</Button>}
    </>
  );
};
