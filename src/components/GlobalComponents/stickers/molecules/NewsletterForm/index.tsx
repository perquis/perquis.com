import useKey from '@rooks/use-key';
import axios from 'axios';
import type { FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EmailInput } from '@GlobalComponents/atoms/EmailInput';

import { StickerButton } from '@stickers/index';

import { useFormStore } from '@stories/forms';
import { useLoadingStore } from '@stories/loading';
import { useNotificationStore } from '@stories/notifications';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './NewsletterForm.module.scss';

export const NewsletterForm = () => {
  const [updateNotification, deleteNotification] = useNotificationStore((state) => [state.updateNotification, state.deleteNotification]);
  const [email, updateEmailKeywords] = useFormStore((state) => [state.emailKeywords, state.updateEmailKeywords]);

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

  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <EmailInput placeholder={newsletterPlaceholder} onChange={(e) => updateEmailKeywords(e.currentTarget.value)} value={email} />
      <StickerButton>{newsletterButton}</StickerButton>
    </form>
  );
};
