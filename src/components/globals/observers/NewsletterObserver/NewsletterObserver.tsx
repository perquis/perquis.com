import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import { NewsletterModal } from '@components/globals/modals/NewsletterModal';
import { newsletterModalPattern } from '@data';
import { useProgressYScroll } from '@hooks';
import { useModalStore } from '@stories';
import { hasCookie } from '@utils';

export const NewsletterObserver = () => {
  const { progressYScroll } = useProgressYScroll();
  const [isNewsletterModalOpen, updateNewsletterModalOpen] = useModalStore((state) => [state.isNewsletterModalOpen, state.updateNewsletterModalOpen]);

  useEffect(() => {
    if (progressYScroll > 50 && !hasCookie(newsletterModalPattern) && window.innerWidth > 1024) updateNewsletterModalOpen(true);
  }, [progressYScroll, updateNewsletterModalOpen]);

  return <AnimatePresence>{isNewsletterModalOpen && <NewsletterModal />}</AnimatePresence>;
};
