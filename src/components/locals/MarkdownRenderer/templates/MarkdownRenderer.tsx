/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import type { Children } from 'react';
import { useEffect, useRef } from 'react';

import { DirectionColumn } from '@components/globals/wrappers/DirectionColumn/DirectionColumn';
import { useScroll } from '@hooks';
import type { Item } from '@stories';
import { useTOCStore } from '@stories';
import { getScrollToTopValue } from '@utils';

export const MarkdownRenderer = ({ children }: Children) => {
  const ref = useRef<HTMLDivElement>(null);
  const [updateItems, updateTocHeight] = useTOCStore(({ updateItems, updateTocHeight }) => [updateItems, updateTocHeight]);
  const { scrollPosition } = useScroll();
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
  }, [updateItems, locale, scrollPosition]);

  return <DirectionColumn ref={ref}>{children}</DirectionColumn>;
};
