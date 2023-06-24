import { Paragraph, SmallTitle } from '@components/globals/atoms';
import { useInternationalizedRouting } from '@hooks';

import styles from './Heading.module.scss';

export const Heading = () => {
  const { postsListTitle, postsListDescription } = useInternationalizedRouting('home');

  return (
    <div className={styles.heading}>
      <SmallTitle>{postsListTitle}</SmallTitle>
      <Paragraph>{postsListDescription}</Paragraph>
    </div>
  );
};
