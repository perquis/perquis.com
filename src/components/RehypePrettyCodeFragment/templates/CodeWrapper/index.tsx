import { AnimatePresence } from 'framer-motion';
import { Children, isValidElement, useState } from 'react';
import type { FC, ReactHTMLElementProps } from 'react';

import { ProgrammingLanguagesList } from '@components/RehypePrettyCodeFragment/molecules/ProgrammingLanguagesList';

import styles from './CodeWrapper.module.scss';

export const CodeWrapper: FC<ReactHTMLElementProps<HTMLDivElement>> = ({ children }) => {
  const languages = Children.toArray(children).map((child) => isValidElement(child) && child.props.children[0].props['data-language']) as string[];

  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const rehypePrettyCodeFragmentChildren = Children.toArray(children).filter(
    (child) => isValidElement(child) && child.props.children[0].props['data-language'] === currentLanguage
  );

  return (
    <div className={`code-wrapper ${styles.wrapper}`}>
      <ProgrammingLanguagesList languages={languages} currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
      <div className="code-children">
        <AnimatePresence mode="wait">{rehypePrettyCodeFragmentChildren}</AnimatePresence>
      </div>
    </div>
  );
};
