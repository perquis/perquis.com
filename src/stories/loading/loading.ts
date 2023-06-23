import { create } from 'zustand';

interface State {
  isLoadingWhileSendingRequest: boolean;
}

interface Action {
  updateIsLoadingWhileSendingRequest: (isLoadingWhileSendingRequest: State['isLoadingWhileSendingRequest']) => void;
}

export const useLoadingStore = create<State & Action>((set) => ({
  isLoadingWhileSendingRequest: false,
  updateIsLoadingWhileSendingRequest: (isLoadingWhileSendingRequest) => set(() => ({ isLoadingWhileSendingRequest })),
}));
