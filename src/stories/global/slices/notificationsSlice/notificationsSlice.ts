import type { StateCreator } from 'zustand';

type Status = 'success' | 'error' | 'warn' | 'info';

export interface Notification {
  id: string;
  msg: string;
  title: string;
  status: Status;
}

interface State {
  notifications: Notification[];
}

interface Action {
  deleteNotification: (id: Notification['id']) => void;
  updateNotification: (notification: Notification) => void;
}

export type NotificationsSlice = State & Action;

export const createNotificationsSlice: StateCreator<NotificationsSlice, [], [], NotificationsSlice> = (set, get) => ({
  notifications: [],
  deleteNotification: (id) =>
    set(() => ({
      notifications: get().notifications.filter((_) => _.id !== id),
    })),
  updateNotification: (newItem) =>
    set(() => ({
      notifications: [...get().notifications, newItem],
    })),
});
