import clsx from 'clsx';

import { Counter } from '@components/WriteToSomething/atoms/Counter';
import { TextArea } from '@components/WriteToSomething/atoms/TextArea';
import { Actions } from '@components/WriteToSomething/molecules/Actions';

import { useWriteCommentMessage } from '@hooks/useWriteCommentMessage';

import styles from './WriteToSomething.module.scss';

export const WriteToSomething = () => {
  const { handleSubmit, isDisabledCondition, updateCommentKeywords } = useWriteCommentMessage();

  return (
    <form className={clsx(styles['comment-form-wrapper'], isDisabledCondition && styles.disabled)} onSubmit={handleSubmit}>
      <TextArea disabled={isDisabledCondition} onChange={(e) => updateCommentKeywords(e.currentTarget.value)} />
      <div className={styles.actions}>
        <Counter /> <Actions />
      </div>
    </form>
  );
};
