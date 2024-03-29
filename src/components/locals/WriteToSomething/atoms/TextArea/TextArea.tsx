import type { FC, ReactHTMLElementProps } from 'react';

import { textAreaMaxLength } from '@data';
import { useInternationalizedRouting } from '@hooks';

import styles from './TextArea.module.scss';

interface ITextArea {
  value: string;
  disabled?: boolean;
}

type ITextAreaProps = FC<ITextArea & Omit<ReactHTMLElementProps<HTMLTextAreaElement>, 'children'>>;

export const TextArea: ITextAreaProps = ({ disabled, value, ...props }) => {
  const { commentFormPlaceholder } = useInternationalizedRouting('global');

  return (
    <textarea className={styles.textarea} placeholder={commentFormPlaceholder} minLength={5} maxLength={textAreaMaxLength} disabled={disabled} {...props} value={value} required />
  );
};
