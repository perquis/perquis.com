import useTranslation from 'next-translate/useTranslation';
import ContentLoader from 'react-content-loader';

import { Paragraph, Tag } from '@components/globals/atoms';
import { useThemeService } from '@providers';

import styles from './NotFoundContent.module.scss';

export const NotFoundContent = () => {
  const { colors } = useThemeService();

  const { t } = useTranslation('home');

  return (
    <>
      <ContentLoader speed={2} width="100%" height="100%" viewBox="0 0 400 240" {...colors}>
        <rect x="0" y="0" rx="4" ry="4" width="100%" height="240" />
      </ContentLoader>
      <div className={styles.details}>
        <h2>{t('not-found.title')}</h2>
        <Paragraph>{t('not-found.description')}</Paragraph>
        <Tag>404</Tag>
      </div>
    </>
  );
};
