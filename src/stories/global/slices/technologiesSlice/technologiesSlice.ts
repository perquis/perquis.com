import type { StateCreator } from 'zustand';

interface State {
  selected: string[];
  allItems: string[];
}

interface Action {
  updateSelected: (technologies: string) => void;
  updateAllItems: (technologies: string[]) => void;
}

export type TechnologiesSlice = State & Action;

export const createTechnologiesSlice: StateCreator<TechnologiesSlice, [], [], TechnologiesSlice> = (set, get) => ({
  selected: [],
  allItems: [],
  updateSelected: (technology) =>
    set(() => {
      let newArray = get().selected;
      const findIndex = newArray.findIndex((t) => t === technology);

      if (findIndex === -1) {
        newArray = [...newArray, technology];
      } else {
        newArray = newArray.filter((_, index) => index !== findIndex);
      }

      return {
        ...get(),
        selected: newArray,
      };
    }),
  updateAllItems: (allItems) =>
    set(() => ({
      ...get(),
      allItems,
    })),
});
