import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import type { Children, FC } from 'react';
import { useBlurStore } from 'src/stories/blur';

import { Blur } from '@GlobalComponents/atoms/Blur';
import { Footer } from '@GlobalComponents/atoms/Footer';

import { Navigation } from '@components/Navigation';
import { TableOfContents } from '@components/TableOfContents';

import { useModalStore } from '@stories/modals';
import { useTOCStore } from '@stories/toc';

import styles from './Layout.module.scss';

export const Layout: FC<Children> = ({ children }) => {
  const [isBlur] = useBlurStore((state) => [state.isBlur]);
  const [isNewsletterModalOpen] = useModalStore((state) => [state.isNewsletterModalOpen]);
  const condition = isBlur || isNewsletterModalOpen;

  const [isTocOpen] = useTOCStore((state) => [state.isTocOpen]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/Logo.svg" />
      </Head>
      <AnimatePresence>{condition && <Blur />}</AnimatePresence>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.column}></div>
        <div className={styles['center-column']}>{children}</div>
        <div className={styles.column}>
          <AnimatePresence>{!isTocOpen && <TableOfContents />}</AnimatePresence>
        </div>
      </div>
      <Footer />
    </>
  );
};
