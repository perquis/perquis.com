import { DeleteTechnology } from '@components/PostsList/atoms/DeleteTechnology';
import { TagsList } from '@components/PostsList/molecules/TagsLits';

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
