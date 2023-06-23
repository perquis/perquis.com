import Image from 'next/image';
import type { FC } from 'react';

import styles from './Thumbnail.module.scss';

type Keywords = 'src' | 'alt';

export type IThumbnail = {
  [K in Keywords]: string;
};

export const Thumbnail: FC<IThumbnail> = ({ src, alt }) => {
  return (
    <div className={styles['image-hero']}>
      <Image src={src} alt={alt} fill />
    </div>
  );
};
