import { useRouter } from 'next/router';

import { Button } from '@GlobalComponents/atoms/Button';

import { Locale } from '@graphql/databases/client';

import { toLocaleDateString } from '@utils/toLocaleDateString';

import styles from './ReplyAndDate.module.scss';

export const ReplyAndDate = () => {
  const { locale } = useRouter();
  const isSetLocale = locale === 'en' ? Locale.En : Locale.Pl;

  return (
    <div className={styles.ctn}>
      <span className={styles.date}>{toLocaleDateString(new Date(), isSetLocale)}</span>
      <Button isTertiary>Reply</Button>
    </div>
  );
};
