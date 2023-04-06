import { EmailInput } from '@GlobalComponents/atoms/EmailInput';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { NewsletterCheckbox } from '@stickers/atoms/NewsletterCheckbox';
import { StickerButton } from '@stickers/index';

import { useNewsletter } from '@hooks/useNewsletter';

import styles from './NewsletterModalForm.module.scss';

export const NewsletterModalForm = () => {
  const { email, updateEmailKeywords, handleOnSubmit, newsletterButton, newsletterPlaceholder } = useNewsletter(true);

  return (
    <form onSubmit={handleOnSubmit} className={styles.form}>
      <NewsletterCheckbox />
      <DirectionColumn>
        <EmailInput placeholder={newsletterPlaceholder} isFullWidth onChange={(e) => updateEmailKeywords(e.currentTarget.value)} value={email} />
        <StickerButton>{newsletterButton}</StickerButton>
      </DirectionColumn>
    </form>
  );
};
