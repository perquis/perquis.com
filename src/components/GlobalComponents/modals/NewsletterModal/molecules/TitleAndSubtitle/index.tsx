import useTranslation from 'next-translate/useTranslation';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';

import styles from './TitleAndSubtitle.module.scss';

export const TitleAndSubtitle = () => {
  const { t } = useTranslation('global');
  const __html = t('newsletter.title'),
    description = t('newsletter.description');

  return (
    <div className={styles.ctn}>
      <h1 dangerouslySetInnerHTML={{ __html }} />
      <Paragraph>{description}</Paragraph>
    </div>
  );
};
