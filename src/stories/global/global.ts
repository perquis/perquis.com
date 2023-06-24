import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import {
  type ArticleSlice,
  createArticleSlice,
  createNotificationsSlice,
  createSearchSlice,
  createTechnologiesSlice,
  type NotificationsSlice,
  type SearchSlice,
  type TechnologiesSlice,
} from './slices';

type Store = ArticleSlice & SearchSlice & TechnologiesSlice & NotificationsSlice;

export const useGlobalStore = create<Store>()(
  persist(
    (...set) => ({
      ...createSearchSlice(...set),
      ...createArticleSlice(...set),
      ...createTechnologiesSlice(...set),
      ...createNotificationsSlice(...set),
    }),
    {
      name: 'global-storage',
    }
  )
);
