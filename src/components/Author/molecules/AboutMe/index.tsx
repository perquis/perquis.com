import { useRouter } from 'next/router';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './AboutMe.module.scss';

export const AboutMe = () => {
  const { aboutMeTitle } = useInternationalizedRouting('home');
  const { locale } = useRouter();

  return (
    <div className={styles.wrapper}>
      <b>{aboutMeTitle}</b>
      {locale === 'en' ? (
        <Paragraph>
          Damian is a young man of 23 years old <b>who loves learning new things</b>. He is very curious and passionate about <b>discovering new frameworks and libraries</b>{' '}
          created by different programming languages. Certainly, his interests in the field of computer science keep him{' '}
          <b>up to date with new technologies and solutions in this field</b>.
        </Paragraph>
      ) : (
        <Paragraph>
          Damian, to młody człowiek w wieku 23 lat, który <b>kocha uczyć się nowych rzeczy</b>. Jest bardzo ciekawy i pasjonuje go <b>poznawanie nowych frameworków i bibliotek</b>
          stworzonych przez różne języki programowania. Z pewnością jego zainteresowania w dziedzinie informatyki sprawiają, że{' '}
          <b>jest na bieżąco z nowymi technologiami i rozwiązaniami w tej dziedzinie</b>.
        </Paragraph>
      )}
    </div>
  );
};
