import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import type { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import type { BlogPageProps } from 'src/pages/blog/[slug]';

import { NewsletterObserver } from '@GlobalComponents/observers/NewsletterObserver';
import { DetailsWrapper } from '@GlobalComponents/wrappers/DetailsWrapper';
import { FullWidthContainer } from '@GlobalComponents/wrappers/FullWidthContainer';

import { Stickers } from '@stickers/index';

import { Details } from '@components/Article';
import { ReadingTime } from '@components/Article/atoms/ReadingTime';
import { Author } from '@components/Author';
import { MarkdownToHTML } from '@components/MarkdownToHTML';
import { TableOfContents } from '@components/TableOfContents';

import { usePostsListStore } from '@stories/posts';
import { useTOCStore } from '@stories/toc';

import type { Articles } from '@graphql/databases/client';

import { useObserver } from '@hooks/useObserver';

import { CommentsList } from './templates/CommentsList';
import { ResourcesList } from './templates/ResourcesList';

export const BlogPage: FC<Record<'stories', BlogPageProps>> = ({ stories: { node, source, negativeSlug } }) => {
  const { slug, thumbnail, createdAt, tags, title, resources, introduction, content } = node;

  const [updatePostId] = usePostsListStore((state) => [state.updatePostId]);
  const { query } = useRouter();

  useObserver({ negativeSlug });

  useEffect(() => {
    axios.get<PrismaPost>(`/api/posts/${query.slug}`).then(({ data }) => updatePostId(data.id));
  }, [updatePostId, query.slug]);

  const markdownContainerRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView();
  const [updateTocOpen] = useTOCStore((state) => [state.updateTocOpen]);

  useEffect(() => {
    ref(markdownContainerRef?.current?.querySelector('.toc'));
    updateTocOpen(inView);
  }, [inView, updateTocOpen, markdownContainerRef, ref]);

  return (
    <>
      <Head>
        <title>{title + ` | PerQuis's Blog`}</title>
        <meta name="description" content={introduction ?? ''} />
      </Head>
      <NewsletterObserver />
      <Author src={String(thumbnail?.url)} alt={String(slug)} />
      <DetailsWrapper>
        <Details details={{ createdAt, slug, tags, title, introduction } as Articles} />
        <ReadingTime content={content?.text ?? ''} />
      </DetailsWrapper>
      <FullWidthContainer>
        <div ref={markdownContainerRef}>
          <MarkdownToHTML {...source} />
        </div>
        <ResourcesList resources={resources} />
        <Stickers />
        <CommentsList />
        <TableOfContents />
      </FullWidthContainer>
    </>
  );
};
