import type { StateCreator } from 'zustand';

interface State {
  loadingStatus: null | 'subscribe-newsletter' | 'comment';
}

interface Action {
  updateLoadingStatus: (loadingStatus: State['loadingStatus']) => void;
}

export type LoadingStatusSlice = State & Action;

export const createLoadingStatusSlice: StateCreator<LoadingStatusSlice, [], [], LoadingStatusSlice> = (set, get) => ({
  loadingStatus: null,
  updateLoadingStatus: (loadingStatus) =>
    set(() => ({
      ...get(),
      loadingStatus,
    })),
});
