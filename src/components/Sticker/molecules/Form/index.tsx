import { EmailInput } from '@components/Sticker/atoms/EmailInput';
import { StickerButton } from '@components/Sticker/atoms/StickerButton';

import styles from './Form.module.scss';

export const Form = () => {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <EmailInput placeholder="Enter your Email" />
      <StickerButton>Subscribe</StickerButton>
    </form>
  );
};
