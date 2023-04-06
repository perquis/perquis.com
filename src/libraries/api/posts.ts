import type { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from 'prisma/prismaClient';

export const getAllPosts = async (req: NextApiRequest, res: NextApiResponse, slug: string) => {
  try {
    const post = await prismaClient.post.findFirst({ where: { articleId: slug } });
    if (!post) {
      const createdPost = await prismaClient.post.create({ data: { articleId: slug } });

      return res.send(createdPost);
    }

    return res.send(post);
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};
