import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';

import { shikiOptions } from '@themes/shikiOptions';

export const serializedContent = async (args: unknown) => {
  return await serialize(String(args), {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, shikiOptions], rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }], rehypeToc],
    },
  });
};
