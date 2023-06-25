import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import type { FC, MutableRefObject } from 'react';
import { useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { FiEdit2 } from 'react-icons/fi';
import { TfiTrash } from 'react-icons/tfi';
import { v4 as uuidv4 } from 'uuid';

import { vars } from '@animations';
import { Dot } from '@components/globals/atoms';
import type { CommentProps } from '@components/locals/Comment/templates';
import { pageSize } from '@data';
import { useInternationalizedRouting } from '@hooks';
import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import { useGlobalStore } from '@stories';

import styles from './Options.module.scss';

const dots = new Array(pageSize).fill(null);

export const Options: FC<Record<'comment', CommentProps>> = ({ comment: { ...rest } }) => {
  const { data: session } = useSession();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, toggleOpen] = useState(false);
  const [updateNotification, deleteNotification, updateLoadingStatus, updateOpen, updateComment] = useGlobalStore(
    ({ updateNotification, deleteNotification, updateLoadingStatus, updateOpen, updateComment }) => [
      updateNotification,
      deleteNotification,
      updateLoadingStatus,
      updateOpen,
      updateComment,
    ]
  );

  const t = useInternationalizedRouting('global');

  const handleUpdateComment = () => {
    updateOpen('comment');
    updateComment({ ...rest, userId: session?.user.id ?? '' });
  };

  const handleDeleteComment = () => {
    const id = uuidv4();
    updateLoadingStatus('comment');

    axios
      .delete('/api/comments', { data: { id: rest.id, userId: session?.user.id } })
      .then(() => {
        updateLoadingStatus(null);
        updateNotification({ id, status: 'success', title: t.notificaionTextSuccess ?? '', msg: t.notificationSuccessDeleteComment ?? '' });

        setTimeout(() => deleteNotification(id), 6000);
      })
      .catch(() => {
        updateLoadingStatus(null);
        updateNotification({ id, status: 'error', title: t.notificaionTextError ?? '', msg: t.notificaionError ?? '' });

        setTimeout(() => deleteNotification(id), 6000);
      });
  };

  const options = [
    { Icon: FiEdit2, text: t.commentOptionsEdit, handler: () => handleUpdateComment(), type: 'edit' as const },
    { Icon: TfiTrash, text: t.commentOptionsDelete, handler: () => handleDeleteComment(), type: 'delete' as const },
  ].filter(({ type }) => (session?.user.id === rest.userId ? true : session?.user.isAdmin && type !== 'edit'));

  const handleCloseOptions = () => toggleOpen(false);
  useKey('Escape', handleCloseOptions, { when: isOpen });
  useOutsideClick(ref as MutableRefObject<HTMLElement>, handleCloseOptions, isOpen);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={styles.options} onClick={() => toggleOpen(!isOpen)}>
        {dots.map((_, i) => (
          <Dot key={i} />
        ))}
      </button>
      <AnimatePresence>
        {isOpen && (
          <FocusLock>
            <motion.div className={styles['options-list']} variants={vars} initial="initial" animate="animate" exit="exit">
              {options.map(({ text, handler, Icon }, i) => (
                <button className={styles.button} onClick={handler} key={i}>
                  <Icon /> <span>{text}</span>
                </button>
              ))}
            </motion.div>
          </FocusLock>
        )}
      </AnimatePresence>
    </div>
  );
};
