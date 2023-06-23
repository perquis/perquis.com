import { create } from 'zustand';

interface State {
  isDisabled: boolean;
  emailKeywords: string;
  modalKeywords: string;
  commentKeywords: string;
}

interface Action {
  updateDisabledState: (keywords: State['isDisabled']) => void;
  updateEmailKeywords: (keywords: State['emailKeywords']) => void;
  updateModalKeywords: (keywords: State['emailKeywords']) => void;
  updateCommentKeywords: (keywords: State['commentKeywords']) => void;
}

export const useFormStore = create<State & Action>((set) => ({
  isDisabled: false,
  emailKeywords: '',
  modalKeywords: '',
  commentKeywords: '',
  updateDisabledState: (isDisabled) => set(() => ({ isDisabled })),
  updateEmailKeywords: (emailKeywords) => set(() => ({ emailKeywords })),
  updateModalKeywords: (modalKeywords) => set(() => ({ modalKeywords })),
  updateCommentKeywords: (commentKeywords) => set(() => ({ commentKeywords })),
}));
