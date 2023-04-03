import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import type { Children, FC } from 'react';
import { useBlurStore } from 'src/stories/blur';

import { Blur } from '@GlobalComponents/atoms/Blur';
import { Footer } from '@GlobalComponents/atoms/Footer';
import { NotificationsList } from '@GlobalComponents/atoms/NotificationsList';

import { LoadingMessage } from '@components/Loader/organisms/LoadingMessage';
import { Navigation } from '@components/Navigation';

import { useLoadingStore } from '@stories/loading';
import { useModalStore } from '@stories/modals';

import styles from './Layout.module.scss';

export const Layout: FC<Children> = ({ children }) => {
  const [isLoadingWhileSendingRequest] = useLoadingStore((state) => [state.isLoadingWhileSendingRequest]);
  const [isNewsletterModalOpen] = useModalStore((state) => [state.isNewsletterModalOpen]);
  const [isBlur] = useBlurStore((state) => [state.isBlur]);
  const condition = isBlur || isNewsletterModalOpen;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/Logo.svg" />
      </Head>
      <AnimatePresence>{isLoadingWhileSendingRequest && <LoadingMessage />}</AnimatePresence>
      <AnimatePresence>{condition && <Blur />}</AnimatePresence>
      <NotificationsList />
      <Navigation />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};
