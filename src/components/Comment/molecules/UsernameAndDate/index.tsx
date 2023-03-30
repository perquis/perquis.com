import { useRouter } from 'next/router';

import { SmallAvatar } from '@GlobalComponents/atoms/SmallAvatar';

import { Locale } from '@graphql/databases/client';
import type { Comments } from '@graphql/databases/client';

import { toLocaleDateString } from '@utils/toLocaleDateString';

import styles from './UsernameAndDate.module.scss';

export const UsernameAndDate = ({ avatar, nickname, date }: Pick<Comments, 'avatar' | 'nickname'> & { date: Date }) => {
  const { locale } = useRouter();
  const isSetLocale = locale === 'en' ? Locale.En : Locale.Pl;

  return (
    <div className={styles.wrapper}>
      <SmallAvatar image={avatar} isBig />
      <div className={styles['direction-column']}>
        <h5>{nickname}</h5>
        <span>{toLocaleDateString(date, isSetLocale)}</span>
      </div>
    </div>
  );
};
