import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { type Children, type FC, useMemo } from 'react';

import { Blur, Footer, NotificationsList } from '@components/globals/atoms';
import { UpdateCommentModal } from '@components/globals/modals/UpdateCommentModal';
import { LoadingMessage } from '@components/locals/Loader';
import { Navigation } from '@components/locals/Navigation';
import { useGlobalStore } from '@stories';

import styles from './Layout.module.scss';

export const Layout: FC<Children> = ({ children }) => {
  const [loadingStatus, open] = useGlobalStore(({ loadingStatus, open }) => [loadingStatus, open]);
  const condition = useMemo(() => open === 'blur' || open === 'newsletter' || open === 'comment', [open]);
  const isCommentModal = useMemo(() => open === 'comment', [open]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/Logo.svg" />
      </Head>
      <NotificationsList />
      <AnimatePresence>{isCommentModal && <UpdateCommentModal />}</AnimatePresence>
      <AnimatePresence>{condition && <Blur />}</AnimatePresence>
      <AnimatePresence>{loadingStatus && <LoadingMessage />}</AnimatePresence>
      <Navigation />
      <div className={styles.layout}>{children}</div>
      <Footer />
    </>
  );
};
