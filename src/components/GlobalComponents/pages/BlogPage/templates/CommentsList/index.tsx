import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { Comment } from '@components/Comment';
import { LoadComment } from '@components/Comment/templates/LoadComment';
import { WriteToSomething } from '@components/WriteToSomething';

import { fetchAllCommentsList } from '@libraries/fetchers/fetchAllCommentsList';

import { Dashed } from '@icons/index';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

export const CommentsList = () => {
  const { query } = useRouter();
  const { status } = useSession();
  const { commentFormTitle, commentFormAuthenticatedDescription, commentFormUnauthenticatedDescription } = useInternationalizedRouting('global');
  const { data: comments, isLoading } = useQuery({ queryKey: ['comments', query.slug], queryFn: () => fetchAllCommentsList(String(query.slug)) });
  const areComments = Array.isArray(comments) && comments.length > 0;

  const loaders = new Array(3).fill(null).map((_, i) => i);

  return (
    <DirectionColumn isTop>
      <div>
        <h2>{commentFormTitle}</h2>
        <Paragraph style={{ marginTop: 6 }}>{status !== 'authenticated' ? commentFormAuthenticatedDescription : commentFormUnauthenticatedDescription}</Paragraph>
      </div>
      <WriteToSomething />
      {isLoading || areComments ? <Dashed /> : null}
      {areComments && comments?.map(({ user, ...rest }, key) => <Comment key={key} props={{ ...user, ...rest }} />)}
      {isLoading ? loaders.map((_, i) => <LoadComment key={i} />) : null}
    </DirectionColumn>
  );
};
