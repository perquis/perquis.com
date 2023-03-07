import styles from './AboutMe.module.scss';

export const AboutMe = () => {
  return (
    <div className={styles.wrapper}>
      <b>About Me</b>
      <p>
        My name is <b>Damian</b> and I&apos;m 23. I love learning new things. I&apos;m curious <b>about all frameworks and libraries</b> created by languages of programming. I hope
        my articles will be <b>helpful for you</b>.
      </p>
    </div>
  );
};
