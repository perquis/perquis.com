import clsx from 'clsx';

import { Counter } from '@components/WriteToSomething/atoms/Counter';
import { TextArea } from '@components/WriteToSomething/atoms/TextArea';
import { Actions } from '@components/WriteToSomething/molecules/Actions';

import { useFormStore } from '@stories/forms';

import { useUser } from '@hooks/useUser';

import styles from './WriteToSomething.module.scss';

export const WriteToSomething = () => {
  const { isUser } = useUser();
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
