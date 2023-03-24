import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import { NewsletterModal } from '@modals/NewsletterModal';

import { useModalStore } from '@stories/modals';

import { useProgressYScroll } from '@hooks/useProgressYScroll';

import { hasCookie } from '@utils/hasCookie';

import { newsletterModalPattern } from '@data/regexes';

export const NewsletterObserver = () => {
  const { progressYScroll } = useProgressYScroll();
  const [isNewsletterModalOpen, updateNewsletterModalOpen] = useModalStore((state) => [state.isNewsletterModalOpen, state.updateNewsletterModalOpen]);

  useEffect(() => {
    if (progressYScroll > 50 && !hasCookie(newsletterModalPattern) && window.innerWidth > 1024) updateNewsletterModalOpen(true);
  }, [progressYScroll, updateNewsletterModalOpen]);

  return <AnimatePresence>{isNewsletterModalOpen && <NewsletterModal />}</AnimatePresence>;
};
