import useTranslation from 'next-translate/useTranslation';

import { EmailInput } from '@components/Sticker/atoms/EmailInput';
import { StickerButton } from '@components/Sticker/atoms/StickerButton';

import { useFormStore } from '@stories/forms';

import styles from './Form.module.scss';

export const Form = () => {
  const [updateEmailKeywords] = useFormStore((state) => [state.updateEmailKeywords]);
  const { t } = useTranslation('global');
  const placeholder = t('newsletter.placeholder'),
    button = t('newsletter.button');

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <EmailInput placeholder={placeholder} onChange={(e) => updateEmailKeywords(e.currentTarget.value)} />
      <StickerButton>{button}</StickerButton>
    </form>
  );
};
