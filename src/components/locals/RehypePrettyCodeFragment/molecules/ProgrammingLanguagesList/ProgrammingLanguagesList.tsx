import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Dispatch, FC, SetStateAction } from 'react';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

import { PaginateButton, PickProgrammingLanguage } from '@components/locals/RehypePrettyCodeFragment/atoms';
import { useProgrammingLanguagesList } from '@hooks';
import { matchingTechnologyIcon } from '@utils';

import styles from './ProgrammingLanguagesList.module.scss';

interface IProgrammingLanguagesList {
  languages: string[];
  currentLanguage: string;
  setCurrentLanguage: Dispatch<SetStateAction<string>>;
}

export const ProgrammingLanguagesList: FC<IProgrammingLanguagesList> = ({ languages, currentLanguage, setCurrentLanguage }) => {
  const {
    calculations: { left, distance },
    refs: { tab, wrapper, container, navigation },
    handlers: { handlePrevButton, handleNextButton },
    condition: { isArrowButtos, isDisabledPrevButton, isDisabledNextButton },
  } = useProgrammingLanguagesList();

  const animate = { left: left * -1 > distance ? -distance : left >= 0 ? 0 : left };

  return (
    <div className={styles['programming-languages-list']}>
      <div className={clsx(styles.navigation, 'code-wrapper-navigation')} ref={navigation}>
        {isArrowButtos && (
          <PaginateButton onClick={handlePrevButton} disabled={isDisabledPrevButton}>
            <HiArrowLongLeft size={21} />
          </PaginateButton>
        )}
        <div className={styles.container} ref={wrapper}>
          <motion.div className={styles['languages-list']} ref={container} animate={animate}>
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
          <PaginateButton onClick={handleNextButton} disabled={isDisabledNextButton}>
            <HiArrowLongRight size={21} />
          </PaginateButton>
        )}
      </div>
    </div>
  );
};
