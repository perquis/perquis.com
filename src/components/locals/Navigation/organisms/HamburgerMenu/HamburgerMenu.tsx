import { type MutableRefObject, useMemo, useRef } from 'react';

import { DropDownMenu } from '@components/locals/Navigation/molecules';
import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import { useGlobalStore } from '@stories';

import styles from './HamburgerMenu.module.scss';

export const HamburgerMenu = () => {
  const ref = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;
  const [open, updateOpen] = useGlobalStore(({ open, updateOpen }) => [open, updateOpen]);
  const toggleActive = () => updateOpen(null);

  const isActive = useMemo(() => open === 'blur', [open]);

  useKey('Escape', toggleActive, { when: isActive });
  useOutsideClick(ref, toggleActive, isActive);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={`${styles['hamburger-menu']} ${isActive ? styles.active : ''}`} onClick={() => updateOpen('blur')} />
      <DropDownMenu isActive={isActive} />
    </div>
  );
};
