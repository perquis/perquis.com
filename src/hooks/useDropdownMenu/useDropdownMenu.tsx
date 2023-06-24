import type { MutableRefObject } from 'react';
import { useEffect, useState } from 'react';

import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';

type State = { isActive: boolean };
type Options = { ref: MutableRefObject<HTMLDivElement>; state: Partial<State> };

type UseDropdownMenu = (cb: () => void, options: Options) => void | null;

export const useDropdownMenu: UseDropdownMenu = (cb, { ref, state: { isActive } }) => {
  const [mounted, setMounted] = useState(false);

  useKey('Escape', cb, { when: isActive });
  useOutsideClick(ref, cb, isActive && !!mounted);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
};
