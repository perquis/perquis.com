import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { type FC, type MutableRefObject, useMemo, useRef } from 'react';

import { vars } from '@animations';
import { languages } from '@data/languages/languages';
import { useHasMounted, useRedirectToAlternatePage } from '@hooks';
import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';

import styles from './LocalesList.module.scss';

interface ILocaleListProps {
  isActive: boolean;
  toggleLocales: () => void;
}

export const LocalesList: FC<ILocaleListProps> = ({ isActive, toggleLocales }) => {
  const { locale } = useRouter();
  const { hasMounted } = useHasMounted();
  const ref = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;

  const when = useMemo(() => isActive, [isActive]);

  const { redirectToAlternatePage } = useRedirectToAlternatePage();

  useKey('Escape', toggleLocales, { when });
  useOutsideClick(ref, toggleLocales, when && !!hasMounted);

  const onClick = () => {
    if (isActive) toggleLocales();
    redirectToAlternatePage();
  };

  return (
    <motion.div className={styles.visible} variants={vars} initial="initial" animate="animate" exit="exit" ref={ref}>
      {languages
        .filter((lng) => lng !== locale)
        .map((lng) => (
          <button key={lng} onClick={onClick}>
            {lng}
          </button>
        ))}
    </motion.div>
  );
};
