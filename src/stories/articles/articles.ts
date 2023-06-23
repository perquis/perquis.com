import { create } from 'zustand';

import type { Articles } from '@graphql/databases/client';
import { removeDuplicateObjects } from '@utils';

export type RequiredArticle = Required<Pick<Articles, 'id' | 'slug' | 'tags' | 'title' | 'thumbnail' | 'createdAt' | 'introduction'>>;

export type PickedArticleProps = Omit<RequiredArticle, 'id'>;
export type PickedDetailsProps = Omit<RequiredArticle, 'id' | 'thumbnail'>;

interface State {
  pageSize: number;
  isLoading: boolean;
  hasNextPage: boolean;
  articles: RequiredArticle[];
  searchedForArticlesList: RequiredArticle[];
}

interface Action {
  updateIsLoading: (isLoading: State['isLoading']) => void;
  addArticlesToList: (articles: State['articles']) => void;
  updateArticlesList: (articles: State['articles']) => void;
  updateHasNextPage: (hasNextPage: State['hasNextPage']) => void;
  updateSearchedForArticlesList: (articles: State['articles']) => void;
}

export const useArticlesStore = create<State & Action>((set) => ({
  pageSize: 0,
  articles: [],
  isLoading: false,
  hasNextPage: false,
  searchedForArticlesList: [],
  updateIsLoading: (isLoading) => set((state) => ({ ...state, isLoading })),
  updateHasNextPage: (hasNextPage) => set((state) => ({ ...state, hasNextPage })),
  updateArticlesList: (articles) => set((state) => ({ ...state, articles, pageSize: articles.length })),
  updateSearchedForArticlesList: (searchedForArticlesList) => set((state) => ({ ...state, searchedForArticlesList })),
  addArticlesToList: (articles) => set((state) => ({ ...state, articles: removeDuplicateObjects([...state.articles, ...articles], 'title') })),
}));
