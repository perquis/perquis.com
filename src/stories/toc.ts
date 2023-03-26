import { create } from 'zustand';

interface State {
  slugs: string;
  isTocOpen: boolean;
}

interface Action {
  updateSlugs: (slugs: State['slugs']) => void;
  updateTocOpen: (isOpen: State['isTocOpen']) => void;
}

export const useTOCStore = create<State & Action>((set) => ({
  slugs: '',
  isTocOpen: false,
  updateSlugs: (slugs) => set(() => ({ slugs })),
  updateTocOpen: (isTocOpen) => set(() => ({ isTocOpen })),
}));
