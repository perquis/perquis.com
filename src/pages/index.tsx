import Author from '@components/Author';
import { WavyLines } from '@components/global/atoms/WavyLines';
import { PostsList } from '@components/PostsList/templates/PostsList';

const Home = () => {
  return (
    <>
      <Author />
      <WavyLines />
      <PostsList />
    </>
  );
};

export default Home;
