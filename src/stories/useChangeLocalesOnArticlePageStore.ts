import { create } from 'zustand';

interface State {
  negativeSlug: string;
}

interface Action {
  updateNegativeSlug: (negativeSlug: State['negativeSlug']) => void;
}

export const useChangeLocalesOnArticlePageStore = create<State & Action>((set) => ({
  negativeSlug: '',
  updateNegativeSlug: (negativeSlug) => set(() => ({ negativeSlug })),
}));
