import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { Form } from '@stickers/molecules/Form';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

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
        <Form />
      </DirectionColumn>
    </div>
  );
};
