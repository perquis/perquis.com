import useKey from '@rooks/use-key';
import type { FC, ReactHTMLElementProps } from 'react';

import { useFormStore } from '@stories/forms';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import { textAreaMaxLength } from '@data/validations';

import styles from './TextArea.module.scss';

interface ITextArea {
  disabled?: boolean;
}

type ITextAreaProps = FC<ITextArea & Omit<ReactHTMLElementProps<HTMLTextAreaElement>, 'children'>>;

export const TextArea: ITextAreaProps = ({ disabled, ...props }) => {
  const [commentKeywords, updateCommentKeywords] = useFormStore((state) => [state.commentKeywords, state.updateCommentKeywords]);
  const { commentFormPlaceholder } = useInternationalizedRouting('global');

  useKey('Escape', () => updateCommentKeywords(''));

  return (
    <textarea className={styles.textarea} placeholder={commentFormPlaceholder} minLength={5} maxLength={textAreaMaxLength} disabled={disabled} {...props} value={commentKeywords} />
  );
};
