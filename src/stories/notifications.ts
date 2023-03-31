import { create } from 'zustand';

export enum EnumNotificationStatus {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARN = 'WARN',
  INFO = 'INFO',
}

interface Notification {
  msg: string;
  status: EnumNotificationStatus;
}

interface State {
  notification?: Notification;
}

interface Action {
  updateNotification: (notification: State['notification']) => void;
}

export const useNotificationStore = create<State & Action>((set) => ({
  updateNotification: (notification) => set(() => ({ notification })),
}));
