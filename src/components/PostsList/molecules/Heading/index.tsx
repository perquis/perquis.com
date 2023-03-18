import useTranslation from 'next-translate/useTranslation';

import { SmallTitle } from '@GlobalComponents/atoms/SmallTitle';

import styles from './Heading.module.scss';

export const Heading = () => {
  const { t } = useTranslation('home');
  const title = t('posts-list.title'),
    description = t('posts-list.description');

  return (
    <div className={styles.heading}>
      <SmallTitle>{title}</SmallTitle>
      <p>{description}</p>
    </div>
  );
};
