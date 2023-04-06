import { EmailInput } from '@GlobalComponents/atoms/EmailInput';

import { NewsletterCheckbox } from '@stickers/atoms/NewsletterCheckbox';
import { StickerButton } from '@stickers/index';

import { useNewsletter } from '@hooks/useNewsletter';

import styles from './NewsletterForm.module.scss';

export const NewsletterForm = () => {
  const { email, updateEmailKeywords, handleOnSubmit, newsletterButton, newsletterPlaceholder } = useNewsletter();

  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <NewsletterCheckbox />
      <div className={styles['email-input-wrapper']}>
        <EmailInput placeholder={newsletterPlaceholder} onChange={(e) => updateEmailKeywords(e.currentTarget.value)} value={email} />
        <StickerButton>{newsletterButton}</StickerButton>
      </div>
    </form>
  );
};
