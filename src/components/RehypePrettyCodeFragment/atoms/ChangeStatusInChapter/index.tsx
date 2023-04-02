import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useEffect, useRef, useState } from 'react';
import type { FC, ReactHTMLElementProps } from 'react';
import { useInView } from 'react-intersection-observer';

import { useTOCStore } from '@stories/toc';

export const ChangeStatusInChapter: FC<ReactHTMLElementProps<HTMLSpanElement>> = ({ children, ...props }) => {
  const [isTocOpen, updateSlugsByHref, slugs] = useTOCStore((state) => [state.isTocOpen, state.updateSlugsByHref, state.slugs]);

  const spanRef = useRef<HTMLSpanElement>(null);
  const href = spanRef.current?.textContent;
  const { ref, inView } = useInView();

  const [scrollPostion, setScrollPosition] = useState(0);
  useScrollPosition(({ currPos }) => setScrollPosition(currPos.y * -1));

  const findIndex = slugs.findIndex(({ href: hash }) => hash === `#${href?.toLowerCase().split(' ').join('-')}`);

  const position = slugs[findIndex]?.position;

  const getNextChapterPositionByY = slugs[findIndex]?.nextChapterPosition ?? position + 400;
  const isRead = scrollPostion > getNextChapterPositionByY;

  const isScrolledToThisHeading = scrollPostion > position && scrollPostion < getNextChapterPositionByY;

  useEffect(() => {
    if (!isTocOpen && inView && isScrolledToThisHeading) updateSlugsByHref(String(href), 'visible');
    if (!isTocOpen && !inView && isRead) updateSlugsByHref(String(href), 'read');
  }, [inView, isRead, isTocOpen, isScrolledToThisHeading, updateSlugsByHref, href]);

  useEffect(() => ref(spanRef.current), [spanRef, ref]);

  return (
    <span ref={spanRef} {...props} className="link">
      {children}
    </span>
  );
};
