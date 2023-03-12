import type { FC } from 'react';

import { LabeledUser } from '@components/Author/organisms/LabeledUser';
import type { IThumbnail } from '@components/global/atoms/Thumbnail';
import { Thumbnail } from '@components/global/atoms/Thumbnail';

import styles from './HeroHeader.module.scss';

export const HeroHeader: FC<IThumbnail> = ({ src, alt }) => {
  return (
    <div className={styles.wrapper}>
      <Thumbnail src={src} alt={alt} />
      <LabeledUser />
    </div>
  );
};
