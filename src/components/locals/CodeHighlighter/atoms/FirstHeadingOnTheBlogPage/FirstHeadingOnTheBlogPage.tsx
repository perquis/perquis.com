import type { FC, ReactHTMLElementProps } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useTOCStore } from '@stories';

export const FirstHeadingOnTheBlogPage: FC<ReactHTMLElementProps<HTMLHeadingElement>> = ({ className = '', ...props }) => {
  const { ref, inView } = useInView();
  const [isTocOpen, updateIsVisible] = useTOCStore((state) => [state.isTocOpen, state.updateIsVisible]);
  const isNotVisibleTocAndIsVisibleHeading = inView && !isTocOpen;
  const isNotVisibleTocAndHeading = !inView && !isTocOpen;

  useEffect(
    () => updateIsVisible(isNotVisibleTocAndIsVisibleHeading || isNotVisibleTocAndHeading),
    [updateIsVisible, isNotVisibleTocAndHeading, isNotVisibleTocAndIsVisibleHeading]
  );

  return <h1 className={className} {...props} ref={ref} />;
};
