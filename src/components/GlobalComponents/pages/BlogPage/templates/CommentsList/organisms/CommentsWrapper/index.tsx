import { useInfiniteQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { Button } from '@GlobalComponents/atoms/Button';

import { Comment } from '@components/Comment';
import { LoadComment } from '@components/Comment/templates/LoadComment';

import { fetchAllCommentsList } from '@libraries/fetchers/fetchAllCommentsList';

import { usePostsListStore } from '@stories/posts';
import { useRefetchStore } from '@stories/refetch';

import { Dashed } from '@icons/Dashed';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

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
