import { useState } from 'react';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './NewsletterCheckbox.module.scss';

export const NewsletterCheckbox = () => {
  const [isChecked, setChecked] = useState(false);
  const handleOnChecked = () => setChecked(!isChecked);
  const { newsletterApprove } = useInternationalizedRouting('global');

  return (
    <label htmlFor="approvement" className={styles.label}>
      <input
        type="checkbox"
        name="approvement"
        id="approvement"
        className={styles.checkbox}
        required
        checked={isChecked}
        onClick={handleOnChecked}
        onKeyDown={(e) => e.key === 'Enter' && handleOnChecked()}
      />{' '}
      <span>{newsletterApprove}</span>
    </label>
  );
};
