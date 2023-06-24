import { AnimatePresence } from 'framer-motion';

import { Notification } from '@components/locals/Notification';
import { useGlobalStore } from '@stories';

import styles from './NotificationsList.module.scss';

export const NotificationsList = () => {
  const [notifications] = useGlobalStore(({ notifications }) => [notifications]);

  return (
    <div className={styles['notifications-list']}>
      <AnimatePresence mode="popLayout">
        {notifications.map(({ id, title, status, msg }) => (
          <Notification key={id} title={title} status={status} msg={msg} />
        ))}
      </AnimatePresence>
    </div>
  );
};
