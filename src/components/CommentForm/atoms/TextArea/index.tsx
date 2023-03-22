import useTranslation from 'next-translate/useTranslation';
import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { textAreaMaxLength } from '@data/validations';

import styles from './TextArea.module.scss';

interface ITextArea {
  disabled?: boolean;
}

export const TextArea: FC<ITextArea & DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>> = ({ disabled, ...props }) => {
  const { t } = useTranslation('global');
  const placeholder = t('comment.form.placeholder');

  return <textarea className={styles.textarea} placeholder={placeholder} minLength={5} maxLength={textAreaMaxLength} disabled={disabled} {...props} />;
};
