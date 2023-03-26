import type { MDXRemoteProps } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { useTOCStore } from '@stories/toc';

import { components } from './components/components';

export const MarkdownToHTML = (props: MDXRemoteProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [updateSlugs, updateTocOpen] = useTOCStore((state) => [state.updateSlugs, state.updateTocOpen]);
  const [reference, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    const toc = ref.current?.querySelector('.toc');
    const slugs: string = toc?.innerHTML ?? '';

    updateSlugs(slugs);
    reference(ref.current?.querySelector('.toc'));
  }, [updateSlugs, reference]);

  useEffect(() => updateTocOpen(inView), [inView, updateTocOpen]);

  return (
    <DirectionColumn ref={ref}>
      <MDXRemote {...props} components={components} />
    </DirectionColumn>
  );
};
