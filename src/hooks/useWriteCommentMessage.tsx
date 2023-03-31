import axios from 'axios';
import { useSession } from 'next-auth/react';
import type { FormEvent } from 'react';

import { useFormStore } from '@stories/forms';
import { EnumNotificationStatus, useNotificationStore } from '@stories/notifications';
import { usePostsListStore } from '@stories/posts';

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

  const { notificationSuccess, notificaionError } = useInternationalizedRouting('global');
  const isDisabledCondition = isDisabled || isUser;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateDisabledState(true);

    try {
      if (data?.user?.email) {
        const { email } = data.user;
        axios.post('/api/comments', { email, postId, content }).then(() => {
          updateIsOpen(true);
          updateNotification({ status: EnumNotificationStatus.SUCCESS, msg: notificationSuccess ?? '' });

          setTimeout(() => updateIsOpen(false), 5000);
          setTimeout(() => {
            updateDisabledState(false);
            updateNotification(undefined);
          }, 6000);
        });
      }

      updateCommentKeywords('');
    } catch (err) {
      updateIsOpen(true);
      updateNotification({ status: EnumNotificationStatus.ERROR, msg: notificaionError ?? '' });

      setTimeout(() => updateIsOpen(false), 5000);
      setTimeout(() => {
        updateDisabledState(false);
        updateNotification(undefined);
      }, 6000);
    }
  };

  return { isDisabledCondition, updateCommentKeywords, handleSubmit };
};
