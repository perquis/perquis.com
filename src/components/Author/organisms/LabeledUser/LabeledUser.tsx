import { Avatar } from '@components/Author/atoms';
import { NameAndStatus, Socials } from '@components/Author/molecules';

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
