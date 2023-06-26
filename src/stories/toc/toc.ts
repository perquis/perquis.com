import { create } from 'zustand';

export type StatusChapter = 'hide' | 'visible' | 'read';

export interface Item {
  href: string;
  textContent: string;
  status: StatusChapter;
}

interface State {
  items: Item[];
  isOpen: boolean;
}

interface Action {
  updateItems: (items: State['items']) => void;
  toggleOpen: (isOpen: State['isOpen']) => void;
  changeStatusItem: (id: Item, newStatus: StatusChapter) => void;
}

export const useTOCStore = create<State & Action>((set) => ({
  items: [],
  isOpen: true,
  updateItems: (items) =>
    set((state) => ({
      ...state,
      items,
    })),
  toggleOpen: (isOpen) =>
    set((state) => ({
      ...state,
      isOpen,
    })),
  changeStatusItem: (id, newStatus) =>
    set((state) => {
      const newArray = state.items;
      const filteredItems = newArray.map((item) => ({
        ...item,
        status: `#${id}` === item.href ? newStatus : item.status,
      }));

      return {
        ...state,
        items: filteredItems,
      };
    }),
}));
