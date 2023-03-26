import { EmailInput } from '@GlobalComponents/atoms/EmailInput';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { StickerButton } from '@stickers/index';

import { useFormStore } from '@stories/forms';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './Form.module.scss';

export const Form = () => {
  const { newsletterButton, newsletterPlaceholder } = useInternationalizedRouting('global');
  const [updateEmailKeywords] = useFormStore((state) => [state.updateEmailKeywords]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <DirectionColumn>
        <EmailInput placeholder={newsletterPlaceholder} isFullWidth onChange={(e) => updateEmailKeywords(e.currentTarget.value)} />
        <StickerButton>{newsletterButton}</StickerButton>
      </DirectionColumn>
    </form>
  );
};
