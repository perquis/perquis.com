import type { ReactNode } from 'react';

declare module 'react' {
  export interface Children {
    children?: ReactNode;
  }
}
