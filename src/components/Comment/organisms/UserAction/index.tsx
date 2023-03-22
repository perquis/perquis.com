import { Options } from '@components/Comment/atoms/Options';
import { UsernameAndDate } from '@components/Comment/molecules/UsernameAndDate';

import type { Comments } from '@graphql/databases/client';

import styles from './UserAction.module.scss';

export const UserAction = ({ avatar, nickname }: Pick<Comments, 'avatar' | 'nickname'>) => {
  return (
    <div className={styles.wrapper}>
      <UsernameAndDate avatar={avatar} nickname={nickname} />
      <Options />
    </div>
  );
};
