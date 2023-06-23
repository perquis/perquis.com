import { useState } from 'react';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';

export const useProgressYScroll = () => {
  const [progressYScroll, setProgressYScroll] = useState(0);

  // Getting scroll position while scrolling to bottom
  useScrollPosition(
    ({ currPos }) => {
      const scrollHeight = document.body.offsetHeight - window.innerHeight;
      const progressYScroll = (currPos.y * -100) / scrollHeight;

      setProgressYScroll(Math.floor(progressYScroll));
    },
    [],
    undefined,
    false,
    250
  );

  return { progressYScroll };
};
