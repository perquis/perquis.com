import clsx from 'clsx';
import type { FC, ReactHTMLElementProps } from 'react';

import type { Notification } from '@stories/global/slices/notificationsSlice/notificationsSlice';

import styles from './Message.module.scss';

export type NotificationColorsStatus = {
  [K in keyof typeof styles]: K;
}[keyof typeof styles];

export const Message: FC<ReactHTMLElementProps<HTMLSpanElement> & { status: Notification['status'] }> = ({ children, status, className = '', ...props }) => {
  return (
    <span className={clsx(styles.default, styles[status], className)} {...props}>
      {children}
    </span>
  );
};
