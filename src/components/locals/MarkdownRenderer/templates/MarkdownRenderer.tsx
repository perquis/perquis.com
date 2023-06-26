/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import type { Children } from 'react';
import { useEffect, useRef } from 'react';

import { DirectionColumn } from '@components/globals/wrappers/DirectionColumn/DirectionColumn';
import { type Item, useTOCStore } from '@stories';

export const MarkdownRenderer = ({ children }: Children) => {
  const ref = useRef<HTMLDivElement>(null);
  const [updateItems] = useTOCStore(({ updateItems }) => [updateItems]);
  const { locale } = useRouter();

  useEffect(() => {
    const toc = ref.current?.querySelector('.toc');
    const items: Item[] = [];

    toc?.querySelectorAll<HTMLAnchorElement>('a').forEach((anchor) => {
      const { hash: href, textContent } = anchor;
      const link = { href: decodeURI(href), textContent: String(textContent), status: 'hide' } as const;

      items.push(link);
      updateItems(items);
    });
  }, [updateItems, locale]);

  return <DirectionColumn ref={ref}>{children}</DirectionColumn>;
};
