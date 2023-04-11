import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';

export const useScrollPositionY = () => {
  const [scrollPostion, setScrollPosition] = useState(0);
  useScrollPosition(({ currPos }) => setScrollPosition(currPos.y * -1), [], undefined, false, 250);

  return { scrollPostion };
};
