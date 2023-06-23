import { useState } from 'react';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';

export const useScrollPositionY = () => {
  const [scrollPostion, setScrollPosition] = useState(0);
  useScrollPosition(({ currPos }) => setScrollPosition(currPos.y * -1), [], undefined, false, 100);

  return { scrollPostion };
};
