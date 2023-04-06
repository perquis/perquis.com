import clsx from 'clsx';
import type { FC } from 'react';

// import { Button } from '@GlobalComponents/atoms/Button';
import { Paragraph } from '@GlobalComponents/atoms/Paragraph';

import { UserAction } from '@components/Comment/organisms/UserAction';

import type { Comment as CommentType, User } from 'prisma/generated/prisma-client-js';

import styles from './Comment.module.scss';

export type CommentProps = CommentType & User;

export const Comment: FC<Record<'props', CommentProps> & { isModal?: boolean }> = ({ props: { content, ...rest }, isModal }) => {
  return (
    <div className={clsx(styles.comment, !isModal && styles['comment-is-not-in-modal'])}>
      <UserAction user={{ content, ...rest }} isModal={isModal} />
      <Paragraph>{content}</Paragraph>
      {/* {!isModal && <Button isTertiary>Reply</Button>} */}
    </div>
  );
};
