import clsx from 'clsx';
import type { FC } from 'react';

import { UserAction } from '@components/Comment';
import { Paragraph } from '@components/globals/atoms';

import styles from './Comment.module.scss';

export type CommentProps = PrismaComment & PrismaUser;

export const Comment: FC<Record<'props', CommentProps> & { isModal?: boolean }> = ({ props: { content, ...rest }, isModal }) => {
  return (
    <div className={clsx(styles.comment, !isModal && styles['comment-is-not-in-modal'])}>
      <UserAction user={{ content, ...rest }} isModal={isModal} />
      <Paragraph>{content}</Paragraph>
      {/* {!isModal && <Button isTertiary>Reply</Button>} */}
    </div>
  );
};
