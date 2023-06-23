import { useSession } from 'next-auth/react';

import { Paragraph } from '@components/globals/atoms';
import { DirectionColumn } from '@components/globals/wrappers/DirectionColumn/DirectionColumn';
import { WriteToSomething } from '@components/WriteToSomething';
import { useForm, useInternationalizedRouting } from '@hooks';

import { CommentsWrapper } from '../../organisms';

export const CommentsList = () => {
  const { commentFormTitle, commentFormAuthenticatedDescription, commentFormUnauthenticatedDescription } = useInternationalizedRouting('global');
  const form = useForm('create-comment');
  const { status } = useSession();

  return (
    <DirectionColumn isTop>
      <div>
        <h2>{commentFormTitle}</h2>
        <Paragraph style={{ marginTop: 6 }}>{status !== 'authenticated' ? commentFormAuthenticatedDescription : commentFormUnauthenticatedDescription}</Paragraph>
      </div>
      <WriteToSomething form={form} />
      <CommentsWrapper />
    </DirectionColumn>
  );
};
