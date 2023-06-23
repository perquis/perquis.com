import { Paragraph } from '@components/globals/atoms';
import { useInternationalizedRouting } from '@hooks';

import styles from './TitleAndSubtitle.module.scss';

export const TitleAndSubtitle = () => {
  const { newsletterTitle, newsletterDescription } = useInternationalizedRouting('global');

  return (
    <div className={styles.ctn}>
      <h1 dangerouslySetInnerHTML={{ __html: newsletterTitle ?? '' }} />
      <Paragraph>{newsletterDescription}</Paragraph>
    </div>
  );
};
