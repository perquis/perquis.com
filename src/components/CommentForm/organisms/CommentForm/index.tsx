import { Counter } from '@components/CommentForm/atoms/Counter';
import { TextArea } from '@components/CommentForm/atoms/TextArea';
import { Actions } from '@components/CommentForm/molecules/Actions';

import styles from './CommentForm.module.scss';

export const CommentForm = () => {
  return (
    <div className={styles['comment-form-wrapper']}>
      <TextArea />
      <div className={styles.actions}>
        <Counter /> <Actions />
      </div>
    </div>
  );
};
