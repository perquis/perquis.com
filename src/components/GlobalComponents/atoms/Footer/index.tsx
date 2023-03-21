import useTranslation from 'next-translate/useTranslation';

import styles from './Footer.module.scss';

export const Footer = () => {
  const { t } = useTranslation('global');
  const __html = t('footer');

  return <footer className={styles.footer} dangerouslySetInnerHTML={{ __html }} />;
};
