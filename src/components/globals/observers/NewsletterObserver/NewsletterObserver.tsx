import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import { NewsletterModal } from '@components/globals/modals/NewsletterModal';
import { newsletterModalPattern } from '@data';
import { useProgressYScroll } from '@hooks';
import { useGlobalStore } from '@stories';
import { hasCookie } from '@utils';

export const NewsletterObserver = () => {
  const { progressYScroll } = useProgressYScroll();
  const [open, updateOpen] = useGlobalStore(({ open, updateOpen }) => [open, updateOpen]);

  useEffect(() => {
    if (progressYScroll > 50 && !hasCookie(newsletterModalPattern) && window.innerWidth > 1024) updateOpen('newsletter');
  }, [progressYScroll, updateOpen]);

  return <AnimatePresence>{open === 'newsletter' && <NewsletterModal />}</AnimatePresence>;
};
