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
import { useGlobalStore } from '@stories';

import { useInternationalizedRouting } from '../useInternationalizedRouting/useInternationalizedRouting';

export const useCommentOptions = ({ commentId, userId, ...rest }: CommentProps & { commentId: string }) => {
  const { data: session } = useSession();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, toggleOpen] = useState(false);
  const { commentOptionsEdit, commentOptionsDelete, notificaionError, notificationSuccessDeleteComment, notificaionTextSuccess, notificaionTextError } =
    useInternationalizedRouting('global');
  const [updateNotification, deleteNotification, updateLoadingStatus, updateOpen, updateComment] = useGlobalStore(
    ({ updateNotification, deleteNotification, updateLoadingStatus, updateOpen, updateComment }) => [
      updateNotification,
      deleteNotification,
      updateLoadingStatus,
      updateOpen,
      updateComment,
    ]
  );

  const handleUpdateComment = () => {
    updateOpen('comment');
    updateComment({ ...rest, userId });
  };

  const handleDeleteComment = () => {
    const id = uuidv4();
    updateLoadingStatus('comment');

    axios
      .delete('/api/comments', { data: { id: commentId, userId: session?.user.id } })
      .then(() => {
        updateLoadingStatus(null);
        updateNotification({ id, status: 'success', title: notificaionTextSuccess ?? '', msg: notificationSuccessDeleteComment ?? '' });

        setTimeout(() => deleteNotification(id), 6000);
      })
      .catch(() => {
        updateLoadingStatus(null);
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
