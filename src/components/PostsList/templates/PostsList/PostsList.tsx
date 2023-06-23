import { DirectionColumn } from '@components/globals/wrappers';
import { ChosenTags } from '@components/PostsList/molecules/ChosenTags/ChosenTags';
import { Heading } from '@components/PostsList/molecules/Heading/Heading';
import { PullingArticlesList } from '@components/PostsList/organisms/PullingArticlesList/PullingArticlesList';
import { SearchBar } from '@components/SearchBar';

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
