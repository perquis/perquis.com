import clsx from 'clsx';
import Image from 'next/image';
import type { FC } from 'react';

import styles from './SmallAvatar.module.scss';

interface ISmallAvatar {
  image: string;
  isBig?: boolean;
}

export const SmallAvatar: FC<ISmallAvatar> = ({ image, isBig }) => {
  return (
    <div className={clsx(styles.avatar, isBig ? styles.big : styles.default)}>
      <Image src={image} alt="avatar" width={isBig ? 52 : 31} height={isBig ? 52 : 31} />
    </div>
  );
};
