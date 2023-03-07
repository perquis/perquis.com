import { Avatar } from '@components/Author/atoms/Avatar';
import { NameAndStatus } from '@components/Author/molecules/NameAndStatus';
import { Socials } from '@components/Author/molecules/Socials';

import styles from './LabeledUser.module.scss';

export const LabeledUser = () => {
  return (
    <div className={styles.wrapper}>
      <Avatar />
      <div className={styles['el-wrap']}>
        <NameAndStatus />
        <Socials />
      </div>
    </div>
  );
};
