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
  isOpen: boolean;
  notification?: Notification;
}

interface Action {
  updateIsOpen: (isOpen: State['isOpen']) => void;
  updateNotification: (notification: State['notification']) => void;
}

export const useNotificationStore = create<State & Action>((set) => ({
  isOpen: false,
  updateIsOpen: (isOpen) => set((state) => ({ ...state, isOpen })),
  updateNotification: (notification) => set((state) => ({ ...state, notification })),
}));
