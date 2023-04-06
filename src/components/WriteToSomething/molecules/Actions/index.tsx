import type { FC } from 'react';

import { Button } from '@GlobalComponents/atoms/Button';

import type { UseFormResult } from '@hooks/useForm';
import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './Actions.module.scss';

export const Actions: FC<Omit<UseFormResult, 'handleSubmit'>> = ({ content, isDisabledCondition: isDisabled, updateKeywords }) => {
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
