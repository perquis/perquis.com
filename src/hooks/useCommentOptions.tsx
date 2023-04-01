import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRef, useState } from 'react';
import type { MutableRefObject } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { TfiTrash } from 'react-icons/tfi';

import { useLoadingStore } from '@stories/loading';
import { EnumNotificationStatus, useNotificationStore } from '@stories/notifications';
import { useRefetchStore } from '@stories/refetch';

import { useInternationalizedRouting } from './useInternationalizedRouting';

export const useCommentOptions = ({ id, userId }: { id: string; userId: string }) => {
  const { data: session } = useSession();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, toggleOpen] = useState(false);
  const { commentOptionsEdit, commentOptionsDelete, notificaionError, notificationSuccessDeleteComment, notificaionTextSuccess, notificaionTextError } =
    useInternationalizedRouting('global');
  const [updateNotification, updateIsOpen] = useNotificationStore((state) => [state.updateNotification, state.updateIsOpen]);
  const [isRefetch, updateIsRefetch] = useRefetchStore((state) => [state.isRefetch, state.updateIsRefetch]);

  const [updateIsLoadingWhileSendingRequest] = useLoadingStore((state) => [state.updateIsLoadingWhileSendingRequest]);

  const deleteComment = () => {
    updateIsLoadingWhileSendingRequest(true);

    axios
      .delete('/api/comments', { data: { id, userId: session?.user.id } })
      .then(() => {
        updateIsOpen(true);
        updateIsRefetch(!isRefetch);
        updateIsLoadingWhileSendingRequest(false);
        updateNotification({ status: EnumNotificationStatus.SUCCESS, title: notificaionTextSuccess ?? '', msg: notificationSuccessDeleteComment ?? '' });

        setTimeout(() => updateIsOpen(false), 5000);
        setTimeout(() => {
          updateNotification(undefined);
        }, 6000);
      })
      .catch(() => {
        updateIsOpen(true);
        updateIsLoadingWhileSendingRequest(false);
        updateNotification({ status: EnumNotificationStatus.ERROR, title: notificaionTextError ?? '', msg: notificaionError ?? '' });

        setTimeout(() => updateIsOpen(false), 5000);
        setTimeout(() => {
          updateNotification(undefined);
        }, 6000);
      });
  };

  const options = [
    { Icon: FiEdit2, text: commentOptionsEdit, handler: () => null, type: 'edit' as const },
    { Icon: TfiTrash, text: commentOptionsDelete, handler: () => deleteComment(), type: 'delete' as const },
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
