import { TagsList } from '@components/globals/molecules';
import { DeleteTechnology } from '@components/SearchBar/atoms';
import { useTechnologiesStore } from '@stories';

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
