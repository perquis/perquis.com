import { useState } from 'react';

import { PickProgrammingLanguage } from '@components/RehypePrettyCodeFragment/atoms/PickProgrammingLanguage';

import styles from './ProgrammingLanguagesList.module.scss';

const languages = ['html', 'scss', 'ts'];

export const ProgrammingLanguagesList = () => {
  const [language, setLanguage] = useState('html');

  return (
    <div className={styles['programming-languages-list']}>
      {languages.map((lng) => (
        <PickProgrammingLanguage key={lng} onClick={() => setLanguage(lng)} isActive={language === lng}>
          {lng}
        </PickProgrammingLanguage>
      ))}
    </div>
  );
};
