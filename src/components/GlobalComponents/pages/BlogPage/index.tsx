import useTranslation from 'next-translate/useTranslation';
import type { FC } from 'react';
import type { BlogPageProps } from 'src/pages/blog/[slug]';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { WavyLines } from '@GlobalComponents/atoms/WavyLines';
import { DetailsWrapper } from '@GlobalComponents/wrappers/DetailsWrapper';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';
import { FullWidthContainer } from '@GlobalComponents/wrappers/FullWidthContainer';
import { StickersList } from '@GlobalComponents/wrappers/StickersList';

import { Details } from '@components/Article';
import { Author } from '@components/Author';
import { Comment } from '@components/Comment/templates/Comment';
import { MarkdownToHTML } from '@components/MarkdownToHTML';
import { Resource } from '@components/Resource';
import { Newsletter } from '@components/Sticker';
import { WriteToSomething } from '@components/WriteToSomething/organisms/WriteToSomething';

import type { PickedDetailsProps } from '@stories/articles';

import { Dashed } from '@icons/Dashed';

export const BlogPage: FC<Record<'stories', BlogPageProps>> = ({ stories: { edges, source } }) => {
  const [
    {
      node: { slug, thumbnail, createdAt, tags, title, resources, introduction },
    },
  ] = edges;

  const resourcesList = resources.map(({ link, name }, i) => (
    <Resource link={String(link)} key={i}>
      {name}
    </Resource>
  ));

  const { t } = useTranslation('global');
  const resourcesTitle = t('resources'),
    commentTitle = t('comment.title'),
    commentDescription = t('comment.description');

  return (
    <>
      <Author src={String(thumbnail?.url)} alt={String(slug)} />
      <DetailsWrapper>
        <Details details={{ createdAt, slug, tags, title, introduction } as PickedDetailsProps} />
      </DetailsWrapper>
      <FullWidthContainer>
        <MarkdownToHTML {...source} />
        <DirectionColumn isTop>
          <h2>{resourcesTitle}</h2>
          {resourcesList}
        </DirectionColumn>
        <StickersList>
          <WavyLines />
          <Newsletter />
          <WavyLines />
        </StickersList>
        <DirectionColumn isTop>
          <div>
            <h2>{commentTitle}</h2>
            <Paragraph style={{ marginTop: 6 }}>{commentDescription}</Paragraph>
          </div>
          <WriteToSomething />
          <Dashed />
          <Comment
            avatar="/images/avatar.jpg"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quibusdam sed dolore nostrum officiis repudiandae rem vel nemo vero quidem praesentium iure dolores itaque ipsum ea, nobis molestias laboriosam corrupti?"
            nickname="PerQuis!"
          />
        </DirectionColumn>
      </FullWidthContainer>
    </>
  );
};
