import Image from 'next/image';

import styles from './Avatar.module.scss';

export const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <Image src="/images/avatar.jpg" alt="Damian Werens" fill />
    </div>
  );
};
