import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './AboutMe.module.scss';

export const AboutMe = () => {
  const { aboutMeTitle, aboutMeDescription } = useInternationalizedRouting('home');

  return (
    <div className={styles.wrapper}>
      <b>{aboutMeTitle}</b>
      <p>{aboutMeDescription}</p>
    </div>
  );
};
