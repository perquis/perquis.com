import clsx from 'clsx';
import type { FC } from 'react';

import { Counter, TextArea } from '@components/WriteToSomething/atoms';
import { ResetOrPublish } from '@components/WriteToSomething/molecules';
import type { UseFormResult } from '@hooks';

import styles from './WriteToSomething.module.scss';

export const WriteToSomething: FC<Record<'form', UseFormResult> & { isModal?: boolean }> = ({ form: { content, handleSubmit, isDisabledCondition, updateKeywords }, isModal }) => {
  return (
    <form className={clsx(styles['comment-form-wrapper'], !isModal && styles['is-not-modal'], isDisabledCondition && styles.disabled)} onSubmit={handleSubmit}>
      <TextArea disabled={isDisabledCondition} onChange={(e) => updateKeywords(e.currentTarget.value)} value={content} />
      <div className={styles.actions}>
        <Counter content={content} /> <ResetOrPublish content={content} isDisabledCondition={isDisabledCondition} updateKeywords={updateKeywords} />
      </div>
    </form>
  );
};
