import { DirectionColumn } from '@components/globals/wrappers';
import { ChosenTags } from '@components/locals/PostsList/molecules/ChosenTags/ChosenTags';
import { Heading } from '@components/locals/PostsList/molecules/Heading/Heading';
import { PullingArticlesList } from '@components/locals/PostsList/organisms/PullingArticlesList/PullingArticlesList';
import { SearchBar } from '@components/locals/SearchBar';

export const PostsList = () => {
  return (
    <DirectionColumn>
      <Heading />
      <SearchBar />
      <ChosenTags />
      <PullingArticlesList />
    </DirectionColumn>
  );
};
