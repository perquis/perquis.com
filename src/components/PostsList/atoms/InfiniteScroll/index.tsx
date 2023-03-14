import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';
import type { Children, FC } from 'react';

import { useArticlesStore } from '@stories/articles';

export const InfiniteScroll: FC<Children> = ({ children }) => {
  const [_hasNextPage, _updateHasNextPage] = useArticlesStore((state) => [state.hasNextPage, state.updateHasNextPage]);
  const [_progressYScroll, setProgressYScroll] = useState(0);
  // const isFetching = progressYScroll > 65;
  // const { locale } = useRouter();

  useScrollPosition(({ currPos }) => {
    const scrollHeight = document.body.offsetHeight - window.innerHeight;
    const progressYScroll = (currPos.y * -100) / scrollHeight;

    setProgressYScroll(Math.floor(progressYScroll));
  });

  // useEffect(() => {
  //   if (isFetching && hasNextPage) {
  //     fetch(`/api/articles?locale=${locale}&skip=2`)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         if (!res.hasNextPage) updateHasNextPage(false);
  //       });
  //   }
  // }, [locale, isFetching, hasNextPage, updateHasNextPage]);

  return <>{children}</>;
};
