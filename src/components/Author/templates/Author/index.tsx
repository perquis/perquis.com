import { AboutMe } from '@components/Author/molecules/AboutMe';
import { HeroHeader } from '@components/Author/templates/HeroHeader';

export const Author = () => {
  return (
    <>
      <HeroHeader src="/images/thumbnail.gif" alt="Thumbnail" />
      <AboutMe />
    </>
  );
};
