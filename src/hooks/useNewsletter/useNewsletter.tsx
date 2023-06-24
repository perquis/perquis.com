import axios from 'axios';
import type { FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useKey from '@rooks/use-key';
import { useFormStore, useGlobalStore, useLoadingStore, useModalStore } from '@stories';

import { useInternationalizedRouting } from '../useInternationalizedRouting/useInternationalizedRouting';

export const useNewsletter = (isModal?: boolean) => {
  const [updateNotification, deleteNotification] = useGlobalStore(({ updateNotification, deleteNotification }) => [updateNotification, deleteNotification]);
  const [email, updateEmailKeywords] = useFormStore((state) => [state.emailKeywords, state.updateEmailKeywords]);
  const [updateNewsletterModalOpen] = useModalStore((state) => [state.updateNewsletterModalOpen]);

  const { notificaionError, notificaionTextSuccess, notificaionTextError, notificationSuccessSubscribeNewsletter, newsletterPlaceholder, newsletterButton } =
    useInternationalizedRouting('global');

  const [updateIsLoadingWhileSendingRequest] = useLoadingStore((state) => [state.updateIsLoadingWhileSendingRequest]);

  useKey('Escape', () => updateEmailKeywords(''));

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateIsLoadingWhileSendingRequest(true);

    const id = uuidv4();

    axios
      .post('/api/newsletter/subscribe', { email })
      .then(() => {
        if (isModal) updateNewsletterModalOpen(false);
        updateIsLoadingWhileSendingRequest(false);
        updateNotification({ id, status: 'success', title: notificaionTextSuccess ?? '', msg: notificationSuccessSubscribeNewsletter ?? '' });

        setTimeout(() => deleteNotification(id), 6000);
      })
      .catch(() => {
        updateIsLoadingWhileSendingRequest(false);
        updateNotification({ id, status: 'error', title: notificaionTextError ?? '', msg: notificaionError ?? '' });

        setTimeout(() => deleteNotification(id), 6000);
      });

    updateEmailKeywords('');
  };

  return { email, updateEmailKeywords, handleOnSubmit, newsletterPlaceholder, newsletterButton };
};
