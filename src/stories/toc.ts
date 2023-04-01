import { create } from 'zustand';

interface State {
  slugs: string;
  toggleToc: boolean;
  isTocOpen: boolean;
  isVisible: boolean;
}

interface Action {
  updateSlugs: (slugs: State['slugs']) => void;
  updateTocOpen: (isOpen: State['isTocOpen']) => void;
  updateToggleToc: (slugs: State['toggleToc']) => void;
  updateIsVisible: (isOpen: State['isVisible']) => void;
}

export const useTOCStore = create<State & Action>((set) => ({
  slugs: '',
  toggleToc: false,
  isTocOpen: false,
  isVisible: false,
  updateSlugs: (slugs) => set((state) => ({ ...state, slugs })),
  updateTocOpen: (isTocOpen) => set((state) => ({ ...state, isTocOpen })),
  updateIsVisible: (isVisible) => set((state) => ({ ...state, isVisible })),
  updateToggleToc: (toggleToc) => set((state) => ({ ...state, toggleToc })),
}));
