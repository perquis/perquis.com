import type { MutableRefObject } from 'react';
import { useRef, useState } from 'react';

import { flip, offset, shift, useClick, useFloating, useInteractions } from '@floating-ui/react';
import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';

export const useFilterInteractions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;

  const toggleOpen = () => setIsOpen(!isOpen);

  const { x, y, refs, context } = useFloating({ open: isOpen, onOpenChange: setIsOpen, placement: 'bottom-end', middleware: [offset(16), flip(), shift()] });
  const click = useClick(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([click]);

  useKey('Escape', toggleOpen, { when: isOpen });
  useOutsideClick(dialogRef, toggleOpen, isOpen);

  return {
    x,
    y,
    refs,
    isOpen,
    dialogRef,
    getFloatingProps,
    getReferenceProps,
  };
};
