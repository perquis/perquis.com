import clsx from 'clsx';
import type { FC, ReactHTMLElementProps } from 'react';

import { EnumNotificationStatus } from '@stories/notifications';

import styles from './Message.module.scss';

export type NotificationColorsStatus = {
  [K in keyof typeof styles]: K;
}[keyof typeof styles];

export interface IMessage {
  type?: NotificationColorsStatus;
}

export const isValidatedNotificationColorStatus = (type: NotificationColorsStatus, styles: object) => {
  // @ts-ignore
  return type.toLocaleUpperCase() === EnumNotificationStatus[type.toUpperCase()] && styles[type];
};

export const Message: FC<IMessage & ReactHTMLElementProps<HTMLSpanElement>> = ({ children, type = 'info', className = '', ...props }) => {
  return (
    <span className={clsx(styles.default, isValidatedNotificationColorStatus(type, styles), className)} {...props}>
      {children}
    </span>
  );
};
