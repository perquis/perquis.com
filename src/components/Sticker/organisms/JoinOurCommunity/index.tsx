import useTranslation from 'next-translate/useTranslation';
import { BsDiscord } from 'react-icons/bs';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { StickerButton } from '@components/Sticker/atoms/StickerButton';

import styles from './JoinOurCommunity.module.scss';

export const JoinOurCommunity = () => {
  const { t } = useTranslation('global');
  const title = t('join-our-community.title'),
    description = t('join-our-community.description'),
    button = t('join-our-community.button');

  return (
    <DirectionColumn>
      <div className={styles['join-our-community']}>
        <div>
          <h3>{title}</h3>
          <Paragraph style={{ marginTop: 6 }}>{description}</Paragraph>
        </div>
        <StickerButton>
          <BsDiscord size={21} /> {button}
        </StickerButton>
      </div>
    </DirectionColumn>
  );
};
