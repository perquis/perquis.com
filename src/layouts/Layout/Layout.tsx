import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import type { Children, FC } from 'react';

import { Blur, Footer, NotificationsList } from '@components/globals/atoms';
import { UpdateCommentModal } from '@components/globals/modals/UpdateCommentModal';
import { LoadingMessage } from '@components/locals/Loader';
import { Navigation } from '@components/locals/Navigation';
import { useBlurStore, useCommentStore, useLoadingStore, useModalStore } from '@stories';

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
