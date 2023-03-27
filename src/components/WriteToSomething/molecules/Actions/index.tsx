import { Button } from '@GlobalComponents/atoms/Button';

import { useFormStore } from '@stories/forms';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './Actions.module.scss';

export const Actions = () => {
  const [updateCommentKeywords] = useFormStore((state) => [state.updateCommentKeywords]);
  const { commentFormReset, commentFormPublish } = useInternationalizedRouting('global');

  return (
    <div className={styles.actions}>
      <Button isTertiary onClick={() => updateCommentKeywords('')}>
        {commentFormReset}
      </Button>
      <Button>{commentFormPublish}</Button>
    </div>
  );
};
