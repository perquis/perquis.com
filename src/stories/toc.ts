import { create } from 'zustand';

export interface Item {
  href: string;
  chapter: string;
  position: number;
  nextChapterPosition: number;
  textContent: string;
}

interface State {
  items: Item[];
  toggleToc: boolean;
  isTocOpen: boolean;
  isVisible: boolean;
}

interface Action {
  updateItems: (slugs: State['items']) => void;
  updateTocOpen: (isOpen: State['isTocOpen']) => void;
  updateToggleToc: (slugs: State['toggleToc']) => void;
  updateIsVisible: (isOpen: State['isVisible']) => void;
}

export const useTOCStore = create<State & Action>((set) => ({
  items: [],
  toggleToc: true,
  isTocOpen: false,
  isVisible: false,
  updateItems: (items) => set((state) => ({ ...state, items })),
  updateTocOpen: (isTocOpen) => set((state) => ({ ...state, isTocOpen })),
  updateIsVisible: (isVisible) => set((state) => ({ ...state, isVisible })),
  updateToggleToc: (toggleToc) => set((state) => ({ ...state, toggleToc })),
}));
