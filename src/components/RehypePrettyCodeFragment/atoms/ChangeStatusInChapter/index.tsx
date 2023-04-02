import { useEffect, useRef } from 'react';
import type { FC, ReactHTMLElementProps } from 'react';
import { useInView } from 'react-intersection-observer';

import { useTOCStore } from '@stories/toc';

import { useProgressYScroll } from '@hooks/useProgressYScroll';

export const ChangeStatusInChapter: FC<ReactHTMLElementProps<HTMLSpanElement>> = ({ children, ...props }) => {
  const [isTocOpen, updateSlugsByHref] = useTOCStore((state) => [state.isTocOpen, state.updateSlugsByHref]);
  const { progressYScroll } = useProgressYScroll();
  const spanRef = useRef<HTMLSpanElement>(null);
  const href = spanRef.current?.textContent;
  const { ref, inView } = useInView();
  const isScrolledToThisHeading = progressYScroll > Number(spanRef.current?.getBoundingClientRect().top);

  useEffect(() => {
    if (!isTocOpen && inView) updateSlugsByHref(href ?? '', 'visible');
    if (!isTocOpen && !inView && isScrolledToThisHeading) updateSlugsByHref(href ?? '', 'read');
  }, [isTocOpen, inView, updateSlugsByHref, href, isScrolledToThisHeading]);

  useEffect(() => ref(spanRef.current), [spanRef, ref]);

  return (
    <span ref={spanRef} {...props}>
      {children}
    </span>
  );
};
