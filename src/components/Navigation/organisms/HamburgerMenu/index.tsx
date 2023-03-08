import { useRef, useState } from 'react';
import type { MutableRefObject } from 'react';
import { useBlurStore } from 'src/stores/blur';

import { DropDownMenu } from '@components/Navigation/molecules/DropDownMenu';

import { useDropdownMenu } from '@hooks/useDropdownMenu';

import styles from './HamburgerMenu.module.scss';

export const HamburgerMenu = () => {
  const ref = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;
  const [isActive, setActive] = useState(false);

  const toggleActive = () => setActive(!isActive);

  useDropdownMenu(toggleActive, { ref, state: { isActive, setActive } });

  const [updateIsBlur] = useBlurStore((state) => [state.updateIsBlur]);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={`${styles['hamburger-menu']} ${isActive ? styles.active : ''}`}
        onClick={() => {
          updateIsBlur(true);
          toggleActive();
        }}
      />
      <DropDownMenu isActive={isActive} />
    </div>
  );
};
