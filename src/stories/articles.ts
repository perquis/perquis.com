import { create } from 'zustand';

import type { Articles } from '@graphql/databases/client';

export type RequiredArticle = Required<Pick<Articles, 'id' | 'slug' | 'tags' | 'title' | 'thumbnail' | 'published' | 'introduction'>>;

export type PickedArticleProps = Omit<RequiredArticle, 'id'>;
export type PickedDetailsProps = Omit<RequiredArticle, 'id' | 'thumbnail'>;
interface State {
  isLoading: boolean;
  hasNextPage: boolean;
  articles: RequiredArticle[];
}

interface Action {
  updateIsLoading: (isLoading: State['isLoading']) => void;
  addArticlesToList: (articles: State['articles']) => void;
  updateArticlesList: (articles: State['articles']) => void;
  updateHasNextPage: (hasNextPage: State['hasNextPage']) => void;
}

export const useArticlesStore = create<State & Action>((set) => ({
  articles: [],
  isLoading: false,
  hasNextPage: false,
  updateIsLoading: (isLoading) => set((state) => ({ ...state, isLoading })),
  updateArticlesList: (articles) => set((state) => ({ ...state, articles })),
  updateHasNextPage: (hasNextPage) => set((state) => ({ ...state, hasNextPage })),
  addArticlesToList: (articles) => set((state) => ({ ...state, articles: [...state.articles, ...articles] })),
}));
