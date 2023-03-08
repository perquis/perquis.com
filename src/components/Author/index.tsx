import { AboutMe } from './molecules/AboutMe';
import { HeroHeader } from './templates/HeroHeader';

const Author = () => {
  return (
    <>
      <HeroHeader src="/images/thumbnail.gif" alt="Thumbnail" />
      <AboutMe />
    </>
  );
};

export default Author;
