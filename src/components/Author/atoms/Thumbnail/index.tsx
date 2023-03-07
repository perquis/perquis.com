import Image from 'next/image';

import styles from './Thumbnail.module.scss';

export const Thumbnail = () => {
  return (
    <div className={styles['image-hero']}>
      <Image src="/images/thumbnail.gif" alt="thumbnail" fill />
    </div>
  );
};
