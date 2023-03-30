import { Button } from '@GlobalComponents/atoms/Button';
import { Paragraph } from '@GlobalComponents/atoms/Paragraph';

import { UserAction } from '@components/Comment/organisms/UserAction';

import type { Comments } from '@graphql/databases/client';

import styles from './Comment.module.scss';

export const Comment = ({ avatar, nickname, content, date }: Pick<Comments, 'avatar' | 'nickname' | 'content'> & { date: Date }) => {
  return (
    <div className={styles.comment}>
      <UserAction avatar={avatar} nickname={nickname} date={date} />
      <Paragraph>{content}</Paragraph>
      <Button isTertiary>Reply</Button>
    </div>
  );
};
