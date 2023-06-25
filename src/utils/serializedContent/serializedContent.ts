import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import CodeHighlighter from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';

import { shikiOptions } from '@themes';

export const serializedContent = async (args: unknown) => {
  return await serialize(String(args), {
    mdxOptions: {
      rehypePlugins: [[CodeHighlighter, shikiOptions], rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }], rehypeToc],
    },
  });
};
