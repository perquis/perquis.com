import useTranslation from 'next-translate/useTranslation';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { Form } from '@components/Sticker/molecules/Form';

import styles from './Newsletter.module.scss';

export const Newsletter = () => {
  const { t } = useTranslation('global');
  const title = t('newsletter.title'),
    description = t('newsletter.description');

  return (
    <div className={styles.newsletter}>
      <DirectionColumn>
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: title }} />
          <Paragraph>{description}</Paragraph>
        </div>
        <Form />
      </DirectionColumn>
    </div>
  );
};
