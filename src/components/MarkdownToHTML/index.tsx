/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MDXRemoteProps } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import type { Slug } from '@stories/toc';
import { useTOCStore } from '@stories/toc';

import { useScrollPositionY } from '@hooks/useScrollPositionY';

import { getScrollToTopValue } from '@utils/getScrollToTopValue';

import { components } from './components/components';

export const MarkdownToHTML = (props: MDXRemoteProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [updateSlugs] = useTOCStore((state) => [state.updateSlugs]);
  const { scrollPostion } = useScrollPositionY();
  const { locale } = useRouter();

  useEffect(() => {
    const toc = ref.current?.querySelector('.toc');
    const slugs: Slug[] = [];

    toc?.querySelectorAll<HTMLAnchorElement>('a').forEach((link, i) => {
      const { hash, textContent } = link;

      const position = getScrollToTopValue(i);
      const calcPosition = getScrollToTopValue(i + 1);
      const nextChapterPosition =
        (!isNaN(calcPosition) ? calcPosition : typeof document !== 'undefined' ? document.getElementById('resources')?.getBoundingClientRect().top : 0) ?? 0;

      slugs.push({ href: decodeURI(hash), textContent: textContent ?? '', position, nextChapterPosition });
    });

    updateSlugs(slugs);
  }, [updateSlugs, locale, scrollPostion]);

  return (
    <DirectionColumn ref={ref}>
      <MDXRemote {...props} components={components} />
    </DirectionColumn>
  );
};
