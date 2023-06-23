import { AnimatePresence } from 'framer-motion';
import type { FC, ReactHTMLElementProps } from 'react';
import { Children, isValidElement, useState } from 'react';

import { ProgrammingLanguagesList } from '@components/RehypePrettyCodeFragment/molecules';

import styles from './CodeWrapper.module.scss';

export const CodeWrapper: FC<ReactHTMLElementProps<HTMLDivElement>> = ({ children }) => {
  const languages = Children.toArray(children).map((child) => isValidElement(child) && child.props.children[0].props['data-language']) as string[];
  const filenames = Children.toArray(children).map((child) =>
    isValidElement(child) && typeof child.props.children[0].props.children === 'string' ? child.props.children[0].props.children : ''
  ) as string[];

  const filteredLanguages = languages.map((lng, i) => (filenames[i].length > 0 ? `${filenames[i]}.${lng}` : lng));

  const [currentLanguage, setCurrentLanguage] = useState(filteredLanguages[0]);
  const rehypePrettyCodeFragmentChildren = Children.toArray(children).filter((_, i) => filteredLanguages[i] === currentLanguage);

  return (
    <div className={`code-wrapper ${styles.wrapper}`}>
      <ProgrammingLanguagesList languages={filteredLanguages} currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
      <div className="code-children">
        <AnimatePresence mode="wait">{rehypePrettyCodeFragmentChildren}</AnimatePresence>
      </div>
    </div>
  );
};
