import type { NotificationColorsStatus } from '@components/Notification/atoms/Message';

import { EnumNotificationStatus, useNotificationStore } from '@stories/notifications';

export const useNotificationState = () => {
  const [notification] = useNotificationStore((state) => [state.notification]);
  const isValidatedStatus = (compareStatus: NotificationColorsStatus) => notification?.status.toLowerCase() === compareStatus;

  return {
    isValidatedStatus,
    colorStatus: notification?.status ?? EnumNotificationStatus.INFO,
  };
};
