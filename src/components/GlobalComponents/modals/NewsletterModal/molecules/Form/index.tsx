import useTranslation from 'next-translate/useTranslation';

import { EmailInput } from '@GlobalComponents/atoms/EmailInput';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { StickerButton } from '@stickers/index';

import { useFormStore } from '@stories/forms';

import styles from './Form.module.scss';

export const Form = () => {
  const [updateEmailKeywords] = useFormStore((state) => [state.updateEmailKeywords]);
  const { t } = useTranslation('global');
  const placeholder = t('newsletter.placeholder'),
    button = t('newsletter.button');

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <DirectionColumn>
        <EmailInput placeholder={placeholder} isFullWidth onChange={(e) => updateEmailKeywords(e.currentTarget.value)} />
        <StickerButton>{button}</StickerButton>
      </DirectionColumn>
    </form>
  );
};
