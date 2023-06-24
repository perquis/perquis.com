import type { MutableRefObject } from 'react';
import { useEffect, useRef } from 'react';

import { SalyImage } from '@components/globals/modals/NewsletterModal/atoms/SalyImage/SalyImage';
import { NewsletterModalForm } from '@components/globals/modals/NewsletterModal/molecules/NewsletterModalForm/NewsletterModalForm';
import { TitleAndSubtitle } from '@components/globals/modals/NewsletterModal/molecules/TitleAndSubtitle/TitleAndSubtitle';
import { Modal } from '@components/locals/Modal';
import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import { useModalStore } from '@stories';

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
      <div className={styles.modal} ref={ref}>
        <div>
          <SalyImage />
        </div>
        <div className={styles.gap}>
          <TitleAndSubtitle />
          <NewsletterModalForm />
        </div>
      </div>
    </Modal>
  );
};
