import type { YouTubeProps } from 'react-youtube';
import YouTube from 'react-youtube';

import { IframeContainer } from '@GlobalComponents/atoms/IframeContainer';

export const YouTubePlayer = ({ id, ...props }: Omit<YouTubeProps, 'videoId'>) => (
  <IframeContainer>
    <YouTube id={id} videoId={id} {...props} />
  </IframeContainer>
);
