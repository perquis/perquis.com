import clsx from 'clsx';
import { useSession } from 'next-auth/react';

import { Counter } from '@components/WriteToSomething/atoms/Counter';
import { TextArea } from '@components/WriteToSomething/atoms/TextArea';
import { Actions } from '@components/WriteToSomething/molecules/Actions';

import { useFormStore } from '@stories/forms';

import styles from './WriteToSomething.module.scss';

export const WriteToSomething = () => {
  const { status } = useSession();
  const isUser = status !== 'authenticated';
  const [updateCommentKeywords] = useFormStore((state) => [state.updateCommentKeywords]);

  return (
    <form className={clsx(styles['comment-form-wrapper'], isUser && styles.disabled)} onSubmit={(e) => e.preventDefault()}>
      <TextArea disabled={isUser} onChange={(e) => updateCommentKeywords(e.currentTarget.value)} />
      <div className={styles.actions}>
        <Counter /> <Actions />
      </div>
    </form>
  );
};
