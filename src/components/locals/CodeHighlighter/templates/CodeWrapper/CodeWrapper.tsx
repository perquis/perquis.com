import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { Children, type FC, isValidElement, type ReactHTMLElementProps, useState } from 'react';

import { AvailableLanguagesContext } from '@components/locals/CodeHighlighter/contexts/AvailableLanguagesContext/AvailableLanguagesContext';
import { TabsList } from '@components/locals/CodeHighlighter/molecules';
import { LanguageSelectorTabs } from '@components/locals/CodeHighlighter/organisms';

import styles from './CodeWrapper.module.scss';

export const CodeWrapper: FC<ReactHTMLElementProps<HTMLDivElement>> = ({ children }) => {
  const languages = Children.toArray(children).map((child) => isValidElement(child) && child.props.children[0].props['data-language']) as string[];
  const filenames = Children.toArray(children).map((child) =>
    isValidElement(child) && typeof child.props.children[0].props.children === 'string' ? child.props.children[0].props.children : ''
  ) as string[];

  const filteredLanguages = languages.map((lng, i) => (filenames[i].length > 0 ? `${filenames[i]}.${lng}` : lng));

  const [currentLng, setCurrentLng] = useState(filteredLanguages[0]);
  const codeChildren = Children.toArray(children).filter((_, i) => filteredLanguages[i] === currentLng);

  return (
    <AvailableLanguagesContext.Provider value={{ languages: filteredLanguages, currentLng, setCurrentLng }}>
      <div className={clsx(styles.wrapper)} data-code-wrapper>
        <LanguageSelectorTabs>
          <TabsList />
        </LanguageSelectorTabs>
        <div className="code-children">
          <AnimatePresence mode="wait">{codeChildren}</AnimatePresence>
        </div>
      </div>
    </AvailableLanguagesContext.Provider>
  );
};
