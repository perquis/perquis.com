import type { Props } from 'react-codepen-embed';
import Codepen from 'react-codepen-embed';

import { IframeContainer } from '@GlobalComponents/atoms/IframeContainer';

export const CodepenPlayer = (props: Props) => (
  <IframeContainer>
    <Codepen {...props} />
  </IframeContainer>
);
