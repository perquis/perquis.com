import Head from 'next/head';
import type { FC } from 'react';
import type { BlogPageProps } from 'src/pages/blog/[slug]';

import { NewsletterObserver } from '@GlobalComponents/observers/NewsletterObserver';
import { DetailsWrapper } from '@GlobalComponents/wrappers/DetailsWrapper';
import { FullWidthContainer } from '@GlobalComponents/wrappers/FullWidthContainer';

import { Stickers } from '@stickers/index';

import { Details } from '@components/Article';
import { ReadingTime } from '@components/Article/atoms/ReadingTime';
import { Author } from '@components/Author';
import { MarkdownToHTML } from '@components/MarkdownToHTML';

import type { PickedDetailsProps } from '@stories/articles';

import { useBlogPageObserver } from '@hooks/useBlogPageObserver';

import { ResourcesList } from './templates/ResourcesList';

export const BlogPage: FC<Record<'stories', BlogPageProps>> = ({ stories: { node, source, negativeSlug } }) => {
  const { slug, thumbnail, createdAt, tags, title, resources, introduction, content } = node;
  useBlogPageObserver({ negativeSlug });

  return (
    <>
      <Head>
        <title>{title + ` | PerQuis's Blog`}</title>
        <meta name="description" content={introduction ?? ''} />
      </Head>
      <NewsletterObserver />
      <Author src={String(thumbnail?.url)} alt={String(slug)} />
      <DetailsWrapper>
        <Details details={{ createdAt, slug, tags, title, introduction } as PickedDetailsProps} />
        <ReadingTime content={content?.text ?? ''} />
      </DetailsWrapper>
      <FullWidthContainer>
        <MarkdownToHTML {...source} />
        <ResourcesList resources={resources} />
        <Stickers />
      </FullWidthContainer>
    </>
  );
};
