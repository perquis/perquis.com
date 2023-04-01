import type { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from 'prisma/prismaClient';

export const getAllPosts = async (req: NextApiRequest, res: NextApiResponse, slug: string) => {
  try {
    const posts = await prismaClient.post.findMany({ where: { articleId: slug } });
    if (posts.length === 0) return res.status(404).send({ message: 'Not Found.' });

    const [post] = posts;
    return res.send(post);
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};
