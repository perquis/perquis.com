import { TagsList } from '@components/globals/molecules';
import { DeleteTechnology } from '@components/locals/SearchBar/atoms';
import { useGlobalStore } from '@stories';

export const ChosenTags = () => {
  const [technologies] = useGlobalStore(({ selected }) => [selected]);

  return technologies.length > 0 ? (
    <TagsList>
      {technologies.map((tchnlg) => (
        <DeleteTechnology key={tchnlg}>{tchnlg}</DeleteTechnology>
      ))}
    </TagsList>
  ) : null;
};
