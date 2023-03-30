import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { FC } from 'react';
import type { BlogPageProps } from 'src/pages/blog/[slug]';

import { DetailsWrapper } from '@GlobalComponents/wrappers/DetailsWrapper';
import { FullWidthContainer } from '@GlobalComponents/wrappers/FullWidthContainer';

import { Details } from '@components/Article';
import { ReadingTime } from '@components/Article/atoms/ReadingTime';
import { Author } from '@components/Author';
import { MarkdownToHTML } from '@components/MarkdownToHTML';
import { TableOfContents } from '@components/TableOfContents';

import type { PickedDetailsProps } from '@stories/articles';
import { usePostsListStore } from '@stories/posts';
import { useTOCStore } from '@stories/toc';

import { useObserver } from '@hooks/useObserver';

import { CommentsList } from './templates/CommentsList';
import { ResourcesList } from './templates/ResourcesList';

export const BlogPage: FC<Record<'stories', BlogPageProps>> = ({ stories: { node, source, negativeSlug } }) => {
  const { slug, thumbnail, createdAt, tags, title, resources, introduction, content } = node;
  const [isTocOpen] = useTOCStore((state) => [state.isTocOpen]);
  const [updatePostId] = usePostsListStore((state) => [state.updatePostId]);
  const { query } = useRouter();

  useObserver({ negativeSlug });

  useEffect(() => {
    fetch(`/api/posts/${query.slug}`)
      .then((res) => res.json())
      .then((res) => updatePostId(res.id));
  }, [updatePostId, query.slug]);

  return (
    <>
      <Head>
        <title>{title + ` | PerQuis's Blog`}</title>
        <meta name="description" content={introduction ?? ''} />
      </Head>
      <Author src={String(thumbnail?.url)} alt={String(slug)} />
      <DetailsWrapper>
        <Details details={{ createdAt, slug, tags, title, introduction } as PickedDetailsProps} />
        <ReadingTime content={content?.text ?? ''} />
      </DetailsWrapper>
      <AnimatePresence>{!isTocOpen && <TableOfContents />}</AnimatePresence>
      <FullWidthContainer>
        <MarkdownToHTML {...source} />
        <ResourcesList resources={resources} />
        <CommentsList />
      </FullWidthContainer>
    </>
  );
};
