/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import type { FC } from 'react';

import styles from './Image.module.scss';

interface IImageProps {
  src: string;
  alt: string;
}

export const Image: FC<IImageProps> = ({ ...props }) => {
  return <img className={styles.image} loading="lazy" decoding="async" {...props} />;
};
