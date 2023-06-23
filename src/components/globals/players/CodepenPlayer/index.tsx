import type { Props } from 'react-codepen-embed';
import Codepen from 'react-codepen-embed';

import { IframeContainer } from '@components/globals/atoms';

export const CodepenPlayer = (props: Props) => (
  <IframeContainer>
    <Codepen {...props} />
  </IframeContainer>
);
