import { BsDiscord } from 'react-icons/bs';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { StickerButton } from '@stickers/index';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './JoinOurCommunity.module.scss';

export const JoinOurCommunity = () => {
  const { joinOurCommunityTitle, joinOurCommunityButton, joinOurCommunityDescription } = useInternationalizedRouting('global');

  return (
    <DirectionColumn>
      <div className={styles['join-our-community']}>
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: joinOurCommunityTitle ?? '' }} />
          <Paragraph style={{ marginTop: 6 }}>{joinOurCommunityDescription}</Paragraph>
        </div>
        <StickerButton>
          <BsDiscord size={21} /> {joinOurCommunityButton}
        </StickerButton>
      </div>
    </DirectionColumn>
  );
};
