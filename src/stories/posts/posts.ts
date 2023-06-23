import { create } from 'zustand';

interface State {
  postId: string;
}

interface Action {
  updatePostId: (postId: State['postId']) => void;
}

export const usePostsListStore = create<State & Action>((set) => ({
  postId: '',
  updatePostId: (postId) => set(() => ({ postId })),
}));
