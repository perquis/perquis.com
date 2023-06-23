import type { FC } from 'react';

import { Button } from '@components/globals/atoms';
import type { UseFormResult } from '@hooks';
import { useInternationalizedRouting } from '@hooks';

import styles from './ResetOrPublish.module.scss';

export const ResetOrPublish: FC<Omit<UseFormResult, 'handleSubmit'>> = ({ content, isDisabledCondition: isDisabled, updateKeywords }) => {
  const { commentFormPublish, commentFormReset } = useInternationalizedRouting('global');

  return (
    <div className={styles.actions}>
      <Button isTertiary onClick={() => updateKeywords('')} disabled={isDisabled}>
        {commentFormReset}
      </Button>
      <Button disabled={content.length < 5 || isDisabled}>{commentFormPublish}</Button>
    </div>
  );
};
