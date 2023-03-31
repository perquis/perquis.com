import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import type { Children, FC } from 'react';
import { useBlurStore } from 'src/stories/blur';

import { Blur } from '@GlobalComponents/atoms/Blur';
import { Footer } from '@GlobalComponents/atoms/Footer';

import { Navigation } from '@components/Navigation';
import { Notification } from '@components/Notification/organisms/Notification';

import { useModalStore } from '@stories/modals';
import { useNotificationStore } from '@stories/notifications';

import styles from './Layout.module.scss';

export const Layout: FC<Children> = ({ children }) => {
  const [isBlur] = useBlurStore((state) => [state.isBlur]);
  const [isNewsletterModalOpen] = useModalStore((state) => [state.isNewsletterModalOpen]);
  const condition = isBlur || isNewsletterModalOpen;
  const [notification] = useNotificationStore((state) => [state.notification]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/Logo.svg" />
      </Head>
      <AnimatePresence>{condition && <Blur />}</AnimatePresence>
      <AnimatePresence>{typeof notification !== 'undefined' && <Notification />}</AnimatePresence>
      <Navigation />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};
