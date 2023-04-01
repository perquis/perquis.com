import { useRouter } from 'next/router';
import type { FC } from 'react';

import { SmallAvatar } from '@GlobalComponents/atoms/SmallAvatar';

import type { CommentProps } from '@components/Comment/templates/Comment';

import { Locale } from '@graphql/databases/client';

import { toLocaleDateString } from '@utils/toLocaleDateString';

import styles from './UsernameAndDate.module.scss';

export const UsernameAndDate: FC<Record<'user', Omit<CommentProps, 'email' | 'content'>>> = ({ user: { image, name, createdAt } }) => {
  const { locale } = useRouter();
  const isSetLocale = locale === 'en' ? Locale.En : Locale.Pl;

  return (
    <div className={styles.wrapper}>
      <SmallAvatar image={image ?? ''} isBig />
      <div className={styles['direction-column']}>
        <h5>{name}</h5>
        <span>{toLocaleDateString(createdAt, isSetLocale)}</span>
      </div>
    </div>
  );
};
