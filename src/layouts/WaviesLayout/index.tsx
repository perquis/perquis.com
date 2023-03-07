import type { Children, FC } from 'react';

import { Wavies } from '@icons/Wavies';

export const WaviesLayout: FC<Children> = ({ children }) => {
  return (
    <>
      <Wavies />
      {children}
      <Wavies direction="bottom" />
    </>
  );
};
