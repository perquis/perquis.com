import { create } from 'zustand';

import type { Articles } from '@graphql/databases/client';

export type RequiredArticle = Required<Pick<Articles, 'id' | 'slug' | 'tags' | 'title' | 'thumbnail' | 'published' | 'introduction'>>;

interface State {
  articles: RequiredArticle[];
  hasNextPage: boolean;
}

interface Action {
  updateArticlesList: (articles: State['articles']) => void;
  addArticlesToList: (articles: State['articles']) => void;
  updateHasNextPage: (hasNextPage: State['hasNextPage']) => void;
}

export type PickedArticleProps = Omit<RequiredArticle, 'id'>;
export type PickedDetailsProps = Omit<RequiredArticle, 'id' | 'thumbnail'>;

export const useArticlesStore = create<State & Action>((set) => ({
  articles: [],
  hasNextPage: false,
  updateArticlesList: (articles) => set((state) => ({ ...state, articles })),
  addArticlesToList: (articles) => set((state) => ({ ...state, articles: [...state.articles, ...articles] })),
  updateHasNextPage: (hasNextPage) => set((state) => ({ ...state, hasNextPage })),
}));
