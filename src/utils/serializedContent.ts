import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';

import { options } from '@themes/options';

export const serializedContent = async (args: unknown) =>
  await serialize(String(args), {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, options], rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }], rehypeToc],
    },
  });
