import type { Children, FC } from 'react';

import { firaCode } from '@fonts/FiraCode';
import { poppins, roboto } from '@fonts/index';

export const GlobalLayout: FC<Children> = ({ children }) => {
  return (
    <>
      <style jsx global>
        {`
          html,
          input,
          textarea {
            font-family: ${poppins.style.fontFamily};
          }

          pre,
          code {
            font-family: ${firaCode.style.fontFamily};
          }

          button {
            font-family: ${roboto.style.fontFamily};
            font-size: 1.6rem;
            cursor: pointer;
          }
        `}
      </style>
      {children}
    </>
  );
};
