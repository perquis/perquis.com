import { Options } from '@components/Comment/atoms/Options';
import { UsernameAndDate } from '@components/Comment/molecules/UsernameAndDate';

import type { Comments } from '@graphql/databases/client';

import styles from './UserAction.module.scss';

export const UserAction = ({ avatar, nickname, date }: Pick<Comments, 'avatar' | 'nickname'> & { date: Date }) => {
  return (
    <div className={styles.wrapper}>
      <UsernameAndDate avatar={avatar} nickname={nickname} date={date} />
      <Options />
    </div>
  );
};
