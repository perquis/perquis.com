import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import type { BlogPageViewProps } from 'src/pages/blog/[slug]';

import { NewsletterObserver } from '@components/globals/observers';
import { Stickers } from '@components/globals/stickers/index';
import { DetailsWrapper, FullWidthContainer } from '@components/globals/wrappers';
import { Details, ReadingTime } from '@components/locals/Article';
import { Author } from '@components/locals/Author';
import { MarkdownToHTML } from '@components/locals/MarkdownToHTML';
import { TableOfContents } from '@components/locals/TableOfContents';
import type { Articles } from '@graphql/databases/client';
import { useObserver } from '@hooks';
import { usePostsListStore, useTOCStore } from '@stories';

import { CommentsList, ResourcesList, StickyHelpersList } from './templates';

export const BlogPageView: FC<Record<'stories', BlogPageViewProps>> = ({ stories: { node, source, negativeSlug } }) => {
  const { slug, thumbnail, createdAt, tags, title, resources, introduction, content, socials, metaDescription } = node;

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
        <meta name="description" content={metaDescription ?? ''} />
      </Head>
      <NewsletterObserver />
      <Author src={String(thumbnail?.url)} alt={String(slug)} />
      <DetailsWrapper>
        <Details details={{ createdAt, slug, tags, title, introduction } as Articles} />
        <ReadingTime content={content?.text ?? ''} />
      </DetailsWrapper>
      <FullWidthContainer>
        <StickyHelpersList socials={socials} />
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
