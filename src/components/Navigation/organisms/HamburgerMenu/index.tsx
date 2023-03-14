import type { Dispatch, SetStateAction } from 'react';
import { useRef } from 'react';
import type { MutableRefObject } from 'react';
import { useBlurStore } from 'src/stories/blur';

import { DropDownMenu } from '@components/Navigation/molecules/DropDownMenu';

import { useDropdownMenu } from '@hooks/useDropdownMenu';

import styles from './HamburgerMenu.module.scss';

export const HamburgerMenu = () => {
  const ref = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;
  const [isBlur, updateIsBlur] = useBlurStore((state) => [state.isBlur, state.updateIsBlur]);

  const toggleActive = () => updateIsBlur(!isBlur);

  useDropdownMenu(toggleActive, { ref, state: { isActive: isBlur, setActive: updateIsBlur as Dispatch<SetStateAction<boolean>> } });

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={`${styles['hamburger-menu']} ${isBlur ? styles.active : ''}`}
        onClick={() => {
          updateIsBlur(true);
          toggleActive();
        }}
      />
      <DropDownMenu isActive={isBlur} />
    </div>
  );
};
