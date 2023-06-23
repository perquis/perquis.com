import { EmailInput } from '@components/globals/atoms';
import { NewsletterCheckbox, StickerButton } from '@components/globals/stickers';
import { DirectionColumn } from '@components/globals/wrappers/DirectionColumn/DirectionColumn';
import { useNewsletter } from '@hooks';

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
