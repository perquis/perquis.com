import useKey from '@rooks/use-key';
import useWindowSize from '@rooks/use-window-size';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { Dispatch, FC, SetStateAction } from 'react';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

import PrevButton from '@components/RehypePrettyCodeFragment/atoms/PaginateButton';
import NextButton from '@components/RehypePrettyCodeFragment/atoms/PaginateButton';
import { PickProgrammingLanguage } from '@components/RehypePrettyCodeFragment/atoms/PickProgrammingLanguage';

import { matchingTechnologyIcon } from '@utils/matchingTechnologyIcon';

import styles from './ProgrammingLanguagesList.module.scss';

interface IProgrammingLanguagesList {
  languages: string[];
  currentLanguage: string;
  setCurrentLanguage: Dispatch<SetStateAction<string>>;
}

export const ProgrammingLanguagesList: FC<IProgrammingLanguagesList> = ({ languages, currentLanguage, setCurrentLanguage }) => {
  const tab = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const navigation = useRef<HTMLDivElement>(null);

  const navigationInnerWidth = navigation.current?.offsetWidth ?? 0;
  const wrapperInnerWidth = wrapper.current?.offsetWidth ?? 0;
  const containerInnerWidth = container.current?.scrollWidth ?? 0;

  const distance = containerInnerWidth - wrapperInnerWidth;

  const [left, setMotionDistance] = useState(0);
  const paginate = (distance: number) => setMotionDistance((prev) => prev + distance);

  const countPageSize = containerInnerWidth / wrapperInnerWidth;
  const diff = Math.floor(distance / countPageSize);

  const prevBtnCondition = left >= 0;
  const nextBtnCondition = left * -1 > distance;

  const isArrowButtos = containerInnerWidth > navigationInnerWidth;

  const { innerWidth } = useWindowSize();
  useKey('ArrowLeft', () => paginate(diff), { eventTypes: ['keyup'], target: container, when: !prevBtnCondition });
  useKey('ArrowRight', () => paginate(-diff), { eventTypes: ['keyup'], target: container, when: !nextBtnCondition });

  useEffect(() => setMotionDistance(0), [innerWidth]);

  return (
    <div className={styles['programming-languages-list']}>
      <div className={styles.navigation} ref={navigation}>
        {isArrowButtos && (
          <PrevButton onClick={() => (left >= 0 ? setMotionDistance(0) : paginate(diff))} disabled={left === 0}>
            <HiArrowLongLeft size={21} />
          </PrevButton>
        )}
        <div className={styles.container} ref={wrapper}>
          <motion.div className={styles['languages-list']} ref={container} animate={{ left: left * -1 > distance ? -distance : left >= 0 ? 0 : left }}>
            {languages.map((lng) => (
              <PickProgrammingLanguage key={lng} onClick={() => setCurrentLanguage(lng)} isActive={currentLanguage === lng} data-lang={lng}>
                <span className={styles.span}>
                  <Image src={`/assets/languages/${matchingTechnologyIcon(lng)}.svg`} alt={lng} width={20} height={20} />
                  {lng}
                </span>
                {lng === currentLanguage && <motion.div className={styles.tab} layoutId="tab" ref={tab} />}
              </PickProgrammingLanguage>
            ))}
          </motion.div>
        </div>
        {isArrowButtos && (
          <NextButton onClick={() => paginate(-diff)} disabled={left * -1 > distance || left * -1 === distance}>
            <HiArrowLongRight size={21} />
          </NextButton>
        )}
      </div>
    </div>
  );
};
