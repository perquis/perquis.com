import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { Comment } from '@components/Comment';
import { LoadComment } from '@components/Comment/templates/LoadComment';
import { WriteToSomething } from '@components/WriteToSomething';

import { fetchAllCommentsList } from '@libraries/fetchers/fetchAllCommentsList';

import { useRefetchStore } from '@stories/refetch';

import { Dashed } from '@icons/index';

import { useForm } from '@hooks/useForm';
import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import { pageSize } from '@data/presets';

const loaders = new Array(pageSize).fill(null).map((_, i) => i);

export const CommentsList = () => {
  const { query } = useRouter();
  const { status } = useSession();
  const [isRefetch] = useRefetchStore((state) => [state.isRefetch]);
  const { commentFormTitle, commentFormAuthenticatedDescription, commentFormUnauthenticatedDescription } = useInternationalizedRouting('global');
  const { data: comments, isLoading } = useQuery({ queryKey: ['comments', query.slug, isRefetch], queryFn: () => fetchAllCommentsList(String(query.slug)) });
  const areComments = Array.isArray(comments) && comments.length > 0;
  const form = useForm('create-comment');

  return (
    <DirectionColumn isTop>
      <div>
        <h2>{commentFormTitle}</h2>
        <Paragraph style={{ marginTop: 6 }}>{status !== 'authenticated' ? commentFormAuthenticatedDescription : commentFormUnauthenticatedDescription}</Paragraph>
      </div>
      <WriteToSomething form={form} />
      {(isLoading || areComments) && <Dashed />}
      {areComments && comments?.map(({ user, ...rest }, key) => <Comment key={key} props={{ ...user, ...rest }} />)}
      {isLoading && loaders.map((_, i) => <LoadComment key={i} />)}
    </DirectionColumn>
  );
};
