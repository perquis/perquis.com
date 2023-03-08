import useKey from '@rooks/use-key';
import { useBlurStore } from 'src/stores/blur';

import styles from './Blur.module.scss';

export const Blur = () => {
  const [isBlur, updateIsBlur] = useBlurStore((state) => [state.isBlur, state.updateIsBlur]);
  const closeBlur = () => updateIsBlur(false);

  useKey('Escape', closeBlur, { when: isBlur });

  return <div className={styles.blur} onClick={closeBlur} />;
};
