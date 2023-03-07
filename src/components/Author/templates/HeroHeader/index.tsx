import { Thumbnail } from '@components/Author/atoms/Thumbnail';
import { AboutMe } from '@components/Author/molecules/AboutMe';
import { LabeledUser } from '@components/Author/organisms/LabeledUser';

export const HeroHeader = () => {
  return (
    <div>
      <Thumbnail />
      <LabeledUser />
      <AboutMe />
    </div>
  );
};
