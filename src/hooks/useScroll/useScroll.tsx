import { useState } from 'react';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [progressYScroll, setProgressYScroll] = useState(0);

  useScrollPosition(
    ({ currPos }) => {
      const scrollHeight = document.body.offsetHeight - window.innerHeight;
      const progressYScroll = (currPos.y * -100) / scrollHeight;

      setScrollPosition(currPos.y * -1);
      setProgressYScroll(Math.floor(progressYScroll));
    },
    [],
    undefined,
    false,
    250
  );

  return { scrollPosition, progressYScroll };
};
