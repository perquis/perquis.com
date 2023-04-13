import { useTechnologiesStore } from '@stories/technologies';

export const useSearchingForArticles = () => {
  const [technologies] = useTechnologiesStore((state) => [state.technologies]);
  const isTechnologies = technologies.length > 0;

  return { isTechnologies };
};
