import { Children, Fragment, useRef, useState } from 'react';
import type { Children as ChildrenProps, FC } from 'react';

import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { ShowMoreButton } from '@components/Notes/atoms/ShowMoreButton';

import styles from './NoteTemplate.module.scss';

export const NoteTemplate: FC<ChildrenProps & { noteClassName?: string; heroPatternClassName?: string }> = ({ children, noteClassName = '', heroPatternClassName = '' }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const elements = Children.toArray(children).splice(0, 3);
  const count = Children.count(children);

  return (
    <div className={`${styles.note} ${noteClassName}`}>
      <div className={`${styles['hero-pattern']} ${heroPatternClassName}`}>
        <DirectionColumn ref={ref} className={styles['not-padding']}>
          {isOpen ? <>{children}</> : elements.map((child, i) => <Fragment key={i}>{child}</Fragment>)}
        </DirectionColumn>
        {count > 3 && !isOpen ? <ShowMoreButton onClick={() => setOpen(true)} /> : null}
      </div>
    </div>
  );
};
