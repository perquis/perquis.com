import axios from 'axios';
import type { FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useKey from '@rooks/use-key';
import { useFormStore, useGlobalStore } from '@stories';

import { useInternationalizedRouting } from '../useInternationalizedRouting/useInternationalizedRouting';

export const useNewsletter = (isModal?: boolean) => {
  const [updateNotification, deleteNotification, updateLoadingStatus, updateOpen] = useGlobalStore(
    ({ updateNotification, deleteNotification, updateLoadingStatus, updateOpen }) => [updateNotification, deleteNotification, updateLoadingStatus, updateOpen]
  );
  const [email, updateEmailKeywords] = useFormStore((state) => [state.emailKeywords, state.updateEmailKeywords]);

  const { notificaionError, notificaionTextSuccess, notificaionTextError, notificationSuccessSubscribeNewsletter, newsletterPlaceholder, newsletterButton } =
    useInternationalizedRouting('global');

  useKey('Escape', () => updateEmailKeywords(''));

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateLoadingStatus('subscribe-newsletter');

    const id = uuidv4();

    axios
      .post('/api/newsletter/subscribe', { email })
      .then(() => {
        if (isModal) updateOpen(null);
        updateLoadingStatus(null);
        updateNotification({ id, status: 'success', title: notificaionTextSuccess ?? '', msg: notificationSuccessSubscribeNewsletter ?? '' });

        setTimeout(() => deleteNotification(id), 6000);
      })
      .catch(() => {
        updateLoadingStatus(null);
        updateNotification({ id, status: 'error', title: notificaionTextError ?? '', msg: notificaionError ?? '' });

        setTimeout(() => deleteNotification(id), 6000);
      });

    updateEmailKeywords('');
  };

  return { email, updateEmailKeywords, handleOnSubmit, newsletterPlaceholder, newsletterButton };
};
