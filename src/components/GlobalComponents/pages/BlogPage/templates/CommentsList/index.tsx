import useTranslation from 'next-translate/useTranslation';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { Comment } from '@components/Comment';
import { WriteToSomething } from '@components/WriteToSomething';

import { Dashed } from '@icons/index';

export const CommentsList = () => {
  const { t } = useTranslation('global');
  const commentTitle = t('comment.title'),
    commentDescription = t('comment.description');

  return (
    <DirectionColumn isTop>
      <div>
        <h2>{commentTitle}</h2>
        <Paragraph style={{ marginTop: 6 }}>{commentDescription}</Paragraph>
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
