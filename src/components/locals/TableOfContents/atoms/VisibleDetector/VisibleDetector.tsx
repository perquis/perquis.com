import { Children, type ComponentProps, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useScroll } from '@hooks';
import { useTOCStore } from '@stories';

export const VisibleDetector = ({ children }: ComponentProps<'div'>) => {
  // @ts-ignore
  const [id] = Children.toArray(children).map(({ props }) => props.id);
  const [items, changeStatusItem] = useTOCStore(({ items, changeStatusItem }) => [items, changeStatusItem]);
  const { ref, inView } = useInView();

  const [isDistanceExceeded, setIsDistanceExceeded] = useState(false);

  const div = useRef<HTMLDivElement>(null);
  const { scrollPosition } = useScroll();

  useEffect(() => {
    const distanceToWindowTop = div.current?.getBoundingClientRect().top ?? 0;

    if (distanceToWindowTop < 48) setIsDistanceExceeded(true);
    else return;
  }, [div, scrollPosition]);

  useEffect(() => {
    const [item] = items.filter(({ href }) => href === `#${id}`);
    if (!item) return;

    if (inView && item.status === 'hide') changeStatusItem(id, 'visible');
    if (!inView && isDistanceExceeded && item.status === 'visible') changeStatusItem(id, 'read');
  }, [id, items, inView, isDistanceExceeded, changeStatusItem]);

  return (
    <div ref={div}>
      <div ref={ref}>{children}</div>
    </div>
  );
};
