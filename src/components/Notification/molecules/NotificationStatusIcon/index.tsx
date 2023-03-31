import clsx from 'clsx';
import type { FC } from 'react';
import { BiCheck } from 'react-icons/bi';
import { IoCloseSharp, IoInformation } from 'react-icons/io5';
import { WiStormWarning } from 'react-icons/wi';

import type { IMessage } from '@components/Notification/atoms/Message';
import { isValidatedNotificationColorStatus } from '@components/Notification/atoms/Message';

import styles from './NotificationStatusIcon.module.scss';

export const NotificationStatusIcon: FC<IMessage> = ({ type = 'info' }) => {
  return (
    <div className={clsx(styles.default, isValidatedNotificationColorStatus(type, styles))}>
      {type === 'info' ? (
        <IoInformation size={42} />
      ) : type === 'success' ? (
        <BiCheck size={42} />
      ) : type === 'error' ? (
        <IoCloseSharp size={42} />
      ) : type === 'warn' ? (
        <WiStormWarning size={42} />
      ) : null}
    </div>
  );
};
