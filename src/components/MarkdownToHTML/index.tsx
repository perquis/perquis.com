/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MDXRemoteProps } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import type { Item } from '@stories/toc';
import { useTOCStore } from '@stories/toc';

import { useScrollPositionY } from '@hooks/useScrollPositionY';

import { getScrollToTopValue } from '@utils/getScrollToTopValue';

import { components } from './components/components';

export const MarkdownToHTML = (props: MDXRemoteProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [updateItems, updateTocHeight] = useTOCStore((state) => [state.updateItems, state.updateTocHeight]);
  const { scrollPostion } = useScrollPositionY();
  const { locale } = useRouter();

  useEffect(() => updateTocHeight(Number(ref.current?.querySelector('.toc')?.clientHeight) + 120), [updateTocHeight]);

  useEffect(() => {
    const toc = ref.current?.querySelector('.toc');
    const items: Item[] = [];

    toc?.querySelectorAll<HTMLAnchorElement>('a').forEach((link, i) => {
      const { hash, textContent } = link;
      const heading = document?.querySelectorAll<HTMLAnchorElement>('.link')[i];
      const chapter = heading?.parentElement?.getAttribute('data-chapter-number') ?? '';

      const position = getScrollToTopValue(i);
      const calcPosition = getScrollToTopValue(i + 1);
      const nextChapterPosition =
        (!isNaN(calcPosition) ? calcPosition : typeof document !== 'undefined' ? document.getElementById('resources')?.getBoundingClientRect().top : 0) ?? 0;

      items.push({ chapter: chapter.length === 0 ? `${i}` : chapter, href: decodeURI(hash), textContent: textContent ?? '', position, nextChapterPosition });
    });

    updateItems(items);
  }, [updateItems, locale, scrollPostion]);

  return (
    <DirectionColumn ref={ref}>
      <MDXRemote {...props} components={components} />
    </DirectionColumn>
  );
};
