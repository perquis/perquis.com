import axios from 'axios';
import { useSession } from 'next-auth/react';
import type { MutableRefObject } from 'react';
import { useRef, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { TfiTrash } from 'react-icons/tfi';
import { v4 as uuidv4 } from 'uuid';

import type { CommentProps } from '@components/locals/Comment';
import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import { useCommentStore, useLoadingStore, useNotificationStore, useRefetchStore } from '@stories';

import { useInternationalizedRouting } from '../useInternationalizedRouting/useInternationalizedRouting';

export const useCommentOptions = ({ commentId, userId, ...rest }: CommentProps & { commentId: string }) => {
  const { data: session } = useSession();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, toggleOpen] = useState(false);
  const { commentOptionsEdit, commentOptionsDelete, notificaionError, notificationSuccessDeleteComment, notificaionTextSuccess, notificaionTextError } =
    useInternationalizedRouting('global');
  const [updateNotification, deleteNotification] = useNotificationStore((state) => [state.updateNotification, state.deleteNotification]);
  const [isRefetch, updateIsRefetch] = useRefetchStore((state) => [state.isRefetch, state.updateIsRefetch]);

  const [updateIsLoadingWhileSendingRequest] = useLoadingStore((state) => [state.updateIsLoadingWhileSendingRequest]);

  const [updateComment] = useCommentStore((state) => [state.updateComment]);

  const handleUpdateComment = () => updateComment({ ...rest, userId }, true);

  const handleDeleteComment = () => {
    const id = uuidv4();
    updateIsLoadingWhileSendingRequest(true);

    axios
      .delete('/api/comments', { data: { id: commentId, userId: session?.user.id } })
      .then(() => {
        updateIsRefetch(!isRefetch);
        updateIsLoadingWhileSendingRequest(false);
        updateNotification({ id, status: 'success', title: notificaionTextSuccess ?? '', msg: notificationSuccessDeleteComment ?? '' });

        setTimeout(() => deleteNotification(id), 6000);
      })
      .catch(() => {
        updateIsLoadingWhileSendingRequest(false);
        updateNotification({ id, status: 'error', title: notificaionTextError ?? '', msg: notificaionError ?? '' });

        setTimeout(() => deleteNotification(id), 6000);
      });
  };

  const options = [
    { Icon: FiEdit2, text: commentOptionsEdit, handler: () => handleUpdateComment(), type: 'edit' as const },
    { Icon: TfiTrash, text: commentOptionsDelete, handler: () => handleDeleteComment(), type: 'delete' as const },
  ].filter(({ type }) => (session?.user.id === userId ? true : session?.user.isAdmin && type !== 'edit'));

  const handleCloseOptions = () => toggleOpen(false);
  useKey('Escape', handleCloseOptions, { when: isOpen });
  useOutsideClick(ref as MutableRefObject<HTMLElement>, handleCloseOptions, isOpen);

  return {
    ref,
    isOpen,
    options,
    toggleOpen,
  };
};
