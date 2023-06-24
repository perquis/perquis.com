import type { StateCreator } from 'zustand';

interface State {
  status: '' | 'tags' | 'search' | 'search-tags';
  keywords: string;
}

interface Action {
  updateStatus: (status: State['status']) => void;
  updateKeywords: (keywords: State['keywords']) => void;
}

export type SearchSlice = State & Action;

export const createSearchSlice: StateCreator<SearchSlice, [], [], SearchSlice> = (set, get) => ({
  status: '',
  keywords: '',
  updateStatus: (status) =>
    set(() => ({
      ...get(),
      status,
    })),
  updateKeywords: (keywords) =>
    set(() => ({
      ...get(),
      keywords,
    })),
});
