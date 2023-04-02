import clsx from 'clsx';
import type { FC, ReactHTMLElementProps } from 'react';

import { EnumNotificationStatus } from '@stories/notifications';

import { useNotificationState } from '@hooks/useNotificationState';

import styles from './Message.module.scss';

export type NotificationColorsStatus = {
  [K in keyof typeof styles]: K;
}[keyof typeof styles];

export const isValidatedNotificationColorStatus = (type: EnumNotificationStatus | NotificationColorsStatus, styles: object) => {
  // @ts-ignore
  return type?.toUpperCase() === EnumNotificationStatus[type?.toUpperCase()] && styles[type?.toLowerCase()];
};

export const Message: FC<ReactHTMLElementProps<HTMLSpanElement>> = ({ children, className = '', ...props }) => {
  const { colorStatus } = useNotificationState();

  return (
    <span className={clsx(styles.default, isValidatedNotificationColorStatus(colorStatus, styles), className)} {...props}>
      {children}
    </span>
  );
};
