import type { MDXRemoteProps } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import type { Slug } from '@stories/toc';
import { useTOCStore } from '@stories/toc';

import { scrollPaddingTop } from '@data/presets';

import { components } from './components/components';

// trzy stany, hidden, visible, read
export const MarkdownToHTML = (props: MDXRemoteProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [updateSlugs, updateTocOpen] = useTOCStore((state) => [state.updateSlugs, state.updateTocOpen]);
  const [reference, inView] = useInView({ threshold: 0 });
  const { locale } = useRouter();

  useEffect(() => {
    const toc = ref.current?.querySelector('.toc');
    const slugs: Slug[] = [];

    toc?.querySelectorAll<HTMLAnchorElement>('a').forEach((link, i) => {
      const { hash, textContent } = link;
      const position = Number(document?.querySelectorAll<HTMLAnchorElement>('.link')[i]?.getBoundingClientRect()?.top - scrollPaddingTop - 100);
      const calcPosition = Number(document?.querySelectorAll<HTMLAnchorElement>('.link')[i + 1]?.getBoundingClientRect()?.top - scrollPaddingTop - 100);
      const nextChapterPosition = !isNaN(calcPosition) ? calcPosition : undefined;

      slugs.push({ href: decodeURI(hash), status: 'hidden', textContent: textContent ?? '', position, nextChapterPosition });
    });

    updateSlugs(slugs);
    reference(ref.current?.querySelector('.toc'));
  }, [updateSlugs, reference, locale]);

  useEffect(() => updateTocOpen(inView), [inView, updateTocOpen]);

  return (
    <DirectionColumn ref={ref}>
      <MDXRemote {...props} components={components} />
    </DirectionColumn>
  );
};
