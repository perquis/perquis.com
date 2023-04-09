import { motion } from 'framer-motion';
import Image from 'next/image';
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
        <PickProgrammingLanguage key={lng} onClick={() => setCurrentLanguage(lng)} isActive={currentLanguage === lng} data-lang={lng}>
          <span className={styles.span}>
            <Image src={`/assets/languages/${lng}.png`} alt={lng} width={20} height={20} />
            {lng}
          </span>
          {lng === currentLanguage ? <motion.div className={styles.tab} layoutId="tab" /> : null}
        </PickProgrammingLanguage>
      ))}
    </div>
  );
};
