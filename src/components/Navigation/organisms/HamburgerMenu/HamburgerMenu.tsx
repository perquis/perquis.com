import type { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { useRef } from 'react';

import { DropDownMenu } from '@components/Navigation/molecules';
import { useDropdownMenu } from '@hooks';
import { useBlurStore } from '@stories';

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
