import Image from 'next/image';
import type { FC } from 'react';

import styles from './SmallAvatar.module.scss';

interface ISmallAvatar {
  image: string;
}

export const SmallAvatar: FC<ISmallAvatar> = ({ image }) => {
  return (
    <div className={styles.avatar}>
      <Image layout="fill" src={image} alt="avatar" />
    </div>
  );
};
