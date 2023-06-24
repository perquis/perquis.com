import clsx from 'clsx';
import { useSession } from 'next-auth/react';

import { type CommentProps, Options, UsernameAndDate } from '@components/locals/Comment';

import styles from './UserAction.module.scss';

export const UserAction = ({ user: { ...rest }, isModal }: Record<'user', CommentProps> & { isModal?: boolean }) => {
  const { data: session } = useSession();
  const areEqualEmails = rest.userId === session?.user.id;
  const isAdmin = session?.user.isAdmin;
  const condition = (areEqualEmails || isAdmin) && !isModal;

  return (
    <div className={clsx(styles.wrapper, !condition && styles['flex-start'])}>
      <UsernameAndDate user={rest} />
      {condition && <Options comment={rest} />}
    </div>
  );
};
