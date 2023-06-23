import { AnimatePresence } from 'framer-motion';

import { Notification } from '@components/Notification';
import { useNotificationStore } from '@stories';

import styles from './NotificationsList.module.scss';

export const NotificationsList = () => {
  const [notifications] = useNotificationStore((state) => [state.notifications]);

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
