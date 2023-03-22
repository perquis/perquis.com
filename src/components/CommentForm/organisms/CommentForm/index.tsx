import { useSession } from 'next-auth/react';

import { Counter } from '@components/CommentForm/atoms/Counter';
import { TextArea } from '@components/CommentForm/atoms/TextArea';
import { Actions } from '@components/CommentForm/molecules/Actions';

import { useFormStore } from '@stories/forms';

import { isExistsUser } from '@utils/isExistsUser';

import styles from './CommentForm.module.scss';

export const CommentForm = () => {
  const { data } = useSession();
  const isUser = !isExistsUser(data?.user);

  const [updateCommentKeywords] = useFormStore((state) => [state.updateCommentKeywords]);

  return (
    <form className={`${styles['comment-form-wrapper']} ${isUser ? styles.disabled : ''}`} onSubmit={(e) => e.preventDefault()}>
      <TextArea disabled={isUser} onChange={(e) => updateCommentKeywords(e.currentTarget.value)} />
      <div className={styles.actions}>
        <Counter /> <Actions />
      </div>
    </form>
  );
};
