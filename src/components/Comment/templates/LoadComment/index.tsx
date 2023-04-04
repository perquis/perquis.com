import clsx from 'clsx';
import { useEffect, useState } from 'react';

import styles from '@components/Comment/templates/Comment/Comment.module.scss';
import { CommentLoader } from '@components/Loader/molecules/CommentLoader';

export const LoadComment = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={clsx(styles.comment, styles['comment-is-not-in-modal'])} style={{ alignItems: 'flex-start' }}>
      <CommentLoader />
    </div>
  );
};
