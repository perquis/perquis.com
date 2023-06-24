import type { StateCreator } from 'zustand';

interface State {
  open: null | '' | 'comment' | 'newsletter' | 'blur';
}

interface Action {
  updateOpen: (open: State['open']) => void;
}

export type OpenElementsSlice = State & Action;

export const createOpenElementsSlice: StateCreator<OpenElementsSlice, [], [], OpenElementsSlice> = (set, get) => ({
  open: null,
  updateOpen: (open) =>
    set(() => ({
      ...get(),
      open,
    })),
});
