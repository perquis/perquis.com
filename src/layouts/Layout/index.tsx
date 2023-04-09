import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import type { Children, FC } from 'react';
import { useBlurStore } from 'src/stories/blur';

import { Blur } from '@GlobalComponents/atoms/Blur';
import { Footer } from '@GlobalComponents/atoms/Footer';
import { NotificationsList } from '@GlobalComponents/atoms/NotificationsList';

import { UpdateCommentModal } from '@modals/UpdateCommentModal';

import { LoadingMessage } from '@components/Loader/organisms/LoadingMessage';
import { Navigation } from '@components/Navigation';

import { useCommentStore } from '@stories/comment';
import { useLoadingStore } from '@stories/loading';
import { useModalStore } from '@stories/modals';

import styles from './Layout.module.scss';

export const Layout: FC<Children> = ({ children }) => {
  const [isLoadingWhileSendingRequest] = useLoadingStore((state) => [state.isLoadingWhileSendingRequest]);
  const [isOpenUpdateCommentModal] = useCommentStore((state) => [state.isOpenUpdateCommentModal]);
  const [isNewsletterModalOpen] = useModalStore((state) => [state.isNewsletterModalOpen]);
  const [isBlur] = useBlurStore((state) => [state.isBlur]);
  const condition = isBlur || isNewsletterModalOpen || isOpenUpdateCommentModal;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/Logo.svg" />
      </Head>
      <NotificationsList />
      <AnimatePresence>{isOpenUpdateCommentModal && <UpdateCommentModal />}</AnimatePresence>
      <AnimatePresence>{condition && <Blur />}</AnimatePresence>
      <AnimatePresence>{isLoadingWhileSendingRequest && <LoadingMessage />}</AnimatePresence>
      <Navigation />
      <div className={styles.layout}>{children}</div>
      <Footer />
    </>
  );
};
