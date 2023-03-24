import type { FC } from 'react';
import { useState } from 'react';
import { BsClipboard, BsClipboardCheck } from 'react-icons/bs';

import styles from './CopyButton.module.scss';

export const CopyButton: FC<{ text: string }> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const size = 18;

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };

  return (
    <button disabled={isCopied} onClick={copy} className={`${styles['copy-button']} ${isCopied ? styles.copied : ''}`} tabIndex={0}>
      {isCopied ? <BsClipboardCheck size={size} /> : <BsClipboard size={size} />}
    </button>
  );
};
