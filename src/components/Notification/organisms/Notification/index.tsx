import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';

import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { FeaturedWarning } from '@components/Notification/atoms/FeaturedWarning';
import { Message } from '@components/Notification/atoms/Message';
import { NotificationStatusIcon } from '@components/Notification/molecules/NotificationStatusIcon';

import { vars } from '@animations/pop-up';

import type { Notification as NotificationType } from '@stories/notifications';

import styles from './Notification.module.scss';

export const Notification: FC<{ title: string; msg: string; status: NotificationType['status'] }> = ({ title, status, msg }) => {
  const className = clsx(styles.default, styles[status]);

  return (
    <motion.div layout className={className} variants={vars} initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <NotificationStatusIcon status={status} />
      <DirectionColumn style={{ gap: 6 }}>
        <FeaturedWarning>{title}</FeaturedWarning>
        <Message status={status}>{msg}</Message>
      </DirectionColumn>
    </motion.div>
  );
};
