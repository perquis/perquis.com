import styles from './TextArea.module.scss';

export const TextArea = () => {
  return <textarea className={styles.textarea} placeholder="Write to something..." minLength={5} maxLength={512} />;
};
