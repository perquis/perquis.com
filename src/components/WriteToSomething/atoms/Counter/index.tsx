import { useFormStore } from '@stories/forms';

import { textAreaMaxLength } from '@data/validations';

import styles from './Counter.module.scss';

export const Counter = () => {
  const [commentKeywords] = useFormStore((state) => [state.commentKeywords]);

  return (
    <span className={styles.counter}>
      {commentKeywords.length}/{textAreaMaxLength}
    </span>
  );
};
