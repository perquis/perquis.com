import useTranslation from 'next-translate/useTranslation';

import { Button } from '@GlobalComponents/atoms/Button';

import { useFormStore } from '@stories/forms';

import styles from './Actions.module.scss';

export const Actions = () => {
  const [updateCommentKeywords] = useFormStore((state) => [state.updateCommentKeywords]);

  const { t } = useTranslation('global');
  const reset = t('comment.form.reset'),
    publish = t('comment.form.publish');

  return (
    <div className={styles.actions}>
      <Button isTertiary onClick={() => updateCommentKeywords('')}>
        {reset}
      </Button>
      <Button>{publish}</Button>
    </div>
  );
};
