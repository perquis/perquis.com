import useKey from '@rooks/use-key';

import { EmailInput } from '@GlobalComponents/atoms/EmailInput';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { StickerButton } from '@stickers/index';

import { useFormStore } from '@stories/forms';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './NewsletterModalForm.module.scss';

export const NewsletterModalForm = () => {
  const { newsletterButton, newsletterPlaceholder } = useInternationalizedRouting('global');
  const [email, updateEmailKeywords] = useFormStore((state) => [state.emailKeywords, state.updateEmailKeywords]);

  useKey('Escape', () => updateEmailKeywords(''));

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <DirectionColumn>
        <EmailInput placeholder={newsletterPlaceholder} isFullWidth onChange={(e) => updateEmailKeywords(e.currentTarget.value)} value={email} />
        <StickerButton>{newsletterButton}</StickerButton>
      </DirectionColumn>
    </form>
  );
};
