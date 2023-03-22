import { create } from 'zustand';

interface State {
  emailKeywords: string;
  commentKeywords: string;
}

interface Action {
  updateEmailKeywords: (keywords: State['emailKeywords']) => void;
  updateCommentKeywords: (keywords: State['commentKeywords']) => void;
}

export const useFormStore = create<State & Action>((set) => ({
  emailKeywords: '',
  commentKeywords: '',
  updateEmailKeywords: (emailKeywords) => set(() => ({ emailKeywords })),
  updateCommentKeywords: (commentKeywords) => set(() => ({ commentKeywords })),
}));
