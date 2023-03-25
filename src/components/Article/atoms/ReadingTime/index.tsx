import useTranslation from 'next-translate/useTranslation';
import type { FC } from 'react';
import readingTime from 'reading-time';

import styles from './ReadingTime.module.scss';

export const ReadingTime: FC<{ content?: string }> = ({ content }) => {
  const { t } = useTranslation('global');
  const translation = t('reading-time');
  const { minutes } = readingTime(content ?? '');

  return <span className={styles['reading-time']}>{`${Math.round(minutes)} min ${translation}.`}</span>;
};
