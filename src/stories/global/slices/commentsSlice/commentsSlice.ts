import type { StateCreator } from 'zustand';

import type { CommentProps } from '@components/locals/Comment';

interface State {
  comment: CommentProps | null;
}

interface Action {
  updateComment: (comment: State['comment']) => void;
}

export type CommentsSlice = State & Action;

export const createCommentsSlice: StateCreator<CommentsSlice, [], [], CommentsSlice> = (set, get) => ({
  comment: null,
  updateComment: (comment) =>
    set(() => ({
      ...get(),
      comment,
    })),
});
