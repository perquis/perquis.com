import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import {
  type ArticleSlice,
  type CommentsSlice,
  createArticleSlice,
  createCommentsSlice,
  createLoadingStatusSlice,
  createNotificationsSlice,
  createOpenElementsSlice,
  createSearchSlice,
  createTechnologiesSlice,
  type LoadingStatusSlice,
  type NotificationsSlice,
  type OpenElementsSlice,
  type SearchSlice,
  type TechnologiesSlice,
} from './slices';

type Store = ArticleSlice & SearchSlice & TechnologiesSlice & NotificationsSlice & LoadingStatusSlice & OpenElementsSlice & CommentsSlice;

export const useGlobalStore = create<Store>()(
  persist(
    (...set) => ({
      ...createSearchSlice(...set),
      ...createArticleSlice(...set),
      ...createCommentsSlice(...set),
      ...createTechnologiesSlice(...set),
      ...createOpenElementsSlice(...set),
      ...createNotificationsSlice(...set),
      ...createLoadingStatusSlice(...set),
    }),
    {
      name: 'global-storage',
    }
  )
);
