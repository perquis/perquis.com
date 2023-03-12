import useTranslation from 'next-translate/useTranslation';

import styles from './Footer.module.scss';

export const Footer = () => {
  const { t } = useTranslation('footer');
  const __html = t('text');

  return <footer className={styles.footer} dangerouslySetInnerHTML={{ __html }} />;
};
