import clsx from 'clsx';
import type { FC } from 'react';
import { useState } from 'react';
import { BsClipboard, BsClipboardCheck } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';

import { useInternationalizedRouting } from '@hooks';
import { useNotificationStore } from '@stories';

import styles from './CopyButton.module.scss';

export const CopyButton: FC<{ text: string }> = ({ text }) => {
  const [updateNotification, deleteNotification] = useNotificationStore((state) => [state.updateNotification, state.deleteNotification]);
  const { notificaionInfoCopyToClipboard, notificaionTextInfo } = useInternationalizedRouting('global');
  const [isCopied, setIsCopied] = useState(false);
  const size = 18;

  const copy = async () => {
    const id = uuidv4();

    setIsCopied(true);
    updateNotification({ id, status: 'info', msg: notificaionInfoCopyToClipboard ?? '', title: notificaionTextInfo ?? '' });

    setTimeout(() => {
      setIsCopied(false);
      deleteNotification(id);
    }, 6000);

    await navigator.clipboard.writeText(text);
  };

  return (
    <button disabled={isCopied} onClick={copy} className={clsx(styles['copy-button'], isCopied && styles.copied)} tabIndex={0}>
      {isCopied ? <BsClipboardCheck size={size} /> : <BsClipboard size={size} />}
    </button>
  );
};
