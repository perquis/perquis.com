import { motion } from 'framer-motion';
import type { Dispatch, FC, SetStateAction } from 'react';

import { PickProgrammingLanguage } from '@components/RehypePrettyCodeFragment/atoms/PickProgrammingLanguage';

import styles from './ProgrammingLanguagesList.module.scss';

interface IProgrammingLanguagesList {
  languages: string[];
  currentLanguage: string;
  setCurrentLanguage: Dispatch<SetStateAction<string>>;
}

export const ProgrammingLanguagesList: FC<IProgrammingLanguagesList> = ({ languages, currentLanguage, setCurrentLanguage }) => {
  return (
    <div className={styles['programming-languages-list']}>
      {languages.map((lng) => (
        <PickProgrammingLanguage key={lng} onClick={() => setCurrentLanguage(lng)} isActive={currentLanguage === lng}>
          <span className={styles.span}>{lng}</span>
          {lng === currentLanguage ? <motion.div className={styles.tab} layoutId="tab" /> : null}
        </PickProgrammingLanguage>
      ))}
    </div>
  );
};
