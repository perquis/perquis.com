import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import type { MutableRefObject } from 'react';
import { useRef } from 'react';

import { UpdateCommentForm } from '@modals/UpdateCommentModal/organisms/UpdateCommentForm';

import { Comment } from '@components/Comment';
import { Modal } from '@components/Modal';

import { useCommentStore } from '@stories/comment';

import { Dashed } from '@icons/Dashed';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './UpdateCommentModal.module.scss';

export const UpdateCommentModal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [comment, updateComment] = useCommentStore((state) => [state.comment, state.updateComment]);
  const { modalUpdateComment } = useInternationalizedRouting('global');

  useKey('Escape', () => updateComment(undefined, false));
  useOutsideClick(ref as MutableRefObject<HTMLDivElement>, () => updateComment(undefined, false));

  if (!comment) return null;

  return (
    <Modal id="#update-comment-modal">
      <div className={styles.wrapper} ref={ref}>
        <h3>{modalUpdateComment}</h3>
        <Comment isModal props={comment} />
        <Dashed />
        <UpdateCommentForm />
      </div>
    </Modal>
  );
};
