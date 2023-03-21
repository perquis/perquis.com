import { Button } from '@GlobalComponents/atoms/Button';

import styles from './Actions.module.scss';

export const Actions = () => {
  return (
    <div className={styles.actions}>
      <Button isTertiary>Reset</Button>
      <Button>Publish</Button>
    </div>
  );
};
