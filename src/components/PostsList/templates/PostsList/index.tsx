import { DirectionColumn } from '@GlobalComponents/atoms/DirectionColumn';

import { InfiniteScroll } from '@components/InfiniteScroll';
import { LoadingArticlesList } from '@components/Loader/organisms/LoadingArticlesList';
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
      <InfiniteScroll>
        <PullingArticlesList />
        <LoadingArticlesList />
      </InfiniteScroll>
    </DirectionColumn>
  );
};
