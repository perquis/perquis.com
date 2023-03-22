/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import styles from './Image.module.scss';

export const Image = (props: { src: string; alt: string }) => {
  return <img className={styles.image} loading="lazy" decoding="async" {...props} />;
};
