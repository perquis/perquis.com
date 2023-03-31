import axios from 'axios';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import type { FormEvent } from 'react';

import { Counter } from '@components/WriteToSomething/atoms/Counter';
import { TextArea } from '@components/WriteToSomething/atoms/TextArea';
import { Actions } from '@components/WriteToSomething/molecules/Actions';

import { useFormStore } from '@stories/forms';
import { EnumNotificationStatus, useNotificationStore } from '@stories/notifications';
import { usePostsListStore } from '@stories/posts';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './WriteToSomething.module.scss';

export const WriteToSomething = () => {
  const { data, status } = useSession();
  const isUser = status !== 'authenticated';
  const [postId] = usePostsListStore((state) => [state.postId]);
  const [content, updateCommentKeywords, isDisabled, updateDisabledState] = useFormStore((state) => [
    state.commentKeywords,
    state.updateCommentKeywords,
    state.isDisabled,
    state.updateDisabledState,
  ]);
  const [updateNotification] = useNotificationStore((state) => [state.updateNotification]);

  const { notificationSuccess, notificaionError } = useInternationalizedRouting('global');
  const isDisabledCondition = isDisabled || isUser;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateDisabledState(true);

    try {
      if (data?.user?.email) {
        const { email } = data.user;
        axios.post('/api/comments', { email, postId, content }).then(() => {
          updateNotification({ status: EnumNotificationStatus.SUCCESS, msg: notificationSuccess ?? '' });
          updateDisabledState(false);
        });
      }

      updateCommentKeywords('');
    } catch (err) {
      updateNotification({ status: EnumNotificationStatus.ERROR, msg: notificaionError ?? '' });
      updateDisabledState(false);
    }
  };

  return (
    <form className={clsx(styles['comment-form-wrapper'], isDisabledCondition && styles.disabled)} onSubmit={handleSubmit}>
      <TextArea disabled={isDisabledCondition} onChange={(e) => updateCommentKeywords(e.currentTarget.value)} />
      <div className={styles.actions}>
        <Counter /> <Actions />
      </div>
    </form>
  );
};
