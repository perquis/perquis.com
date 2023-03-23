import { WavyLines } from '@GlobalComponents/atoms/WavyLines';
import { StickersList } from '@GlobalComponents/wrappers/StickersList';

import { Newsletter } from '@stickers/organisms/Newsletter';

export const Stickers = () => {
  return (
    <StickersList>
      <WavyLines />
      <Newsletter />
      <WavyLines />
    </StickersList>
  );
};
