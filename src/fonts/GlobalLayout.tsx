import { Poppins, Roboto } from 'next/font/google';
import type { Children, FC } from 'react';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'], style: ['normal', 'italic'] });
const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'], style: ['normal', 'italic'] });

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
