import { TagsList } from '@GlobalComponents/molecules/TagsLits';

import { DeleteTechnology } from '@components/SearchBar/atoms/DeleteTechnology';

import { useTechnologiesStore } from '@stories/technologies';

export const ChosenTags = () => {
  const [technologies] = useTechnologiesStore((state) => [state.technologies]);

  return technologies.length > 0 ? (
    <TagsList>
      {technologies.map((tchnlg) => (
        <DeleteTechnology key={tchnlg}>{tchnlg}</DeleteTechnology>
      ))}
    </TagsList>
  ) : null;
};
