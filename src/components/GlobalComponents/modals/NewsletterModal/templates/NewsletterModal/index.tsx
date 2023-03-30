import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import type { MutableRefObject } from 'react';
import { useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';

import { SalyImage } from '@modals/NewsletterModal/atoms/SalyImage';
import { NewsletterModalForm } from '@modals/NewsletterModal/molecules/NewsletterModalForm';
import { TitleAndSubtitle } from '@modals/NewsletterModal/molecules/TitleAndSubtitle';

import { Modal } from '@components/Modal';

import { useModalStore } from '@stories/modals';

import styles from './NewsletterModal.module.scss';

export const NewsletterModal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isNewsletterModalOpen, updateNewsletterModalOpen] = useModalStore((state) => [state.isNewsletterModalOpen, state.updateNewsletterModalOpen]);

  useEffect(() => {
    return () => {
      document.cookie = `newsletter-modal=true;max-age=2592000;path=/;`;
    };
  }, []);

  const cb = () => updateNewsletterModalOpen(false);

  useKey('Escape', cb);
  useOutsideClick(ref as unknown as MutableRefObject<HTMLDivElement>, cb, isNewsletterModalOpen);

  return (
    <Modal id="#newsletter">
      <FocusLock>
        <div className={styles.modal} ref={ref}>
          <div>
            <SalyImage />
          </div>
          <div className={styles.gap}>
            <TitleAndSubtitle />
            <NewsletterModalForm />
          </div>
        </div>
      </FocusLock>
    </Modal>
  );
};
