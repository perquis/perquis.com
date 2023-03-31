import clsx from 'clsx';
import type { FC } from 'react';
import { BiCheck } from 'react-icons/bi';
import { IoCloseSharp, IoInformation } from 'react-icons/io5';
import { WiStormWarning } from 'react-icons/wi';

import type { IMessage } from '@components/Notification/atoms/Message';
import { isValidatedNotificationColorStatus } from '@components/Notification/atoms/Message';

import { useNotificationState } from '@hooks/useNotificationState';

import styles from './NotificationStatusIcon.module.scss';

export const NotificationStatusIcon: FC<IMessage> = () => {
  const { isValidatedStatus, colorStatus } = useNotificationState();

  return (
    <div className={clsx(styles.default, isValidatedNotificationColorStatus(colorStatus, styles))}>
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
