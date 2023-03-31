import { create } from 'zustand';

interface State {
  isDisabled: boolean;
  emailKeywords: string;
  commentKeywords: string;
}

interface Action {
  updateDisabledState: (keywords: State['isDisabled']) => void;
  updateEmailKeywords: (keywords: State['emailKeywords']) => void;
  updateCommentKeywords: (keywords: State['commentKeywords']) => void;
}

export const useFormStore = create<State & Action>((set) => ({
  isDisabled: false,
  emailKeywords: '',
  commentKeywords: '',
  updateDisabledState: (isDisabled) => set(() => ({ isDisabled })),
  updateEmailKeywords: (emailKeywords) => set(() => ({ emailKeywords })),
  updateCommentKeywords: (commentKeywords) => set(() => ({ commentKeywords })),
}));
