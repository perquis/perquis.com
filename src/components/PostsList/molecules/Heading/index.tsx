import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { SmallTitle } from '@GlobalComponents/atoms/SmallTitle';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

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
