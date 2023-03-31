import type { Comment as CommentProps, User } from '@prisma/client';

import { Button } from '@GlobalComponents/atoms/Button';
import { Paragraph } from '@GlobalComponents/atoms/Paragraph';

import { UserAction } from '@components/Comment/organisms/UserAction';

import styles from './Comment.module.scss';

export const Comment = ({ props: { content, createdAt, image, name } }: Record<'props', CommentProps & User>) => {
  return (
    <div className={styles.comment}>
      <UserAction avatar={image ?? ''} nickname={name ?? ''} date={createdAt} />
      <Paragraph>{content}</Paragraph>
      <Button isTertiary>Reply</Button>
    </div>
  );
};
