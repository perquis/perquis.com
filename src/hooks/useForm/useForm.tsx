import axios from 'axios';
import { useSession } from 'next-auth/react';
import type { FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useKey from '@rooks/use-key';
import { useFormStore, useGlobalStore } from '@stories';

import { useInternationalizedRouting } from '../useInternationalizedRouting/useInternationalizedRouting';

type FormStatus = 'create-comment' | 'update-comment';

export type UseFormResult =
  | {
      content: string;
      isDisabledCondition: boolean;
      updateKeywords: () => null;
      handleSubmit: undefined;
    }
  | {
      content: string;
      isDisabledCondition: boolean;
      updateKeywords: (keywords: string) => void;
      handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    };

const initialFormState = { content: '', isDisabledCondition: false, updateKeywords: () => null, handleSubmit: undefined };

export const useForm = (formStatus: FormStatus, body?: PrismaComment | null): UseFormResult => {
  const { data, status } = useSession();
  const isUser = status !== 'authenticated';
  const [postId, updateLoadingStatus] = useGlobalStore(({ postId, updateLoadingStatus }) => [postId, updateLoadingStatus]);
  const [isDisabled, commentKeywords, updateCommentKeywords, updateDisabledState, modalKeywords, updateModalKeywords] = useFormStore((state) => [
    state.isDisabled,
    state.commentKeywords,
    state.updateCommentKeywords,
    state.updateDisabledState,
    state.modalKeywords,
    state.updateModalKeywords,
  ]);
  const [updateNotification, deleteNotification, updateOpen, updateComment] = useGlobalStore(({ updateNotification, deleteNotification, updateOpen, updateComment }) => [
    updateNotification,
    deleteNotification,
    updateOpen,
    updateComment,
  ]);

  const { notificationSuccess, notificaionError, notificaionTextSuccess, notificaionTextError, notificationSuccessUpdateComment } = useInternationalizedRouting('global');
  const isDisabledCondition = isDisabled || isUser;

  useKey('Escape', () => {
    updateModalKeywords('');
    updateCommentKeywords('');
  });

  if (formStatus === 'create-comment') {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      updateDisabledState(true);
      updateLoadingStatus('comment');

      if (data?.user?.email) {
        const id = uuidv4();
        const { email } = data.user;

        axios
          .post('/api/comments', { email, postId, content: commentKeywords })
          .then(() => {
            updateDisabledState(false);
            updateLoadingStatus(null);
            updateNotification({ id, status: 'success', title: notificaionTextSuccess ?? '', msg: notificationSuccess ?? '' });

            setTimeout(() => deleteNotification(id), 6000);
          })
          .catch(() => {
            updateDisabledState(false);
            updateLoadingStatus(null);
            updateNotification({ id, status: 'error', title: notificaionTextError ?? '', msg: notificaionError ?? '' });

            setTimeout(() => deleteNotification(id), 6000);
          });
      }

      updateCommentKeywords('');
    };

    return { content: commentKeywords, isDisabledCondition, updateKeywords: updateCommentKeywords, handleSubmit };
  }

  if (formStatus === 'update-comment') {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      updateDisabledState(true);
      updateLoadingStatus('comment');

      if (data?.user.id) {
        const id = uuidv4();

        axios
          .put('/api/comments', { id: body?.id, userId: data.user.id, content: modalKeywords })
          .then(() => {
            updateDisabledState(false);
            updateNotification({ id, status: 'success', title: notificaionTextSuccess ?? '', msg: notificationSuccessUpdateComment ?? '' });
            updateOpen(null);
            updateComment(null);
            updateLoadingStatus(null);

            setTimeout(() => deleteNotification(id), 6000);
          })
          .catch(() => {
            updateDisabledState(false);
            updateLoadingStatus(null);
            updateNotification({ id, status: 'error', title: notificaionTextError ?? '', msg: notificaionError ?? '' });

            setTimeout(() => deleteNotification(id), 6000);
          });
      }

      updateModalKeywords('');
    };

    return { content: modalKeywords, isDisabledCondition, updateKeywords: updateModalKeywords, handleSubmit };
  }

  return initialFormState;
};
