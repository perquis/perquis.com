import type { MDXRemoteProps } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';

import { DirectionColumn } from '@GlobalComponents/atoms/DirectionColumn';

import { components } from './components';

export const MarkdownToHTML = (props: MDXRemoteProps) => {
  return (
    <DirectionColumn>
      <MDXRemote {...props} components={components} />
    </DirectionColumn>
  );
};
