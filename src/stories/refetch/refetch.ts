import { create } from 'zustand';

interface State {
  isRefetch: boolean;
}

interface Action {
  updateIsRefetch: (isBlur: State['isRefetch']) => void;
}

export const useRefetchStore = create<State & Action>((set) => ({
  isRefetch: false,
  updateIsRefetch: (isRefetch) => set(() => ({ isRefetch })),
}));
