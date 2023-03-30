import { useEffect } from 'react';
import type { BlogPageProps } from 'src/pages/blog/[slug]';

import { useObserverStore } from '@stories/observer';

import { hasCookie } from '@utils/hasCookie';

import { newsletterModalPattern } from '@data/regexes';

export const useObserver = ({ negativeSlug }: Pick<BlogPageProps, 'negativeSlug'>) => {
  const [updateNegativeSlug] = useObserverStore((state) => [state.updateNegativeSlug]);

  useEffect(() => {
    if (hasCookie(newsletterModalPattern)) document.cookie = `newsletter-modal=true;max-age=2592000;`;
  }, []);

  useEffect(() => updateNegativeSlug(negativeSlug ?? ''), [negativeSlug, updateNegativeSlug]);
};
