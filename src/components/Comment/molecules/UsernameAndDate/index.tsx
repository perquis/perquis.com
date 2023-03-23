import { SmallAvatar } from '@GlobalComponents/atoms/SmallAvatar';

import type { Comments } from '@graphql/databases/client';

import styles from './UsernameAndDate.module.scss';

export const UsernameAndDate = ({ avatar, nickname }: Pick<Comments, 'avatar' | 'nickname'>) => (
  <div className={styles.wrapper}>
    <SmallAvatar image={avatar} isBig />
    <b>{nickname}</b>
  </div>
);
