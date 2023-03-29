import useTranslation from 'next-translate/useTranslation';
import type { FC, ReactHTMLElementProps } from 'react';

import { textAreaMaxLength } from '@data/validations';

import styles from './TextArea.module.scss';

interface ITextArea {
  disabled?: boolean;
}

type ITextAreaProps = FC<ITextArea & Omit<ReactHTMLElementProps<HTMLTextAreaElement>, 'children'>>;

export const TextArea: ITextAreaProps = ({ disabled, ...props }) => {
  const { t } = useTranslation('global');
  const placeholder = t('comment.form.placeholder');

  return <textarea className={styles.textarea} placeholder={placeholder} minLength={5} maxLength={textAreaMaxLength} disabled={disabled} {...props} />;
};
