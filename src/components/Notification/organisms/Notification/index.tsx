import clsx from 'clsx';
import { motion } from 'framer-motion';

import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { FeaturedWarning } from '@components/Notification/atoms/FeaturedWarning';
import { isValidatedNotificationColorStatus, Message } from '@components/Notification/atoms/Message';
import { NotificationStatusIcon } from '@components/Notification/molecules/NotificationStatusIcon';

import { vars } from '@animations/pop-up';

import { useNotificationStore } from '@stories/notifications';

import styles from './Notification.module.scss';

export const Notification = () => {
  const [notification] = useNotificationStore((state) => [state.notification, state.updateNotification]);
  // @ts-ignore
  const className = clsx(styles.default, isValidatedNotificationColorStatus(notification?.status?.toLowerCase(), styles));

  return (
    <motion.div className={className} variants={vars} initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <NotificationStatusIcon />
      <DirectionColumn style={{ gap: 6 }}>
        <FeaturedWarning>{notification?.title}</FeaturedWarning>
        <Message>{notification?.msg}</Message>
      </DirectionColumn>
    </motion.div>
  );
};
