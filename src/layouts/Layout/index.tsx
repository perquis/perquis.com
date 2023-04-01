import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import type { Children, FC } from 'react';
import { useBlurStore } from 'src/stories/blur';

import { Blur } from '@GlobalComponents/atoms/Blur';
import { Footer } from '@GlobalComponents/atoms/Footer';

import { LoadingMessage } from '@components/Loader/organisms/LoadingMessage';
import { Navigation } from '@components/Navigation';
import { Notification } from '@components/Notification/organisms/Notification';
import { TableOfContents } from '@components/TableOfContents';

import { useLoadingStore } from '@stories/loading';
import { useModalStore } from '@stories/modals';
import { useNotificationStore } from '@stories/notifications';
import { useTOCStore } from '@stories/toc';

import styles from './Layout.module.scss';

export const Layout: FC<Children> = ({ children }) => {
  const [isNewsletterModalOpen] = useModalStore((state) => [state.isNewsletterModalOpen]);
  const [isOpen] = useNotificationStore((state) => [state.isOpen]);
  const [isVisible] = useTOCStore((state) => [state.isVisible]);
  const [toggleToc] = useTOCStore((state) => [state.toggleToc]);
  const [isBlur] = useBlurStore((state) => [state.isBlur]);
  const [isLoadingWhileSendingRequest] = useLoadingStore((state) => [state.isLoadingWhileSendingRequest]);
  const condition = isBlur || isNewsletterModalOpen || toggleToc;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/Logo.svg" />
      </Head>
      <AnimatePresence>{isLoadingWhileSendingRequest && <LoadingMessage />}</AnimatePresence>
      <AnimatePresence>{condition && <Blur />}</AnimatePresence>
      <AnimatePresence>{isOpen && <Notification />}</AnimatePresence>
      <AnimatePresence>{isVisible && <TableOfContents />}</AnimatePresence>
      <Navigation />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};
