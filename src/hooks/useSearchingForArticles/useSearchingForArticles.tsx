import { useTechnologiesStore } from '@stories';

export const useSearchingForArticles = () => {
  const [technologies] = useTechnologiesStore((state) => [state.technologies]);
  const isTechnologies = technologies.length > 0;

  return { isTechnologies };
};
