import { motion } from 'framer-motion';
import type { Children } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

import { PaginateButton } from '@components/locals/CodeHighlighter/atoms';
import { useWindowWidth } from '@react-hook/window-size';
import useKey from '@rooks/use-key';

import styles from './LanguageSelectorTabs.module.scss';

export const LanguageSelectorTabs = ({ children }: Children) => {
  const [currentMotion, setMotionDistance] = useState(0);
  const innerWidth = useWindowWidth();

  const refs = {
    wrapper: useRef<HTMLDivElement>(null),
    container: useRef<HTMLDivElement>(null),
    navigation: useRef<HTMLDivElement>(null),
  };

  const wrapperWidth = refs.wrapper.current?.offsetWidth ?? 0,
    containerWidth = refs.container.current?.scrollWidth ?? 0,
    navigationWidth = refs.navigation.current?.offsetWidth ?? 0;

  const distance = useMemo(() => containerWidth - wrapperWidth, [containerWidth, wrapperWidth]),
    countPageSize = useMemo(() => containerWidth / wrapperWidth, [containerWidth, wrapperWidth]),
    diff = useMemo(() => Math.floor(distance / countPageSize), [distance, countPageSize]);

  const canPaginatePrev = useMemo(() => currentMotion >= 0, [currentMotion]),
    canPaginateNext = useMemo(() => currentMotion * -1 > distance, [currentMotion, distance]),
    shouldShowPaginationButtons = useMemo(() => containerWidth > navigationWidth, [containerWidth, navigationWidth]);

  const handlePagination = (distance: number) => setMotionDistance((prev) => prev + distance),
    handlePrevPage = () => handlePagination(diff),
    handleNextPage = () => handlePagination(-diff);

  useKey('ArrowLeft', handlePrevPage, { eventTypes: ['keyup'], target: refs.container, when: !canPaginatePrev });
  useKey('ArrowRight', handleNextPage, { eventTypes: ['keyup'], target: refs.container, when: !canPaginateNext });

  useEffect(() => setMotionDistance(0), [innerWidth]);

  const moveContainer = {
    left: canPaginateNext ? -distance : canPaginatePrev ? 0 : currentMotion,
  };

  return (
    <div className={styles['programming-languages-list']} data-code-container>
      <div className={styles.navigation} ref={refs.navigation}>
        {shouldShowPaginationButtons && (
          <PaginateButton onClick={handlePrevPage} disabled={canPaginatePrev}>
            <HiArrowLongLeft size={21} />
          </PaginateButton>
        )}
        <div className={styles.container} ref={refs.wrapper}>
          <motion.div className={styles['languages-list']} ref={refs.container} animate={moveContainer}>
            {children}
          </motion.div>
        </div>
        {shouldShowPaginationButtons && (
          <PaginateButton onClick={handleNextPage} disabled={canPaginateNext}>
            <HiArrowLongRight size={21} />
          </PaginateButton>
        )}
      </div>
    </div>
  );
};
