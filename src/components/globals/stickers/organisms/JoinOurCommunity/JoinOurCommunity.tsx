import { BsDiscord } from 'react-icons/bs';

import { Paragraph } from '@components/globals/atoms';
import { StickerButton } from '@components/globals/stickers/index';
import { DirectionColumn } from '@components/globals/wrappers/DirectionColumn/DirectionColumn';
import { useInternationalizedRouting } from '@hooks';

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
