import { Paragraph } from '@GlobalComponents/atoms/Paragraph';

import { ReplyAndDate } from '@components/Comment/molecules/ReplyAndDate';
import { UserAction } from '@components/Comment/organisms/UserAction';

import type { Comments } from '@graphql/databases/client';

import styles from './Comment.module.scss';

export const Comment = ({ avatar, nickname, content }: Pick<Comments, 'avatar' | 'nickname' | 'content'>) => {
  return (
    <div className={styles.comment}>
      <UserAction avatar={avatar} nickname={nickname} />
      <Paragraph>{content}</Paragraph>
      <ReplyAndDate />
    </div>
  );
};
