import useTranslation from 'next-translate/useTranslation';

import styles from './AboutMe.module.scss';

export const AboutMe = () => {
  const { t } = useTranslation('home');
  const title = t('about-me.title'),
    description = t('about-me.description');

  return (
    <div className={styles.wrapper}>
      <b>{title}</b>
      <p>{description}</p>
    </div>
  );
};
