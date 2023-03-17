import { create } from 'zustand';

interface State {
  toggleHomePage: boolean;
}

interface Action {
  updateToggleHomePage: (toggleHomePage: State['toggleHomePage']) => void;
}

export const useNavigationStore = create<State & Action>((set) => ({
  toggleHomePage: false,
  updateToggleHomePage: (toggleHomePage) => set((state) => ({ ...state, toggleHomePage })),
}));
