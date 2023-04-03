import axios from 'axios';
import { useSession } from 'next-auth/react';
import type { FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useFormStore } from '@stories/forms';
import { useLoadingStore } from '@stories/loading';
import { useNotificationStore } from '@stories/notifications';
import { usePostsListStore } from '@stories/posts';
import { useRefetchStore } from '@stories/refetch';

import { useInternationalizedRouting } from './useInternationalizedRouting';

export const useWriteCommentMessage = () => {
  const { data, status } = useSession();
  const isUser = status !== 'authenticated';
  const [postId] = usePostsListStore((state) => [state.postId]);
  const [content, updateCommentKeywords, isDisabled, updateDisabledState] = useFormStore((state) => [
    state.commentKeywords,
    state.updateCommentKeywords,
    state.isDisabled,
    state.updateDisabledState,
  ]);
  const [updateNotification, deleteNotification] = useNotificationStore((state) => [state.updateNotification, state.deleteNotification]);

  const [isRefetch, updateIsRefetch] = useRefetchStore((state) => [state.isRefetch, state.updateIsRefetch]);

  const { notificationSuccess, notificaionError, notificaionTextSuccess, notificaionTextError } = useInternationalizedRouting('global');
  const isDisabledCondition = isDisabled || isUser;

  const [updateIsLoadingWhileSendingRequest] = useLoadingStore((state) => [state.updateIsLoadingWhileSendingRequest]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateDisabledState(true);
    updateIsLoadingWhileSendingRequest(true);

    if (data?.user?.email) {
      const id = uuidv4();
      const { email } = data.user;

      axios
        .post('/api/comments', { email, postId, content })
        .then(() => {
          updateDisabledState(false);
          updateIsRefetch(!isRefetch);
          updateIsLoadingWhileSendingRequest(false);
          updateNotification({ id, status: 'success', title: notificaionTextSuccess ?? '', msg: notificationSuccess ?? '' });

          setTimeout(() => deleteNotification(id), 6000);
        })
        .catch(() => {
          updateDisabledState(false);
          updateIsLoadingWhileSendingRequest(false);
          updateNotification({ id, status: 'error', title: notificaionTextError ?? '', msg: notificaionError ?? '' });

          setTimeout(() => deleteNotification(id), 6000);
        });
    }

    updateCommentKeywords('');
  };

  return { isDisabledCondition, updateCommentKeywords, handleSubmit };
};
