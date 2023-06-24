import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { ArticleSlice, SearchSlice, TechnologiesSlice } from './slices';
import { createArticleSlice, createSearchSlice, createTechnologiesSlice } from './slices';

type Store = ArticleSlice & SearchSlice & TechnologiesSlice;

export const useGlobalStore = create<Store>()(
  persist(
    (...set) => ({
      ...createSearchSlice(...set),
      ...createArticleSlice(...set),
      ...createTechnologiesSlice(...set),
    }),
    {
      name: 'global-storage',
    }
  )
);
