import useTranslation from 'next-translate/useTranslation';
import type { FC } from 'react';
import readingTime from 'reading-time';

import type { Articles } from '@graphql/databases/client';

import styles from './ReadingTime.module.scss';

export const ReadingTime: FC<{ content?: Articles['content'] }> = ({ content }) => {
  const { t } = useTranslation('global');
  const translation = t('reading-time');
  const { minutes } = readingTime(content ?? '');

  return <span className={styles['reading-time']}>{`${Math.round(minutes)} min ${translation}.`}</span>;
};
