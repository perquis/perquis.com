import type { Comment as CommentType, User } from '@prisma/client';
import type { FC } from 'react';

import { Button } from '@GlobalComponents/atoms/Button';
import { Paragraph } from '@GlobalComponents/atoms/Paragraph';

import { UserAction } from '@components/Comment/organisms/UserAction';

import styles from './Comment.module.scss';

export type CommentProps = CommentType & User;

export const Comment: FC<Record<'props', CommentProps>> = ({ props: { content, ...rest } }) => {
  return (
    <div className={styles.comment}>
      <UserAction user={rest} />
      <Paragraph>{content}</Paragraph>
      <Button isTertiary>Reply</Button>
    </div>
  );
};
