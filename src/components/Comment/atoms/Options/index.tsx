import { Dot } from '@GlobalComponents/atoms/Dot';

import styles from './Options.module.scss';

const dots = new Array(3).fill(null);

export const Options = () => (
  <button className={styles.options}>
    {dots.map((_, i) => (
      <Dot key={i} />
    ))}
  </button>
);
