import axios from 'axios';
import { useSession } from 'next-auth/react';
import type { FormEvent } from 'react';

import { useFormStore } from '@stories/forms';
import { useLoadingStore } from '@stories/loading';
import { EnumNotificationStatus, useNotificationStore } from '@stories/notifications';
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
  const [updateNotification, updateIsOpen] = useNotificationStore((state) => [state.updateNotification, state.updateIsOpen]);

  const [isRefetch, updateIsRefetch] = useRefetchStore((state) => [state.isRefetch, state.updateIsRefetch]);

  const { notificationSuccess, notificaionError, notificaionTextSuccess, notificaionTextError } = useInternationalizedRouting('global');
  const isDisabledCondition = isDisabled || isUser;

  const [updateIsLoadingWhileSendingRequest] = useLoadingStore((state) => [state.updateIsLoadingWhileSendingRequest]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateDisabledState(true);
    updateIsLoadingWhileSendingRequest(true);

    if (data?.user?.email) {
      const { email } = data.user;
      axios
        .post('/api/comments', { email, postId, content })
        .then(() => {
          updateIsOpen(true);
          updateIsRefetch(!isRefetch);
          updateIsLoadingWhileSendingRequest(false);
          updateNotification({ status: EnumNotificationStatus.SUCCESS, title: notificaionTextSuccess ?? '', msg: notificationSuccess ?? '' });

          setTimeout(() => updateIsOpen(false), 5000);
          setTimeout(() => {
            updateDisabledState(false);
            updateNotification(undefined);
          }, 6000);
        })
        .catch(() => {
          updateIsOpen(true);
          updateIsLoadingWhileSendingRequest(false);
          updateNotification({ status: EnumNotificationStatus.ERROR, title: notificaionTextError ?? '', msg: notificaionError ?? '' });

          setTimeout(() => updateIsOpen(false), 5000);
          setTimeout(() => {
            updateDisabledState(false);
            updateNotification(undefined);
          }, 6000);
        });
    }

    updateCommentKeywords('');
  };

  return { isDisabledCondition, updateCommentKeywords, handleSubmit };
};
