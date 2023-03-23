/* eslint-disable @next/next/no-img-element */
import styles from './SalyImage.module.scss';

export const SalyImage = () => (
  <div className={styles.saly}>
    <img src="/assets/saly.png" alt="saly" loading="lazy" decoding="async" />
  </div>
);
