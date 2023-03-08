import { create } from 'zustand';

interface State {
  isBlur: boolean;
}

interface Action {
  updateIsBlur: (isBlur: State['isBlur']) => void;
}

export const useBlurStore = create<State & Action>((set) => ({
  isBlur: false,
  updateIsBlur: (isBlur) => set(() => ({ isBlur })),
}));
