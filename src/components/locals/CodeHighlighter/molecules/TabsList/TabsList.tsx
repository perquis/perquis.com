import { motion } from 'framer-motion';
import Image from 'next/image';

import { LanguageSelector } from '@components/locals/CodeHighlighter/atoms';
import { useAvailableLanguages } from '@components/locals/CodeHighlighter/contexts/AvailableLanguagesContext/AvailableLanguagesContext';
import { matchingTechnologyIcon } from '@utils';

import styles from './TabsList.module.scss';

export const TabsList = () => {
  const { languages, currentLng, setCurrentLng } = useAvailableLanguages();

  return (
    <>
      {languages.map((lng) => (
        <LanguageSelector key={lng} onClick={() => setCurrentLng(lng)} isActive={currentLng === lng} data-lang={lng}>
          <span className={styles.span}>
            <Image src={`/assets/languages/${matchingTechnologyIcon(lng)}.svg`} alt={lng} width={20} height={20} />
            {lng}
          </span>
          {lng === currentLng && <motion.div className={styles.tab} layoutId="tab" />}
        </LanguageSelector>
      ))}
    </>
  );
};
