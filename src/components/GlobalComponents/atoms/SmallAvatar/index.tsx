import Image from 'next/image';
import type { FC } from 'react';

import styles from './SmallAvatar.module.scss';

interface ISmallAvatar {
  image: string;
  isBig?: boolean;
}

export const SmallAvatar: FC<ISmallAvatar> = ({ image, isBig }) => {
  return (
    <div className={`${styles.avatar} ${isBig ? styles.big : styles.default}`}>
      <Image layout="fill" src={image} alt="avatar" />
    </div>
  );
};
