import clsx from 'clsx';
import type { FC } from 'react';

import { Counter } from '@components/WriteToSomething/atoms/Counter';
import { TextArea } from '@components/WriteToSomething/atoms/TextArea';
import { Actions } from '@components/WriteToSomething/molecules/Actions';

import type { UseFormResult } from '@hooks/useForm';

import styles from './WriteToSomething.module.scss';

export const WriteToSomething: FC<Record<'form', UseFormResult> & { isModal?: boolean }> = ({
  form: { content, handleSubmit, isDisabledCondition, updateCommentKeywords },
  isModal,
}) => {
  return (
    <form className={clsx(styles['comment-form-wrapper'], !isModal && styles['is-not-modal'], isDisabledCondition && styles.disabled)} onSubmit={handleSubmit}>
      <TextArea disabled={isDisabledCondition} onChange={(e) => updateCommentKeywords(e.currentTarget.value)} value={content} />
      <div className={styles.actions}>
        <Counter /> <Actions />
      </div>
    </form>
  );
};
