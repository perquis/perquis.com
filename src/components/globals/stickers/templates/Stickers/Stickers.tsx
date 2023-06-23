import { WavyLines } from '@components/globals/atoms';
import { JoinOurCommunity } from '@components/globals/stickers/organisms/JoinOurCommunity/JoinOurCommunity';
import { Newsletter } from '@components/globals/stickers/organisms/Newsletter/Newsletter';
import { StickersList } from '@components/globals/wrappers/StickersList/StickersList';

export const Stickers = () => {
  return (
    <StickersList>
      <WavyLines />
      <Newsletter />
      <JoinOurCommunity />
      <WavyLines />
    </StickersList>
  );
};
