import type { FC } from 'react';

import { LabeledUser } from '@components/Author/organisms';
import { type IThumbnail, Thumbnail } from '@components/globals/atoms';

import styles from './Author.module.scss';

export const Author: FC<IThumbnail> = ({ src, alt }) => {
  return (
    <div className={styles.wrapper}>
      <Thumbnail src={src} alt={alt} />
      <LabeledUser />
    </div>
  );
};
