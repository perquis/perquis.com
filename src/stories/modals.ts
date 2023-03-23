import { create } from 'zustand';

interface State {
  isNewsletterModalOpen: boolean;
}

interface Action {
  updateNewsletterModalOpen: (isNewsletterModalOpen: State['isNewsletterModalOpen']) => void;
}

export const useModalStore = create<State & Action>((set) => ({
  isNewsletterModalOpen: false,
  updateNewsletterModalOpen: (isNewsletterModalOpen) => set(() => ({ isNewsletterModalOpen })),
}));
