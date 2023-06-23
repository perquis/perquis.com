import type { YouTubeProps } from 'react-youtube';
import YouTube from 'react-youtube';

import styles from '@components/globals/atoms/IframeContainer/IframeContainer.module.scss';

export const YouTubePlayer = ({ id, isDefault, ...props }: Omit<YouTubeProps, 'videoId'> & { isDefault?: boolean }) => (
  <div tabIndex={-1}>
    <YouTube id={id} videoId={id} className={isDefault ? styles['default-iframe-container'] : styles['iframe-container']} {...props} />
  </div>
);
