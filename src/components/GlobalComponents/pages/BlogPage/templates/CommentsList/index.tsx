import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { Comment } from '@components/Comment';
import { WriteToSomething } from '@components/WriteToSomething';

import { fetchAllCommentsList } from '@libraries/fetchers/fetchAllCommentsList';

import { Dashed } from '@icons/index';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

export const CommentsList = () => {
  const { query } = useRouter();
  const { status } = useSession();
  const { commentFormTitle, commentFormAuthenticatedDescription, commentFormUnauthenticatedDescription } = useInternationalizedRouting('global');
  const { data: comments } = useQuery({ queryKey: ['comments', query.slug], queryFn: () => fetchAllCommentsList(String(query.slug)) });
  const areComments = Array.isArray(comments) && comments.length > 0;

  return (
    <DirectionColumn isTop>
      <div>
        <h2>{commentFormTitle}</h2>
        <Paragraph style={{ marginTop: 6 }}>{status !== 'authenticated' ? commentFormAuthenticatedDescription : commentFormUnauthenticatedDescription}</Paragraph>
      </div>
      <WriteToSomething />
      {areComments ? <Dashed /> : null}
      {areComments &&
        comments?.map(({ avatar, content, nickname, createdAt }, key) => <Comment key={key} avatar={avatar} content={content} nickname={nickname} date={createdAt} />)}
    </DirectionColumn>
  );
};
