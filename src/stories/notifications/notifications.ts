import { create } from 'zustand';

export interface Notification {
  id: string;
  msg: string;
  title: string;
  status: 'success' | 'error' | 'warn' | 'info';
}

interface State {
  notifications: Notification[];
}

interface Action {
  deleteNotification: (id: Notification['id']) => void;
  updateNotification: (notification: Notification) => void;
}

export const useNotificationStore = create<State & Action>((set) => ({
  notifications: [],
  deleteNotification: (id) => set((state) => ({ notifications: state.notifications.filter((_) => _.id !== id) })),
  updateNotification: (notification) => set((state) => ({ ...state, notifications: [...state.notifications, notification] })),
}));
