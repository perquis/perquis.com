import Image from 'next/image';
import type { FC } from 'react';

import styles from './styles.module.scss';

interface IAvatar {
  image: string;
}

export const Avatar: FC<IAvatar> = ({ image }) => {
  return (
    <div className={styles.avatar}>
      <Image layout="fill" src={image} alt="avatar" />
    </div>
  );
};
