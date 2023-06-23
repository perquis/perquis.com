import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

import { shikiOptions } from '@themes';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { content } = req.body;
  if (!content) res.status(400).send({ message: 'Bad request.' });

  switch (req.method) {
    case 'POST':
      return res.send(
        await serialize(content, {
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, shikiOptions], rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
          },
        })
      );
    default:
      return res.status(400).json({ message: 'Invalid method.' });
  }
};
