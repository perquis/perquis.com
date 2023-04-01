import { Button } from '@GlobalComponents/atoms/Button';

import { useFormStore } from '@stories/forms';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './Actions.module.scss';

export const Actions = () => {
  const [commentKeywords, updateCommentKeywords, isDisabled] = useFormStore((state) => [state.commentKeywords, state.updateCommentKeywords, state.isDisabled]);
  const { commentFormReset, commentFormPublish } = useInternationalizedRouting('global');

  return (
    <div className={styles.actions}>
      <Button isTertiary onClick={() => updateCommentKeywords('')} disabled={isDisabled}>
        {commentFormReset}
      </Button>
      <Button disabled={commentKeywords.length < 5 || isDisabled}>{commentFormPublish}</Button>
    </div>
  );
};
