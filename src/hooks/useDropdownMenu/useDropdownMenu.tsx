import type { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import { useWindowWidth } from '@react-hook/window-size';
import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';

type State = { isActive: boolean; setActive: Dispatch<SetStateAction<boolean>> };
type Options = { ref: MutableRefObject<HTMLDivElement>; state: Partial<State> };

type UseDropdownMenu = (cb: () => void, options: Options) => void | null;

export const useDropdownMenu: UseDropdownMenu = (cb, { ref, state: { isActive, setActive } }) => {
  const innerWidth = useWindowWidth();
  const [mounted, setMounted] = useState(false);

  useKey('Escape', cb, { when: isActive });
  useOutsideClick(ref, cb, isActive && !!mounted);

  useEffect(() => {
    if (innerWidth ? innerWidth > 768 : false) setActive?.(false);
  }, [innerWidth, setActive]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
};
