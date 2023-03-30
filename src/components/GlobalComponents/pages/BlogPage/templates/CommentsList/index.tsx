import { useSession } from 'next-auth/react';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

// import { Comment } from '@components/Comment';
import { WriteToSomething } from '@components/WriteToSomething';

// import { Dashed } from '@icons/index';
import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

export const CommentsList = () => {
  const { status } = useSession();
  const { commentFormTitle, commentFormAuthenticatedDescription, commentFormUnauthenticatedDescription } = useInternationalizedRouting('global');

  return (
    <DirectionColumn isTop>
      <div>
        <h2>{commentFormTitle}</h2>
        <Paragraph style={{ marginTop: 6 }}>{status !== 'authenticated' ? commentFormAuthenticatedDescription : commentFormUnauthenticatedDescription}</Paragraph>
      </div>
      <WriteToSomething />
      {/* {areComments ? <Dashed /> : null} */}
      {/* comments?.map(({ avatar, content, nickname, createdAt }, key) => <Comment key={key} avatar={avatar} content={content} nickname={nickname} date={createdAt} />) */}
    </DirectionColumn>
  );
};
