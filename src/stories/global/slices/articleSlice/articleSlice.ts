import type { StateCreator } from 'zustand';

import type { Articles } from '@graphql/databases/client';

export type RequiredArticle = Required<Pick<Articles, 'id' | 'slug' | 'tags' | 'title' | 'thumbnail' | 'createdAt' | 'introduction'>>;

export type PickedArticleProps = Omit<RequiredArticle, 'id'>;
export type PickedDetailsProps = Omit<RequiredArticle, 'id' | 'thumbnail'>;

interface State {
  postId: string;
  isLoading: boolean;
  posts: RequiredArticle[];
}

interface Action {
  updatePosts: (posts: State['posts']) => void;
  updatePostId: (postId: State['postId']) => void;
  updateIsLoading: (isLoading: State['isLoading']) => void;
}

export type ArticleSlice = State & Action;

export const createArticleSlice: StateCreator<ArticleSlice, [], [], ArticleSlice> = (set, get) => ({
  posts: [],
  postId: '',
  foundPosts: [],
  isLoading: false,
  updatePostId: (postId) =>
    set(() => ({
      ...get(),
      postId,
    })),
  updateIsLoading: (isLoading) =>
    set(() => ({
      ...get(),
      isLoading,
    })),
  updatePosts: (posts) =>
    set(() => ({
      ...get(),
      posts,
    })),
});
