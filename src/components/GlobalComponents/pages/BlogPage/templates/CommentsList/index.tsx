import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { Comment } from '@components/Comment';
import { WriteToSomething } from '@components/WriteToSomething';

import { Dashed } from '@icons/index';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';
import { useUser } from '@hooks/useUser';

export const CommentsList = () => {
  const { isUser } = useUser();
  const { commentFormTitle, commentFormDescription } = useInternationalizedRouting('global');

  return (
    <DirectionColumn isTop>
      <div>
        <h2>{commentFormTitle}</h2>
        {isUser ? <Paragraph style={{ marginTop: 6 }}>{commentFormDescription}</Paragraph> : null}
      </div>
      <WriteToSomething />
      <Dashed />
      <Comment
        avatar="/images/avatar.jpg"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quibusdam sed dolore nostrum officiis repudiandae rem vel nemo vero quidem praesentium iure dolores itaque ipsum ea, nobis molestias laboriosam corrupti?"
        nickname="PerQuis!"
      />
    </DirectionColumn>
  );
};
