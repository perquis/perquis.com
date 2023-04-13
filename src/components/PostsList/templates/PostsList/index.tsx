import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { ChosenTags } from '@components/PostsList/molecules/ChosenTags';
import { Heading } from '@components/PostsList/molecules/Heading';
import { PullingArticlesList } from '@components/PostsList/organisms/PullingArticlesList';
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
