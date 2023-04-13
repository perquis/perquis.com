import { useSession } from 'next-auth/react';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { WriteToSomething } from '@components/WriteToSomething';

import { useForm } from '@hooks/useForm';
import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import { CommentsWrapper } from './organisms/CommentsWrapper';

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
