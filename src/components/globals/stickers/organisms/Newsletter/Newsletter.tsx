import { Paragraph } from '@components/globals/atoms';
import { NewsletterForm } from '@components/globals/stickers/molecules/NewsletterForm/NewsletterForm';
import { DirectionColumn } from '@components/globals/wrappers/DirectionColumn/DirectionColumn';
import { useInternationalizedRouting } from '@hooks';

import styles from './Newsletter.module.scss';

export const Newsletter = () => {
  const { newsletterTitle, newsletterDescription } = useInternationalizedRouting('global');

  return (
    <div className={styles.newsletter}>
      <DirectionColumn>
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: newsletterTitle ?? '' }} />
          <Paragraph style={{ marginTop: 6 }}>{newsletterDescription}</Paragraph>
        </div>
        <NewsletterForm />
      </DirectionColumn>
    </div>
  );
};
