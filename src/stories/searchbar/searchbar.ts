import { create } from 'zustand';

interface State {
  status: '' | 'tags' | 'search' | 'search-tags';
  keywords: string;
}

interface Action {
  updateStatus: (status: State['status']) => void;
  updateKeywords: (keywords: State['keywords']) => void;
}

export const useSearchBarStore = create<State & Action>((set) => ({
  status: '',
  keywords: '',
  updateStatus: (status) => set((state) => ({ ...state, status })),
  updateKeywords: (keywords) => set((state) => ({ ...state, keywords })),
}));
