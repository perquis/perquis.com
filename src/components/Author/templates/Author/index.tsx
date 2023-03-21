import type { FC } from 'react';

import { Thumbnail } from '@GlobalComponents/atoms/Thumbnail';
import type { IThumbnail } from '@GlobalComponents/atoms/Thumbnail';

import { LabeledUser } from '@components/Author/organisms/LabeledUser';

import styles from './Author.module.scss';

export const Author: FC<IThumbnail> = ({ src, alt }) => {
  return (
    <div className={styles.wrapper}>
      <Thumbnail src={src} alt={alt} />
      <LabeledUser />
    </div>
  );
};
