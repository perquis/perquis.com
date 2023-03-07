import styles from './NameAndStatus.module.scss';

export const NameAndStatus = () => {
  return (
    <div className={styles.wrapper}>
      <b>
        Damian <span>“PerQuis!”</span> Werens
      </b>
      <span>Front-end Developer</span>
    </div>
  );
};
