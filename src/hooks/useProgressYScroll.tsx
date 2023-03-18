import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';

export const useProgressYScroll = () => {
  const [progressYScroll, setProgressYScroll] = useState(0);

  // Getting scroll position while scrolling to bottom
  useScrollPosition(({ currPos }) => {
    const scrollHeight = document.body.offsetHeight - window.innerHeight;
    const progressYScroll = (currPos.y * -100) / scrollHeight;

    setProgressYScroll(Math.floor(progressYScroll));
  });

  return { progressYScroll };
};
