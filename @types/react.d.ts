import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

declare module 'react' {
  export interface Children {
    children?: ReactNode;
  }

  export type ReactHTMLElementProps<T extends HTMLElement> = DetailedHTMLProps<HTMLAttributes<T>, T> & Children;
}
