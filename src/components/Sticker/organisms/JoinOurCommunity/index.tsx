import { BsDiscord } from 'react-icons/bs';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';

import { StickerButton } from '@components/Sticker/atoms/StickerButton';

import styles from './JoinOurCommunity.module.scss';

export const JoinOurCommunity = () => {
  return (
    <div className={styles['join-our-community']}>
      <div>
        <h3>Join our community!</h3>
        <Paragraph>We can build great society together.</Paragraph>
      </div>
      <StickerButton>
        <BsDiscord size={21} /> Join us!
      </StickerButton>
    </div>
  );
};
