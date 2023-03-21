import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { Form } from '@components/Sticker/molecules/Form';

import styles from './Newsletter.module.scss';

export const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <DirectionColumn>
        <div>
          <h3>
            Subscribe <span>to the newsletter</span>
          </h3>
          <Paragraph>Don&apos;t miss out on the news!</Paragraph>
        </div>
        <Form />
      </DirectionColumn>
    </div>
  );
};
