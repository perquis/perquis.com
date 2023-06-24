import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';

import { vars } from '@animations';
import { DirectionColumn } from '@components/globals/wrappers';
import { FeaturedWarning } from '@components/locals/Notification/atoms/FeaturedWarning/FeaturedWarning';
import { Message } from '@components/locals/Notification/atoms/Message/Message';
import { NotificationStatusIcon } from '@components/locals/Notification/molecules/NotificationStatusIcon/NotificationStatusIcon';
import type { Notification as NotificationType } from '@stories';

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
