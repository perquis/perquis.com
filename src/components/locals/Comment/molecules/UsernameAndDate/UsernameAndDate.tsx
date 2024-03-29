import { useRouter } from 'next/router';
import type { FC } from 'react';

import { SmallAvatar } from '@components/globals/atoms';
import type { CommentProps } from '@components/locals/Comment';
import { Locale } from '@graphql/databases/client';
import { toLocaleDateString } from '@utils';

import styles from './UsernameAndDate.module.scss';

export const UsernameAndDate: FC<Record<'user', Omit<CommentProps, 'email' | 'content'>>> = ({ user: { image, name, createdAt, updatedAt } }) => {
  const { locale } = useRouter();
  const isSetLocale = locale === 'en' ? Locale.En : Locale.Pl;
  const date = createdAt === updatedAt ? createdAt : updatedAt;

  return (
    <div className={styles.wrapper}>
      <SmallAvatar image={image ?? ''} isBig />
      <div className={styles['direction-column']}>
        <h5>{name}</h5>
        <span>{toLocaleDateString(date, isSetLocale)}</span>
      </div>
    </div>
  );
};
