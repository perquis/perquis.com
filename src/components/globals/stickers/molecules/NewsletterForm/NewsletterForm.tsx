import { EmailInput } from '@components/globals/atoms';
import { NewsletterCheckbox } from '@components/globals/stickers/atoms/NewsletterCheckbox/NewsletterCheckbox';
import { StickerButton } from '@components/globals/stickers/index';
import { useNewsletter } from '@hooks';

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
