import { create } from 'zustand';

interface State {
  args: Set<string>;
  technologies: string[];
  getAllTechnologiesList: string[];
}

interface Action {
  deleteTechnology: (technologies: string) => void;
  updateTechnologies: (technologies: string) => void;
  updateTechnologiesList: (technologies: string[]) => void;
}

export const useTechnologiesStore = create<State & Action>((set) => ({
  args: new Set(),
  technologies: [],
  getAllTechnologiesList: [],
  deleteTechnology: (technology) =>
    set((state) => {
      const deleteTechnology = state.args.delete(technology) ? state.args : state.args;

      const args = state.args.has(technology) ? deleteTechnology : state.args;
      const technologies = Array.from(state.args);

      return { args, technologies };
    }),
  updateTechnologies: (technology) => set((state) => ({ ...state, args: state.args.add(technology), technologies: Array.from(state.args) })),
  updateTechnologiesList: (technologies) => set((state) => ({ ...state, getAllTechnologiesList: technologies })),
}));
