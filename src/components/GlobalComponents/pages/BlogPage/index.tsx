import useTranslation from 'next-translate/useTranslation';
import type { FC } from 'react';
import { useEffect } from 'react';
import type { BlogPageProps } from 'src/pages/blog/[slug]';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { NewsletterObserver } from '@GlobalComponents/observers/NewsletterObserver';
import { DetailsWrapper } from '@GlobalComponents/wrappers/DetailsWrapper';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';
import { FullWidthContainer } from '@GlobalComponents/wrappers/FullWidthContainer';

import { Stickers } from '@stickers/index';

import { Details } from '@components/Article';
import { ReadingTime } from '@components/Article/atoms/ReadingTime';
import { Author } from '@components/Author';
import { Comment } from '@components/Comment';
import { MarkdownToHTML } from '@components/MarkdownToHTML';
import { Resource } from '@components/Resource';
import { WriteToSomething } from '@components/WriteToSomething';

import type { PickedDetailsProps } from '@stories/articles';
import { useChangeLocalesOnArticlePage } from '@stories/changeLocalesOnArticlePage';

import { Dashed } from '@icons/Dashed';

import { hasCookie } from '@utils/hasCookie';

import { newsletterModalPattern } from '@data/regexes';

export const BlogPage: FC<Record<'stories', BlogPageProps>> = ({ stories: { edges, source, negativeSlug } }) => {
  const [updateNegativeSlug] = useChangeLocalesOnArticlePage((state) => [state.updateNegativeSlug]);

  const [
    {
      node: { slug, thumbnail, createdAt, tags, title, resources, introduction, content },
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

  useEffect(() => {
    if (hasCookie(newsletterModalPattern)) document.cookie = `newsletter-modal=true;max-age=2592000;`;
  }, []);

  useEffect(() => updateNegativeSlug(negativeSlug ?? ''), [negativeSlug, updateNegativeSlug]);

  return (
    <>
      <NewsletterObserver />
      <Author src={String(thumbnail?.url)} alt={String(slug)} />
      <DetailsWrapper>
        <Details details={{ createdAt, slug, tags, title, introduction } as PickedDetailsProps} />
        <ReadingTime content={content} />
      </DetailsWrapper>
      <FullWidthContainer>
        <MarkdownToHTML {...source} />
        <DirectionColumn isTop>
          <h2>{resourcesTitle}</h2>
          {resourcesList}
        </DirectionColumn>
        <Stickers />
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
