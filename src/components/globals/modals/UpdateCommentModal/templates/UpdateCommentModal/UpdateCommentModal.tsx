import type { MutableRefObject } from 'react';
import { useRef } from 'react';

import { Comment } from '@components/locals/Comment';
import { Modal } from '@components/locals/Modal';
import { WriteToSomething } from '@components/locals/WriteToSomething';
import { useForm, useInternationalizedRouting } from '@hooks';
import { Dashed } from '@icons/Dashed';
import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import { useCommentStore } from '@stories';

import styles from './UpdateCommentModal.module.scss';

export const UpdateCommentModal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [comment, updateComment] = useCommentStore((state) => [state.comment, state.updateComment]);
  const { modalUpdateComment } = useInternationalizedRouting('global');

  useKey('Escape', () => updateComment(undefined, false));
  useOutsideClick(ref as MutableRefObject<HTMLDivElement>, () => updateComment(undefined, false));

  const form = useForm('update-comment', comment);

  if (!comment) return null;

  return (
    <Modal id="#update-comment-modal">
      <div className={styles.wrapper} ref={ref}>
        <h3>{modalUpdateComment}</h3>
        <Comment isModal props={comment} />
        <Dashed />
        <WriteToSomething form={form} isModal />
      </div>
    </Modal>
  );
};
