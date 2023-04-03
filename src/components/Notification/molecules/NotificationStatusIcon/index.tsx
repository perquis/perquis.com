import clsx from 'clsx';
import type { FC } from 'react';
import { BiCheck } from 'react-icons/bi';
import { IoCloseSharp, IoInformation } from 'react-icons/io5';
import { WiStormWarning } from 'react-icons/wi';

import type { Notification } from '@stories/notifications';

import styles from './NotificationStatusIcon.module.scss';

export const NotificationStatusIcon: FC<{ status: Notification['status'] }> = ({ status }) => {
  const isValidatedStatus = (compareStatus: Notification['status']) => status === compareStatus;

  return (
    <div className={clsx(styles.default, styles[status])}>
      {isValidatedStatus('info') ? (
        <IoInformation size={42} />
      ) : isValidatedStatus('success') ? (
        <BiCheck size={42} />
      ) : isValidatedStatus('error') ? (
        <IoCloseSharp size={42} />
      ) : isValidatedStatus('warn') ? (
        <WiStormWarning size={42} />
      ) : null}
    </div>
  );
};
