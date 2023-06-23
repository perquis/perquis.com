import { useEffect } from 'react';
import type { BlogPageViewProps } from 'src/pages/blog/[slug]';

import { newsletterModalPattern } from '@data';
import { useObserverStore } from '@stories';
import { hasCookie } from '@utils';

export const useObserver = ({ negativeSlug }: Pick<BlogPageViewProps, 'negativeSlug'>) => {
  const [updateNegativeSlug] = useObserverStore((state) => [state.updateNegativeSlug]);

  useEffect(() => {
    if (hasCookie(newsletterModalPattern)) document.cookie = `newsletter-modal=true;max-age=2592000;`;
  }, []);

  useEffect(() => updateNegativeSlug(negativeSlug ?? ''), [negativeSlug, updateNegativeSlug]);
};
