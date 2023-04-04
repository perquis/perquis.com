import { create } from 'zustand';

import type { CommentProps } from '@components/Comment';

interface State {
  isOpenUpdateCommentModal: boolean;
  comment?: CommentProps;
}

interface Action {
  updateComment: (comment: State['comment'], isOpenUpdateCommentModal: State['isOpenUpdateCommentModal']) => void;
}

export const useCommentStore = create<State & Action>((set) => ({
  isOpenUpdateCommentModal: false,
  updateComment: (comment, isOpenUpdateCommentModal) => set(() => ({ comment, isOpenUpdateCommentModal })),
}));
