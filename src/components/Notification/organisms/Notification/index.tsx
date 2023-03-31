import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { FeaturedWarning } from '@components/Notification/atoms/FeaturedWarning';
import { isValidatedNotificationColorStatus, Message } from '@components/Notification/atoms/Message';
import { NotificationStatusIcon } from '@components/Notification/molecules/NotificationStatusIcon';

import { vars } from '@animations/pop-up';

import { useNotificationStore } from '@stories/notifications';

import styles from './Notification.module.scss';

export const Notification = () => {
  const [notification, updateNotification] = useNotificationStore((state) => [state.notification, state.updateNotification]);

  useEffect(() => {
    setTimeout(() => updateNotification(undefined), 5000);
  }, [updateNotification]);

  return (
    <motion.div
      // @ts-ignore
      className={clsx(styles.default, isValidatedNotificationColorStatus(String(notification?.status?.toLowerCase()), styles))}
      variants={vars}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <NotificationStatusIcon type={notification?.status.toLowerCase() as unknown as undefined} />
      <DirectionColumn style={{ gap: 6 }}>
        <FeaturedWarning>{notification?.status.toString()}</FeaturedWarning>
        <Message type={notification?.status.toLowerCase() as unknown as undefined}>{notification?.msg}</Message>
      </DirectionColumn>
    </motion.div>
  );
};
